// RegisterController.jsx
import React from 'react';
import Register from '../pages/Register';
// import { registerUser } from './RegisterModel';

function RegisterController(){
    async function handleRegister(userData) {
        try {
            const response = await registerUser(userData);
            console.log('User registered successfully:', response);
            // Handle successful registration (e.g., redirect to login page)
        } catch (error) {
            console.error('Registration failed:', error);
            // Handle registration error (e.g., show error message)
        }
    }

    return <Register onSubmit={handleRegister} />;
};

export default RegisterController;