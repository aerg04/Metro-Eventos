import React, { useEffect, useState } from 'react';
import SavedEvents from '../pages/SavedEvents';
import { getUserEvents } from '../models/user';
import { getEventsByIds } from '../models/events';

export default function SavedEventsController() {
    const [events, setEvents] = useState([]);
    const [loading, setLoading] = useState(true);

useEffect(() => {
    const fetchSavedEvents = async () => {
        const email = localStorage.getItem('email');
        if (!email) {
            console.error("Email no encontrado en localStorage");
            return;
        }
        try {
            const savedEvents = await getUserEvents(email);
            const eventIds = savedEvents.map(event => event.id);  // Obtiene los IDs de los eventos guardados
            const eventsAux = await getEventsByIds(eventIds);  // Recupera los detalles completos de esos eventos
            setEvents(eventsAux);
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
    };

    return (
        <SavedEvents
            events={events}
            loading={loading}
            onClick={handleEventClick}
        />
    );
}

