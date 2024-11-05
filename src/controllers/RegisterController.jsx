// RegisterController.jsx
import React from 'react';
import Register from '../pages/Register';
import { register } from '../models/user';
import { useState } from 'react';
import PopUpMessage from '../components/PopUpMessage';
import { useNavigate } from 'react-router-dom';
// import { registerUser } from './RegisterModel';

function RegisterController(){
    const [showError, setShowError] = useState(false);
    const [errorMessage, setErrorMessage] = useState('');
    const navigate = useNavigate();
    async function handleRegister(userData) {
        try {
            const response = await register(userData);
            navigate('/login');
            console.log('User registered successfully:', response);
            
        } catch (error) {
            console.error('Registration failed:', error);
            setErrorMessage('Error. No se pudo registrar el usuario');
            setShowError(true);
        }
    }

    return (<>
        <Register onSubmit={handleRegister}/>
        {showError && (
            <PopUpMessage
            message={errorMessage}
            onClose={handleCloseError}
            messageOnClose={"Cerrar"}
            />
        )}
        </>)
};

export default RegisterController;