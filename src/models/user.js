// src/services/authService.js
import axiosInstance from '../axiosConfig';

export const login = async (email, password) => {
    try {
        const response = await axiosInstance.post('/auth/login', { email, password });
        const token = response.data.token;
        const emailk  = response.data.email;
        const  role  = response.data.role;

        localStorage.setItem('token', token);
        localStorage.setItem('email', emailk);
        localStorage.setItem('role', role);
        return token;
    } catch (error) {
        throw new Error('Login failed');
    }
};

export const subscribeToEvent = async (userId, eventId) => {
    try {
        const response = await fetch(`/api/users/${userId}/subscriptions`, {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({ eventId }),
        });
        if (!response.ok) throw new Error('Error al suscribirse al evento');
        return await response.json();
    } catch (error) {
        console.error(error);
        return null;
    }
};

export const register = async (data) => {
    try {
        const exist = await axiosInstance.get(`/users/${email}`, data);
        if(exist.data.length > 0){
            throw new Error('Email already exists');
        }
        const response = await axiosInstance.post('/auth/signup', data);
        return response.data;
    } catch (error) {
        throw new Error('Registration failed');
    }
};

export const logout = () => {
    localStorage.removeItem('token');
};

export const getToken = () => {
    return localStorage.getItem('token');
};

export const getUserInfo = () =>{
    return {
        email: localStorage.getItem('email'),
        role: localStorage.getItem('role'),
    };
};

export const getUserProfile = async (email) => {
    try {
        const response = await axiosInstance.get(`/users/profile/${email}`);
        return response.data;
    } catch (error) {
        console.error('Error al obtener el perfil del usuario:', error);
        throw error;
    }
};
