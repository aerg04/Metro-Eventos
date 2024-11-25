import React, { createContext, useState, useEffect } from 'react';
import { getUserProfile, getUserInfo } from '../models/user';

export const UserContext = createContext();

export const UserProvider = ({ children }) => {
    const [user, setUser] = useState(null);
    const [isLoading, setIsLoading] = useState(true);

    useEffect(() => {
        const fetchUser = async () => {
            try {
                const { email } = getUserInfo();
                const userData = await getUserProfile(email);
                setUser(userData);
            } catch (error) {
                console.error('Error al cargar los datos del usuario:', error);
            } finally {
                setIsLoading(false);
            }
        };
        fetchUser();
    }, []);

    const updateUserData = (newData) => {
        setUser((prevUser) => ({ ...prevUser, ...newData }));
    };

    return (
        <UserContext.Provider value={{ user, updateUserData, isLoading }}>
            {children}
        </UserContext.Provider>
    );
};
