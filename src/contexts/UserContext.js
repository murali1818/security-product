import React, { createContext, useContext, useState, useEffect } from 'react';
import { account } from '../lib/appwrite';

const UserContext = createContext();

export const UserProvider = ({ children }) => {
    const [user, setUser] = useState(null);
    const [loading, setLoading] = useState(true); // Track loading state

    useEffect(() => {
        const fetchUser = async () => {
            try {
                const userDetails = await account.get();
                setUser(userDetails); // Save user details in state
            } catch (err) {
                console.error('No active session found:', err);
                setUser(null);
            } finally {
                setLoading(false); // Set loading to false after fetching
            }
        };

        fetchUser();
    }, []);

    return (
        <UserContext.Provider value={{ user, setUser, loading }}>
            {children}
        </UserContext.Provider>
    );
};

export const useUser = () => useContext(UserContext);
