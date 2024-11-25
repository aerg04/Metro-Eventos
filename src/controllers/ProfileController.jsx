import React, { useState, useEffect } from 'react';
import Profile from '../pages/Profile';
import { getUserProfile } from "../models/user";
import { getUserInfo } from "../models/user";

const ProfileController = () => {
    const [userData, setUserData] = useState(null);
    const [isLoading, setIsLoading] = useState(true);
    const [error, setError] = useState(null);

useEffect(() => {
    const fetchData = async () => {
        try {
            const {email} = getUserInfo();
            const data = await getUserProfile(email);
            setUserData(data);
        } catch (error) {
            console.error('Error al cargar el perfil:', error);
            setError('Error al cargar el perfil');
        } finally {
            setIsLoading(false);
                      }
    };
    fetchData();
}, []);


    const handleUpdateUser = async (updatedData) => {
        try {
            const { email } = getUserInfo(); // Obtener email desde localStorage
            const response = await axiosInstance.put(`/users/${email}`, updatedData);
            if (response.status === 200) {
                setUserData(response.data);
            } else {
                console.error('Error al actualizar los datos del usuario');
            }
        } catch (error) {
            console.error('Error al actualizar los datos del usuario:', error);
        }
    };

    return (
        <Profile userData={userData} handleUpdateUser={handleUpdateUser} />
    );
};

export default ProfileController;
