import events from "../assets/events.js"
import axiosInstance from "../axiosConfig.js";

// Function to fetch all events from the endpoint
export async function getEvents() {
    try {
        const response = await axiosInstance.get('/events');
        const fetchedEvents = response.data;
        return fetchedEvents;
    } catch (error) {
        console.error("Failed to fetch events:", error);
    }
}

// Function to convert an image file to a base64 string
function convertImageToBase64(file) {
    const isBase64 = (str) => typeof str === 'string' && /^data:\w+\/[a-zA-Z+\-\.]+;base64,/.test(str);
    if (isBase64(file)) {
        return file;
    }
    
    return new Promise((resolve, reject) => {
    const reader = new FileReader();
    reader.onloadend = () => {
        resolve(reader.result);
    };
    reader.onerror = reject;
    reader.readAsDataURL(file);
    });
}

// Function to add a new event
export async function addEvent(newEvent) {
    try {
        if (newEvent.path) {
            const base64Image = await convertImageToBase64(newEvent.path);
            newEvent.path = base64Image;
        }
        
        const token = localStorage.getItem("token");

        // Send the new event data to the endpoint
        const response = await axiosInstance.post('/events', newEvent);
        const savedEvent = response.data;
        return savedEvent;
    } catch (error) {
        console.error("Failed to add event:", error);
    }
}