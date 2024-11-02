import DetailEvent from "../components/DetailEvent";
import React from 'react';
import { useParams } from 'react-router-dom';
import { getEvents } from '../models/events';
    
export default function DetailEventController() {
    const { id } = useParams();
    const events = getEvents();
    
    const event = events.find(event => event.key === parseInt(id));

    if (!event) {
        return <div>Event not found</div>;
    }
    return <DetailEvent 
                {...event}
    />;
}
