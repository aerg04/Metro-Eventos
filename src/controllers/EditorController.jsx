import React, { useState,useEffect } from 'react';
import EventCreator from '../pages/EventCreator';
import { useNavigate } from 'react-router-dom';
import { getEvents } from '../models/events';
import { useParams } from 'react-router-dom';

export default function EditorController() {
    const navigate = useNavigate();
    const { id } = useParams();
    const [error, setError] = useState(null);
    const [events, setEvents] = useState([]);
    const [event, setEvent] = useState(null);

    function handleClick(){
        navigate(`/myevents`);
    };

    async function handleCreate({...event}){
        try {
            //cambiar esto
            await addEvent(event);
            handleClick();
        } catch (err) {
            setError('Failed to add event. Please try again.');
        }
    };
    useEffect(() => {
        getEvents().then(fetchedEvents => {
            setEvents(fetchedEvents);
            const foundEvent = fetchedEvents.find(event => event.id === id);
            setEvent(foundEvent);
            console.log(event);
        });
    }, [id]);
    if (!event) {
        return <div>Evento no encontrado</div>;
    }
    return (
        <>
            {error && <PopupMessage message={error} onClose={() => setError(null)} messageOnClose={"Cerrar"} />}
            <EventCreator handleSubmit={handleCreate} form={event}/>
        </>
    );
}