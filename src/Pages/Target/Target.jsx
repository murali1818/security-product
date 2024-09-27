import React, { useState } from 'react';
import { FaSearch, FaPlus, FaTrash, FaUsers, FaFileAlt, FaFilter } from 'react-icons/fa'; // import the icons
import './Target.css';

const Target = () => {
    const [data, setData] = useState([
        {
            id: 1,
            address: 'www.example.com',
            description: 'Web Server',
            critical: 'High',
            status: 'Active',
            vulnerabilities: {
                high: 5,
                medium: 0,
                low: 0
            }
        },
        {
            id: 2,
            address: 'www.database.com',
            description: 'Database Server',
            critical: 'Medium',
            status: 'Inactive',
            vulnerabilities: {
                high: 0,
                medium: 2,
                low: 0
            }
        },
        {
            id: 3,
            address: 'www.mailserver.com',
            description: 'Mail Server',
            critical: 'High',
            status: 'Active',
            vulnerabilities: {
                high: 3,
                medium: 0,
                low: 0
            }
        },
        {
            id: 4,
            address: 'www.apiserver.com',
            description: 'API Server',
            critical: 'Low',
            status: 'Active',
            vulnerabilities: {
                high: 0,
                medium: 0,
                low: 1
            }
        },
        {
            id: 5,
            address: 'www.analytics.com',
            description: 'Analytics Platform',
            critical: 'Medium',
            status: 'Inactive',
            vulnerabilities: {
                high: 0,
                medium: 4,
                low: 0
            }
        },
        {
            id: 6,
            address: 'www.cloudstorage.com',
            description: 'Cloud Storage',
            critical: 'High',
            status: 'Active',
            vulnerabilities: {
                high: 6,
                medium: 0,
                low: 0
            }
        },
        {
            id: 7,
            address: 'www.cdnserver.com',
            description: 'CDN Server',
            critical: 'Low',
            status: 'Active',
            vulnerabilities: {
                high: 0,
                medium: 7,
                low: 0
            }
        },
        {
            id: 8,
            address: 'www.filetransfer.com',
            description: 'File Transfer Service',
            critical: 'Medium',
            status: 'Inactive',
            vulnerabilities: {
                high: 0,
                medium: 3,
                low: 0
            }
        },
        {
            id: 9,
            address: 'www.paymentgateway.com',
            description: 'Payment Gateway',
            critical: 'High',
            status: 'Active',
            vulnerabilities: {
                high: 8,
                medium: 0,
                low: 0
            }
        },
        {
            id: 10,
            address: 'www.vpnserver.com',
            description: 'VPN Server',
            critical: 'Medium',
            status: 'Active',
            vulnerabilities: {
                high: 0,
                medium: 2,
                low: 0
            }
        },
        {
            id: 11,
            address: 'www.crmplatform.com',
            description: 'CRM Platform',
            critical: 'Medium',
            status: 'Inactive',
            vulnerabilities: {
                high: 0,
                medium: 3,
                low: 0
            }
        },
        {
            id: 12,
            address: 'www.billingserver.com',
            description: 'Billing Server',
            critical: 'High',
            status: 'Active',
            vulnerabilities: {
                high: 5,
                medium: 0,
                low: 0
            }
        },
        {
            id: 13,
            address: 'www.securitysystem.com',
            description: 'Security System',
            critical: 'High',
            status: 'Active',
            vulnerabilities: {
                high: 7,
                medium: 0,
                low: 0
            }
        },
        {
            id: 14,
            address: 'www.backupserver.com',
            description: 'Backup Server',
            critical: 'Low',
            status: 'Inactive',
            vulnerabilities: {
                high: 0,
                medium: 0,
                low: 1
            }
        },
        {
            id: 15,
            address: 'www.monitoring.com',
            description: 'Monitoring Server',
            critical: 'Medium',
            status: 'Active',
            vulnerabilities: {
                high: 0,
                medium: 4,
                low: 0
            }
        },
        {
            id: 16,
            address: 'www.dnsserver.com',
            description: 'DNS Server',
            critical: 'Low',
            status: 'Active',
            vulnerabilities: {
                high: 0,
                medium: 6,
                low: 1
            }
        },
        {
            id: 17,
            address: 'www.webapp.com',
            description: 'Web Application',
            critical: 'High',
            status: 'Active',
            vulnerabilities: {
                high: 6,
                medium: 0,
                low: 0
            }
        },
        {
            id: 18,
            address: 'www.authserver.com',
            description: 'Authentication Server',
            critical: 'Medium',
            status: 'Inactive',
            vulnerabilities: {
                high: 0,
                medium: 2,
                low: 0
            }
        },
        {
            id: 19,
            address: 'www.containersystem.com',
            description: 'Container System',
            critical: 'High',
            status: 'Active',
            vulnerabilities: {
                high: 5,
                medium: 0,
                low: 0
            }
        },
        {
            id: 20,
            address: 'www.streamingservice.com',
            description: 'Streaming Service',
            critical: 'Medium',
            status: 'Inactive',
            vulnerabilities: {
                high: 0,
                medium: 3,
                low: 0
            }
        },
        {
            id: 21,
            address: 'www.iotplatform.com',
            description: 'IoT Platform',
            critical: 'High',
            status: 'Active',
            vulnerabilities: {
                high: 7,
                medium: 0,
                low: 0
            }
        },
        {
            id: 22,
            address: 'www.chatserver.com',
            description: 'Chat Server',
            critical: 'Medium',
            status: 'Inactive',
            vulnerabilities: {
                high: 0,
                medium: 4,
                low: 0
            }
        },
        {
            id: 23,
            address: 'www.taskmanagement.com',
            description: 'Task Management System',
            critical: 'Low',
            status: 'Active',
            vulnerabilities: {
                high: 3,
                medium: 0,
                low: 1
            }
        },
        {
            id: 24,
            address: 'www.videoconferencing.com',
            description: 'Video Conferencing Platform',
            critical: 'High',
            status: 'Active',
            vulnerabilities: {
                high: 5,
                medium: 0,
                low: 0
            }
        },
        {
            id: 25,
            address: 'www.datacenter.com',
            description: 'Data Center',
            critical: 'Medium',
            status: 'Inactive',
            vulnerabilities: {
                high: 1,
                medium: 2,
                low: 1
            }
        }
    ]);
    
    const [selectedTargets, setSelectedTargets] = useState([]);
    const [showPopup, setShowPopup] = useState(false);
    const [formType, setFormType] = useState(''); // can be 'add', 'upload', or 'group'
    const [newTarget, setNewTarget] = useState({ address: '', description: '', critical: 'Medium', status: 'Inactive' });
    const [groupName, setGroupName] = useState('');
    const [file, setFile] = useState(null);


    const handleAddTarget = (event) => {
        event.preventDefault();
        setData(prev => [...prev, { ...newTarget, id: Date.now(), vulnerabilities: { high: 0, medium: 0, low: 0 }}]);
        setNewTarget({ address: '', description: '', critical: 'Medium', status: 'Inactive' });
        setShowPopup(false);
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
        console.log('Creating group:', groupName, group);
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

    return (
        <div className='target-container'>
            <div className='button-container'>
                <div className="button-group">
                    <button className="btn scan-btn" onClick={() => handleButtonClick('Scan')}>
                        <FaSearch /> Scan
                    </button>
                    <button className="btn add-btn" onClick={() => { setShowPopup(true); setFormType('add'); }}>
                    <FaPlus /> Add Target
                </button>
                <button className="btn delete-btn" onClick={handleDelete}>
                    <FaTrash /> Delete Selected
                </button>
                <button className="btn group-btn" onClick={() => { setShowPopup(true); setFormType('group'); }}>
                    <FaUsers /> Add Group
                </button>
                    <button className="btn report-btn" onClick={() => handleButtonClick('Generate Report')}>
                        <FaFileAlt /> Generate Report
                    </button>
                    <button className="btn upload-btn" onClick={() => { setShowPopup(true); setFormType('upload'); }}>
                    Import CSV
                </button>
                </div>
                <div>
                    <button className="btn filter-btn" onClick={() => handleButtonClick('Filter')}>
                        <FaFilter /> Filter
                    </button>
                </div>
            </div>

            {/* Table with Scroll */}
            <div className='table-container'>
                <table className='target-table'>
                    <thead>
                        <tr>
                            <th>Select</th>
                            <th>Address</th>
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
                                <td>
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
                                </td>

                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>

            {showPopup && (
                <div className="popup-overlay" onClick={() => setShowPopup(false)}>
                    <div className="popup" onClick={(e) => e.stopPropagation()}>
                        <h2>{formType === 'add' ? 'Add Target' : formType === 'upload' ? 'Upload CSV' : 'Create Group'}</h2>

                        {formType === 'add' && (
                            <form onSubmit={handleAddTarget}>
                                <input
                                    type="text"
                                    placeholder="Address"
                                    value={newTarget.address}
                                    onChange={(e) => setNewTarget({ ...newTarget, address: e.target.value })}
                                    required
                                />
                                <input
                                    type="text"
                                    placeholder="Description"
                                    value={newTarget.description}
                                    onChange={(e) => setNewTarget({ ...newTarget, description: e.target.value })}
                                    required
                                />
                                <select
                                    value={newTarget.critical}
                                    onChange={(e) => setNewTarget({ ...newTarget, critical: e.target.value })}
                                >
                                    <option value="Low">Low</option>
                                    <option value="Medium">Medium</option>
                                    <option value="High">High</option>
                                </select>
                                <select
                                    value={newTarget.status}
                                    onChange={(e) => setNewTarget({ ...newTarget, status: e.target.value })}
                                >
                                    <option value="Active">Active</option>
                                    <option value="Inactive">Inactive</option>
                                </select>
                                <button style={{ background: 'green' }} type="submit">Add Target</button>
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
                                <input
                                    type="text"
                                    placeholder="Group Name"
                                    value={groupName}
                                    onChange={(e) => setGroupName(e.target.value)}
                                    required
                                />
                                <button style={{ background: 'green' }} type="submit">Create Group</button>
                            </form>
                        )}

                        <button onClick={() => setShowPopup(false)}>Close</button>
                    </div>
                </div>
            )}
        </div>
    );
};

export default Target;
