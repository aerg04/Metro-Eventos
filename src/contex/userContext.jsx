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
            console.log("Email del usuario:", email);
            if (!email) throw new Error("No se encontró email del usuario.");

            const userData = await getUserProfile(email);
            console.log("Datos del usuario:", userData);
            setUser(userData);
        } catch (error) {
            console.error("Error al cargar los datos del usuario:", error);
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
