import DetailEvent from "../components/DetailEvent";
import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { getEvents } from '../models/events';

export default function DetailEventController() {
    const { id } = useParams();
    const [events, setEvents] = useState([]);
    const [event, setEvent] = useState(null);

    useEffect(() => {
        getEvents().then(fetchedEvents => {
            setEvents(fetchedEvents);
            const foundEvent = fetchedEvents.find(event => event.id === id);
            
            setEvent(foundEvent);
        });
    }, [id]);

    if (!event) {
        return  <div className="main-container">
                <div className="content">
                <p className="text-2xl font-semibold text-center mt-12 mb-120">Cargando evento...</p>
              </div>
           </div>;
    }
    return <DetailEvent 
                {...event}
                id={id}
    />;
}
