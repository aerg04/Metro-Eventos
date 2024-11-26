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

export const register = async (data) => {
    try {
        // const exist = await axiosInstance.get(`/users/${data.mail}`, data);
        // if(exist.data.length > 0){
        //     throw new Error('Email already exists');
        // }
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

export async function getUserBookmarks() {
    try{
        const email = localStorage.getItem('email');
        const response = await axiosInstance.get(`/users/${email}`);
        // console.log(response.data.bookmarks);
        return response.data;

    }catch(error){
        console.error('Error al obtener los bookmarks del usuario:', error);
   
    }

}

export async function updateBookmark(user) {
    try{
        console.log(user);
        const email = localStorage.getItem('email');
        const response = await axiosInstance.put(`/users/${email}`,user);
        return response.data;

    }catch(error){
        console.error('Error al agregar el bookmark:', error);
        
    }

}
