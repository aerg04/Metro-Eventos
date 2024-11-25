import React, { useState, useEffect } from 'react';
import Profile from '../pages/Profile';
import { getUserProfile } from "../models/user";
import { getUserInfo } from "../models/user";
import axiosInstance from '../axiosConfig';
import { UserContext } from '../contex/userContext';
import { useContext } from 'react';

const ProfileController = () => {
    const { user, updateUserData, isLoading } = useContext(UserContext);

    const handleUpdateUser = async (updatedData) => {
        try {
            const { email } = getUserInfo();
            const response = await axiosInstance.put(`/users/${email}`, updatedData);
            if (response.status === 200) {
                updateUserData(response.data);
            } else {
                console.error('Error al actualizar los datos del usuario');
            }
        } catch (error) {
            console.error('Error al actualizar los datos del usuario:', error);
        }
    };

    if (isLoading) return <p>Cargando...</p>;

    return <Profile userData={user} handleUpdateUser={handleUpdateUser} />;
};
export default ProfileController;