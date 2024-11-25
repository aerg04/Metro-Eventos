import axios from 'axios';

const axiosInstance = axios.create({
    baseURL: 'http://localhost:8080',
    headers: {
        'Content-Type': 'application/json',
    },
});

axiosInstance.interceptors.request.use(
    (config) => {
        // Get the token from localStorage
        const token = localStorage.getItem('token');
        console.log('Token in request:', token);
        // If the token exists, add it to the Authorization header
        if (token && !config.url.includes('/auth/signup') && !config.url.includes('/auth/login')) {
            config.headers.Authorization = `Bearer ${token}`;
        }
        return config;
    },
    (error) => {
        // Handle any errors that occur during request setup
        return Promise.reject(error);
    }
);

export default axiosInstance;