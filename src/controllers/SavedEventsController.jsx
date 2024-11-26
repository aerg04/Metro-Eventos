import React, { useEffect, useState } from 'react';
import SavedEvents from '../pages/SavedEvents';
//import { getSavedEvents } from '../models/user'; // Asegúrate de que esta función esté correctamente definida

export default function SavedEventsController() {
    const [events, setEvents] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const fetchSavedEvents = async () => {
            try {
                const savedEvents = await getSavedEvents();
                setEvents(savedEvents);
            } catch (error) {
                console.error('Error al cargar los eventos guardados:', error);
            } finally {
                setLoading(false);
            }
        };
        fetchSavedEvents();
    }, []);


    const handleEventClick = (eventId) => {
        console.log(`Evento clicado: ${eventId}`);
        // Aquí puedes implementar lógica adicional, como navegar a detalles del evento o suscribirse
    };

    return (
        <SavedEvents
            events={events}
            loading={loading}
            onClick={handleEventClick}
        />
    );
}

