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

export const subscribeToEvent = async (eventId) => {
    try {

        const email = localStorage.getItem('email');
        const token = localStorage.getItem('token');

        if (!email || !token) {
            throw new Error('Usuario no autenticado');
        }

        const response = await axiosInstance.get(`/users/getUserProfile/${email}`);

        if (!response.data) {
            throw new Error('Usuario no encontrado');
        }

        const cleanEventId = eventId.replace(/^"|"$/, '');

        console.log(typeof eventId);
        console.log("Enviando al backend:", { eventId });

        const subscriptionResponse = await axiosInstance.post(`/users/${email}/subscriptions`, { eventId : cleanEventId } );

        return subscriptionResponse.data;  // Aquí puedes manejar la respuesta como necesites
    } catch (error) {
        console.error('Error al suscribirse al evento:', error);
        throw error;  // Puedes mostrar un mensaje adecuado en el frontend si ocurre un error
    }
};

export const unsubscribeFromEvent = async (eventId) => {
    try {
        const email = localStorage.getItem('email');
        const token = localStorage.getItem('token');

        if (!email || !token) {
            throw new Error('Usuario no autenticado');
        }

        const cleanEventId = eventId.replace(/^"|"$/, '');

        const response = await axiosInstance.post(`/users/${email}/unsubscriptions`, { eventId : cleanEventId });

        return response.data;
    } catch (error) {
        console.error('Error al desuscribirse del evento:', error);
        throw error;
    }
};


export const getSavedEvents = async (email) => {
    try {
        const response = await axiosInstance.get(`/users/${email}/getSubscriptions`);
        return response.data;  // Devuelve los eventos guardados por el usuario
    } catch (error) {
        console.error('Error al obtener eventos guardados:', error);
        throw error;
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
        const response = await axiosInstance.get(`/users/getUserProfile/${email}`);
        return response.data;
    } catch (error) {
        console.error('Error al obtener el perfil del usuario:', error);
        throw error;
    }

};

export const getUserEvents = async (email) => {
    try {
        const response = await axiosInstance.get(`/users/${email}/getSubscriptions`);
        return response.data;
    } catch (error) {
        console.error('Error al obtener eventos guardados:', error);
        throw error;
    }
};