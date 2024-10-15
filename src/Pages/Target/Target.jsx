import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

import './Target.css';
const Target = () => {
    const [data, setData] = useState(
        [
            {
                id: 1728901279169,
                address: "https://www.example32.com",
                description: "Target 60 description",
                critical: "Medium",
                status: "Inactive",
                vulnerabilities: { critical: 0, high: 0, medium: 0, low: 0, info: 0 }
            },
            {
                id: 1728901280170,
                address: "https://www.example3.com",
                description: "Target 36 description",
                critical: "Medium",
                status: "Inactive",
                vulnerabilities: { critical: 0, high: 0, medium: 0, low: 0, info: 0 }
            },
            {
                id: 1728901281171,
                address: "https://www.example7.com",
                description: "Target 3 description",
                critical: "Low",
                status: "Active",
                vulnerabilities: { critical: 0, high: 0, medium: 0, low: 0, info: 0 }
            },
            {
                id: 1728901282171,
                address: "https://www.example61.com",
                description: "Target 11 description",
                critical: "Low",
                status: "Inactive",
                vulnerabilities: { critical: 0, high: 0, medium: 0, low: 0, info: 0 }
            },
            {
                id: 1728901283171,
                address: "https://www.example36.com",
                description: "Target 84 description",
                critical: "Medium",
                status: "Inactive",
                vulnerabilities: { critical: 0, high: 0, medium: 0, low: 0, info: 0 }
            },
            {
                id: 1728901284172,
                address: "https://www.example9.com",
                description: "Target 8 description",
                critical: "Low",
                status: "Active",
                vulnerabilities: { critical: 0, high: 0, medium: 0, low: 0, info: 0 }
            },
            {
                id: 1728901285173,
                address: "https://www.example92.com",
                description: "Target 97 description",
                critical: "Medium",
                status: "Inactive",
                vulnerabilities: { critical: 0, high: 0, medium: 0, low: 0, info: 0 }
            },
            {
                id: 1728901286173,
                address: "https://www.example48.com",
                description: "Target 71 description",
                critical: "High",
                status: "Active",
                vulnerabilities: { critical: 0, high: 0, medium: 0, low: 0, info: 0 }
            },
            {
                id: 1728901287175,
                address: "https://www.example51.com",
                description: "Target 44 description",
                critical: "High",
                status: "Active",
                vulnerabilities: { critical: 0, high: 0, medium: 0, low: 0, info: 0 }
            },
            {
                id: 1728901288175,
                address: "https://www.example85.com",
                description: "Target 38 description",
                critical: "High",
                status: "Inactive",
                vulnerabilities: { critical: 0, high: 0, medium: 0, low: 0, info: 0 }
            }
        ]

    );
    const navigate = useNavigate();
    const [selectedTargets, setSelectedTargets] = useState([]);
    const [showPopup, setShowPopup] = useState(false);
    const [formType, setFormType] = useState(''); // can be 'add', 'upload', or 'group'  
    const [groupName, setGroupName] = useState('');
    const [file, setFile] = useState(null);
    const [targetAddress, setTargetAddress] = useState('');
    const [targetDescription, setTargetDescription] = useState('');
    const criticalOptions = ['Low', 'Medium', 'High'];
    const statusOptions = ['Active', 'Inactive'];
    const getRandomValue = (options) => {
        return options[Math.floor(Math.random() * options.length)];
    };

    const handleAddTarget = (event) => {
        event.preventDefault();

        // Randomly assign critical and status values
        const randomCritical = getRandomValue(criticalOptions);
        const randomStatus = getRandomValue(statusOptions);

        // Create new target using the form fields and random values
        const newTarget = {
            id: Date.now(),
            address: targetAddress,
            description: targetDescription,
            critical: randomCritical,
            status: randomStatus,
            vulnerabilities: { critical: 0, high: 0, medium: 0, low: 0, info: 0 }
        };

        // Update the data array
        setData((prev) => [...prev, newTarget]);

        // Reset form fields and close popup
        setTargetAddress('');
        setTargetDescription('');
        setShowPopup(false);
        alert(Date.now())
        navigate(`/target/${newTarget.id}`);
        console.log(data); // Log the updated data array
    };

    const handleFileChange = (event) => {
        setFile(event.target.files[0]);
    };

    const handleDelete = () => {
        setData(prevData => prevData.filter(item => !selectedTargets.includes(item.id)));
        setSelectedTargets([]);
    };


    const handleCheckboxChange = (id) => {
        setSelectedTargets(prev =>
            prev.includes(id) ? prev.filter(targetId => targetId !== id) : [...prev, id]
        );
    };


    const handleButtonClick = (event) => {
    }

    const handleCreateGroup = () => {
        // Logic to create the group with `groupName`
        const group = data.filter(item => selectedTargets.includes(item.id));
        alert('Creating group:', groupName, group);
        setGroupName('');
        setSelectedTargets([]);
        setShowPopup(false);
    };

    const handleFileUpload = () => {
        if (file) {
            const formData = new FormData();
            formData.append('file', file);

            // Use fetch or axios to upload the file to your server
            console.log('Uploading file:', file);
            setFile(null);
            setShowPopup(false);
        } else {
            alert('Please select a file to upload.');
        }
    };

    const handleNewScanClick = (id) => {

    };

    return (
        <div className='target-container'>
            <div className='button-container'>
                <div className="button-group">
                    <button
                        className={`btn scan-btn ${selectedTargets.length === 0 ? 'disabled' : ''}`}
                        onClick={handleNewScanClick}
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
                    <button
                        className={`btn delete-btn ${selectedTargets.length === 0 ? 'disabled' : ''}`}
                        onClick={handleDelete}
                        disabled={selectedTargets.length === 0}  // Disable if no target
                    >
                        <i className="fas fa-trash"></i> Delete Selected
                    </button>
                    <button
                        className={`btn group-btn ${selectedTargets.length === 0 ? 'disabled' : ''}`}
                        onClick={() => { setShowPopup(true); setFormType('group'); }}
                        disabled={selectedTargets.length === 0}  // Disable if no target
                    >
                        <i className="fas fa-users"></i> Add Group
                    </button>
                    <button
                        className={`btn report-btn ${selectedTargets.length === 0 ? 'disabled' : ''}`}
                        onClick={() => handleButtonClick('Generate Report')}
                        disabled={selectedTargets.length === 0}  // Disable if no target
                    >
                        <i className="fas fa-file-alt"></i> Generate Report
                    </button>
                    <button
                        className="btn upload-btn"
                        onClick={() => { setShowPopup(true); setFormType('upload'); }}
                    >
                        <i className="fas fa-file-import"></i> Import CSV
                    </button>
                </div>

                <div>
                    <button className='btn filter-btn'>
                        <i className="fas fa-filter"></i> Filter
                    </button>
                </div>
            </div>

            {data.length === 0 ? (
                <div className="no-data">
                    <p>No targets available. Please add a new target.</p>
                </div>
            ) : (
                <div className='table-container'>
                    <table className='target-table'>
                        <thead>
                            <tr>
                                <th>Select</th>
                                <th>Target</th>
                                <th>Description</th>
                                <th>Business Critical</th>
                                <th>Status</th>
                                <th>Vulnerabilities</th>
                            </tr>
                        </thead>
                        <tbody>
                            {data.map((item) => (
                                <tr key={item.id}>
                                    <td>
                                        <input
                                            className='checkbox'
                                            type="checkbox"
                                            checked={selectedTargets.includes(item.id)}
                                            onChange={() => handleCheckboxChange(item.id)}
                                        />
                                    </td>
                                    <td>{item.address}</td>
                                    <td>{item.description}</td>
                                    <td>{item.critical}</td>
                                    <td className={item.status === 'Active' ? 'status-active' : 'status-inactive'}>
                                        {item.status}
                                    </td>
                                    <td className='vul'>
                                        {item.vulnerabilities.critical > -1 && (
                                            <span className="vulnerability-item vulnerability-critical">
                                                {item.vulnerabilities.critical}
                                            </span>
                                        )}
                                        {item.vulnerabilities.high > -1 && (
                                            <span className="vulnerability-item vulnerability-high">
                                                {item.vulnerabilities.high}
                                            </span>
                                        )}
                                        {item.vulnerabilities.medium > -1 && (
                                            <span className="vulnerability-item vulnerability-medium">
                                                {item.vulnerabilities.medium}
                                            </span>
                                        )}
                                        {item.vulnerabilities.low > -1 && (
                                            <span className="vulnerability-item vulnerability-low">
                                                {item.vulnerabilities.low}
                                            </span>
                                        )}
                                        {item.vulnerabilities.info > -1 && (
                                            <span className="vulnerability-item vulnerability-info">
                                                {item.vulnerabilities.info}
                                            </span>
                                        )}
                                    </td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>
            )}

            {showPopup && (
                <div className="popup-overlay" onClick={() => setShowPopup(false)}>
                    <div className="popup" onClick={(e) => e.stopPropagation()}>
                        <h2>
                            {formType === 'add' ? 'Add Target' :
                                formType === 'upload' ? 'Upload CSV' :
                                    'Create Group'}
                        </h2>

                        {formType === 'add' && (
                            <form onSubmit={handleAddTarget}>
                                <label htmlFor="address">Address:</label>
                                <input
                                    id="address"
                                    type="text"
                                    placeholder="Enter address"
                                    value={targetAddress}
                                    onChange={(e) => setTargetAddress(e.target.value)}
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
                                <button className='btn-submit' type="submit">Add Target</button>
                                <button className='btn-cancel' onClick={() => setShowPopup(false)}>Close</button>
                            </form>
                        )}

                        {formType === 'upload' && (
                            <div>
                                <input type="file" onChange={handleFileChange} required />
                                <button style={{ background: 'green' }} onClick={handleFileUpload}>Upload</button>
                            </div>
                        )}

                        {formType === 'group' && (
                            <form onSubmit={(e) => { e.preventDefault(); handleCreateGroup(); }}>
                                <label htmlFor="group-name">Group Name:</label>
                                <input
                                    id="group-name"
                                    type="text"
                                    placeholder="Enter group name"
                                    value={groupName}
                                    onChange={(e) => setGroupName(e.target.value)}
                                    required
                                />
                                <button style={{ background: 'green' }} type="submit">Create Group</button>
                            </form>
                        )}
                    </div>
                </div>
            )}
        </div>

    );
};

export default Target;
