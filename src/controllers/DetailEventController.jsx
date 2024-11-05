import DetailEvent from "../components/DetailEvent";
import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { getEvents } from '../models/events';

export default function DetailEventController() {
    const { id } = useParams();
    const [events, setEvents] = useState([]);
    const [event, setEvent] = useState(null);

    useEffect(() => {
        const fetchedEvents = getEvents();
        setEvents(fetchedEvents);
        const foundEvent = fetchedEvents.find(event => event.key === parseInt(id));
        setEvent(foundEvent);
    }, [id]);

    if (!event) {
        return <div>Evento no encontrado</div>;
    }
    return <DetailEvent 
                {...event}
    />;
}
