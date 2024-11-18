// src/services/authService.js
import axiosInstance from '../axiosConfig';

export const login = async (email, password) => {
    try {
        const response = await axiosInstance.post('/auth/login', { email, password });
        const { token } = response.data;
        localStorage.setItem('token', token);
        return token;
    } catch (error) {
        throw new Error('Login failed');
    }
};

export const register = async (data) => {
    try {
        const response = await axiosInstance.post('/auth/signup', data);
        const { token } = response.data.token; 
        // response.data.email y response.data.role son el email y el role del usuario    
        localStorage.setItem('token', token);
        return token;
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