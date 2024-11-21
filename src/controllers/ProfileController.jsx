import React, { useState, useEffect } from 'react';
import Profile from '../pages/Profile';

const ProfileController = () => {
    const [userData, setUserData] = useState(null);

useEffect(() => {
    const fetchData = async () => {
        try {
            const response = await fetch('/api/user/profile');
            if (response.ok) {
                const data = await response.json();
                setUserData(data);
            }
        } catch (error) {
            console.error('Error al cargar el perfil:', error);
        }
    };
    fetchData();
}, []);


    const handleUpdateUser = async (updatedData) => {
        try {
            const response = await fetch('/api/user/profile', {
                method: 'PUT',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify(updatedData),
            });
            if (response.ok) {
                const updatedUser = await response.json();
                setUserData(updatedUser);
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
