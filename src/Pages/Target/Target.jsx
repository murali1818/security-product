import React, { useState, useEffect } from 'react';
import { useUser } from '../../contexts/UserContext';
import axios from 'axios';
import WebsiteScanner from '../../components/WebsiteScanner/WebsiteScanner';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTrash } from '@fortawesome/free-solid-svg-icons';
import '../Scan/Scan.css'
import { useNavigate } from 'react-router-dom';  // Import useNavigate

import './Target.css';
const Target = () => {
    const [data, setData] = useState([]);
    const { user, loading } = useUser();
    const [selectedTargets, setSelectedTargets] = useState([]);
    const [showPopup, setShowPopup] = useState(false);
    const [formType, setFormType] = useState('');
    const [targetName, setTargetName] = useState('');
    const [targetUrl, setTargetUrl] = useState('');
    const [targetDescription, setTargetDescription] = useState('');
    const [isScanning, setIsScanning] = useState(false); // New state for scanning status
    const [scanResult, setScanResult] = useState(null); // To store scan results
    const navigate = useNavigate();  // Initialize navigate hook

    useEffect(() => {
        if (user && user.$id) {
            // Fetch user targets
            axios
                .get(`https://backend-production-5803.up.railway.app/user/targets?userId=${user.$id}`)
                .then((response) => {
                    console.log('User targets fetched successfully:', response.data);
                    setData(response.data.targets); // Set the fetched targets to state
                })
                .catch((error) => {
                    console.error('Error fetching user targets:', error);
                    alert('Failed to fetch targets.');
                });
        }
    }, [user]);

    const handleAddTarget = async (event) => {
        event.preventDefault();

        if (!user || !user.$id) {
            console.error('User context is not available or $id is missing.');
            alert('User not logged in or invalid session.');
            return;
        }

        try {
            // Step 1: Add target to the backend
            console.log('Adding target:', { targetName, targetUrl, targetDescription, userId: user.$id });

            const response = await axios.post('https://backend-production-5803.up.railway.app/targets', {
                name: targetName,
                url: targetUrl,
                description: targetDescription,
                userId: user.$id,
            });

            console.log('Target added successfully:', response.data);

            const newTarget = response.data.target;
            setData((prev) => [...prev, newTarget]); // Update local state with the new target

            // Step 2: Reset form fields and close the popup
            setTargetName('');
            setTargetUrl('');
            setTargetDescription('');
            setShowPopup(false);

        } catch (error) {
            // Handle errors for both target creation and scan initiation
            if (error.response) {
                console.error('Server error:', error.response.data);
                alert('Failed to add target: ' + (error.response.data.message || 'Server error.'));
            } else if (error.request) {
                console.error('No response from server:', error.request);
                alert('Failed to connect to the server.');
            } else {
                console.error('Unexpected error:', error.message);
                alert('An unexpected error occurred: ' + error.message);
            }
        }
    };


    const handleScan = async () => {
        if (!selectedTargets || selectedTargets.length === 0) {
            alert('Please select a target to scan.');
            return;
        }

        const selectedTarget = data.find((target) => target._id === selectedTargets); // Get the selected target details

        if (!selectedTarget) {
            alert('Selected target not found. Please refresh and try again.');
            return;
        }

        
        setIsScanning(true);

        try {
            console.log('Sending domain to scan API...', selectedTarget.url);
            const scanResponse = await axios.post('https://securityapi-production-973d.up.railway.app/scan', {
                userid: user.$id,
                domain: selectedTarget.url, // Use the selected target's URL as the domain
                targetid:selectedTargets
            });

            if (scanResponse.status === 200) {
                setScanResult(scanResponse.data); // Set scan summary data to state
                console.log('Scan initiated successfully:', scanResponse.data);
            } else {
                console.error('Scan initiation failed:', scanResponse.status);
                alert('Scan initiation failed. Please try again later.');
            }

        } catch (error) {
            console.error('Error during scan');
            alert('The target may be already scan please use different');
        } finally {
            setIsScanning(false); // Set scanning status back to false
        }
    };

    const handleDeleteTarget = async (targetId) => {
        try {
            const response = await axios.delete('https://backend-production-5803.up.railway.app/targets', {
                data: {
                    userId: user.$id,
                    targetIds: [targetId], // Pass the single targetId as an array
                },
            });

            if (response.status === 200) {
                alert('Target deleted successfully!');
                setData((prevData) => prevData.filter((target) => target._id !== targetId)); // Update state
            }
        } catch (error) {
            console.error('Error deleting target:', error);
            alert('Failed to delete target.');
        }
    };

    if (loading) {
        return <div>Loading...</div>; // Show loading while fetching user
    }

    if (!user) {
        return <div>No user found. Please log in.</div>; // Handle no user case
    }

    // Show WebsiteScanner component during scan
    if (isScanning) {
        return <WebsiteScanner scanData={scanResult}/>;
    }


    if (scanResult) {
        navigate(`/scandetail?u=${user.$id}&t=${selectedTargets}`);
    }
    return (
        <div className='target-container'>
            <div className='button-container'>
                <div className="button-group">
                    <button
                        className={`btn scan-btn ${selectedTargets.length === 0 ? 'disabled' : ''}`}
                        onClick={handleScan}
                        disabled={selectedTargets.length === 0}  // Disable if no target
                    >
                        <i className="fas fa-search"></i> Scan
                    </button>

                    <button
                        className="btn add-btn"
                        onClick={() => { setShowPopup(true); setFormType('add'); }}
                    >
                        <i className="fas fa-plus"></i> Add Target
                    </button>
                </div>

            </div>

            {data.length === 0 ? (
                <div>No targets available. Please add a new target.</div>
            ) : (
                <div className="target-list">
                    {data.map((target) => (
                        <div key={target._id} className="target-item">
                            <label className="target-item-label">
                                <input
                                    type="radio"
                                    name="selectedTarget"
                                    value={target._id}
                                    onChange={() => setSelectedTargets(target._id)}
                                    className="custom-security-radio"
                                />

                                <div className="target-item-content">
                                    <h3>{target.name}</h3>
                                    <p>{target.description}</p>
                                    <a href={target.url} target="_blank" rel="noopener noreferrer">
                                        {target.url}
                                    </a>
                                </div>
                            </label>
                            <button
                                className="btn-delete"
                                onClick={() => handleDeleteTarget(target._id)} // Pass the target ID
                            >
                                <FontAwesomeIcon icon={faTrash} />
                            </button>
                        </div>
                    ))}
                </div>
            )}



            {showPopup && (
                <div className="popup-overlay" onClick={() => setShowPopup(false)}>
                    <div className="popup" onClick={(e) => e.stopPropagation()}>
                        <h2>
                            {formType === 'add' ? 'Add Target' :
                                formType === 'upload' ? 'Upload CSV' :
                                    formType === 'group' ? 'Create Group' :
                                        formType === 'report' ? 'Generate Report' :
                                            formType === 'scan' ? 'Scan' : ''}
                        </h2>

                        {formType === 'add' && (
                            <form onSubmit={handleAddTarget}>
                                <label htmlFor="name">Name:</label>
                                <input
                                    id="name"
                                    type="text"
                                    placeholder="Enter name"
                                    value={targetName}
                                    onChange={(e) => setTargetName(e.target.value)}
                                    required
                                />
                                <label htmlFor="url">URL:</label>
                                <input
                                    id="url"
                                    type="text"
                                    placeholder="Enter URL"
                                    value={targetUrl}
                                    onChange={(e) => setTargetUrl(e.target.value)}
                                    required
                                />
                                <label htmlFor="description">Description:</label>
                                <input
                                    id="description"
                                    type="text"
                                    placeholder="Enter description"
                                    value={targetDescription}
                                    onChange={(e) => setTargetDescription(e.target.value)}
                                    required
                                />
                                <button className="btn-submit" type="submit">Add Target</button>
                                <button className="btn-cancel" type="button" onClick={() => setShowPopup(false)}>Close</button>
                            </form>
                        )}


                    </div>
                </div>
            )}


        </div>

    );
};

export default Target;
