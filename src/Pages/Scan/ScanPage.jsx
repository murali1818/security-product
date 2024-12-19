import React, { useState, useEffect } from 'react';
import axios from 'axios';
import './ScanPage.css';
import { Link } from 'react-router-dom';
import { useUser } from '../../contexts/UserContext';

const ScanPage = () => {
  const { user, loading } = useUser();
  const [targets, setTargets] = useState([]); // Holds fetched API data

  useEffect(() => {
    if (loading) return; // Avoid fetching if user context is still loading

    if (user && user.$id) {
      axios
        .get(`https://securityapi-production-973d.up.railway.app/fuser?u=${user.$id}`)
        .then((response) => {
          console.log('User targets fetched successfully:', response.data);
          setTargets(response.data.data || []); // Ensure it falls back to an empty array
        })
        .catch((error) => {
          console.error('Error fetching user targets:', error);
          alert('Failed to fetch targets. Please try again.');
        });
    }
  }, [user, loading]);

  const handleDelete = async (userId, targetId) => {
    try {
      const response = await axios.delete(
        `https://securityapi-production-973d.up.railway.app/delete?u=${userId}&t=${targetId}`
      );
      if (response.status === 200) {
        // Update the targets list
        setTargets((prevTargets) => prevTargets.filter((target) => target.targetId !== targetId));
      } else {
        alert('Failed to delete target. Please try again.');
      }
    } catch (error) {
      console.error('Error deleting target:', error);
      alert('An error occurred while deleting the target.');
    }
  };

  if (loading) {
    return <div className="loading">Loading user data...</div>; // Display while loading
  }

  if (!user) {
    return <div className="error">User not found. Please log in again.</div>; // Handle missing user
  }

  return (
    <div className="scan-container">
      {/* Table Container */}
      <div className="table-container">
        {targets.length === 0 ? (
          <p className="no-data">No targets available for this user.</p>
        ) : (
          <table className="scan-table">
            <thead>
              <tr>
                <th>Target URL</th>
                <th>Scan Duration</th>
                <th>Last Scan</th>
                <th>Action</th>
                
              </tr>
            </thead>
            <tbody>
              {targets.map((item, index) => (
                <tr key={item._id || index}>
                  <td>
                    <a href={item.domain} target="_blank" rel="noopener noreferrer" className="scanspageUrl">
                      {item.domain}
                    </a>
                  </td>
                  <td>{item.time_taken} ms</td>
                  <td>{item.end_time}</td>
                  <td>
                    {item.targetId ? (
                      <button className="btn btn-view">
                        <Link to={`/scandetail?u=${user.$id}&t=${item.targetId}`} className="view-link">
                          <i className="fas fa-eye"></i> View
                        </Link>
                      </button>
                    ) : (
                      <span className="missing-id">ID Missing</span>
                    )}
                    <button
                      className="btn btn-delete"
                      onClick={() => handleDelete(user.$id, item.targetId)}
                    >
                      <i className="fas fa-trash-alt"></i> Delete
                    </button>
                  </td>
                  
                </tr>
              ))}
            </tbody>
          </table>
        )}
      </div>
    </div>
  );
};

export default ScanPage;
