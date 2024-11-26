import axios from 'axios';

const axiosInstance = axios.create({
    baseURL: 'http://localhost:8080',
    headers: {
        'Content-Type': 'application/json',
    },
});

axiosInstance.interceptors.request.use(
    (config) => {

        const token = localStorage.getItem('token');
        console.log('Token in request:', token);

        if (token && !config.url.includes('/auth/signup') && !config.url.includes('/auth/login')) {
            config.headers.Authorization = `Bearer ${token}`;
        }
        return config;
    },
    (error) => {

        return Promise.reject(error);
    }
);

export default axiosInstance;