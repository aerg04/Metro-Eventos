import events from "../assets/events.js"
import axiosInstance from "../axiosConfig.js";

// Function to fetch all events from the endpoint
export async function getEvents() {
    try {
        const response = await axiosInstance.get('/events?page=1&size=20');
        const fetchedEvents = response.data;

        const uniqueEvents = fetchedEvents.filter(
            (event, index, self) =>
                index === self.findIndex((e) => e.id === event.id)
        );

        const validEvents = uniqueEvents.filter(
            (event) => event.title && event.date
        );

        return validEvents;
    } catch (error) {
        console.error('Failed to fetch events:', error);
        return [];
    }
}

export async function getEventsByIds(ids) {
    try {
        if (!Array.isArray(ids)) {
            console.error("El parámetro 'ids' no es un arreglo:", ids);
            throw new TypeError("El parámetro 'ids' debe ser un arreglo de strings");
        }

        const response = await axiosInstance.get('/events?page=1&size=20');
        const fetchedEvents = response.data;

        const filteredEvents = fetchedEvents.filter((event) => ids.includes(event.id));

        return filteredEvents;
    } catch (error) {
        console.error('Failed to fetch events by IDs:', error);
        return [];
    }
}

export async function editEvent(event,id) {
    try {
        const response = await axiosInstance.put(`/events/${id}`, event);
        return response.data;
    } catch (error) {
        console.error("Failed to fetch event:", error);
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
        console.log(newEvent)
        // Send the new event data to the endpoint
        const response = await axiosInstance.post('/events', newEvent);
        const savedEvent = response.data;
        return savedEvent;
    } catch (error) {
        console.error("Failed to add event:", error);
    }
}

export async function deleteEvent(id) {
    try {
        const response = await axiosInstance.delete(`/events/${id}`);
        return response.data;
    } catch (error) {
        console.error("Fallo al borrar evento", error);
        throw new Error("No se pudo eliminar el evento");
    }
}
