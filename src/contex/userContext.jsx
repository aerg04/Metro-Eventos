import React, { createContext, useState, useEffect } from 'react';
import { getUserProfile, getUserInfo } from '../models/user';

export const UserContext = createContext();

export const UserProvider = ({ children }) => {
    const [user, setUser] = useState(null); // Estado inicial como null
    const [isLoading, setIsLoading] = useState(true);

    useEffect(() => {
        const fetchUser = async () => {
            try {

                const { email } = getUserInfo();
                console.log("Email del usuario:", email);

                if (!email) {
                    throw new Error("No se encontró email del usuario. Asegúrate de que el usuario ha iniciado sesión.");
                }

                // Evitar cargas innecesarias si ya hay un usuario cargado
                if (!user) {
                    const userData = await getUserProfile(email);
                    console.log("Datos del usuario desde el servidor:", userData);

                    // Verificar que la respuesta sea válida
                    if (!userData) {
                        throw new Error("No se encontraron datos para el usuario.");
                    }

                    // Establecer los datos del usuario
                    setUser(userData);
                }
            } catch (error) {
                console.error("Error al cargar los datos del usuario:", error);
            } finally {
                setIsLoading(false); // Asegurarse de que loading se actualice
            }
        };

        fetchUser();
    }, []); // Solo se ejecuta una vez al montar el componente

    // Función para actualizar datos del usuario en el contexto
    const updateUserData = (newData) => {
        setUser((prevUser) => ({
            ...prevUser,
            ...newData,
        }));
    };

    return (
        <UserContext.Provider value={{ user, updateUserData, isLoading }}>
            {children}
        </UserContext.Provider>
    );
};
