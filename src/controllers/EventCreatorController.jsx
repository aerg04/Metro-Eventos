import EventCreator from '../pages/EventCreator.jsx';
import { useNavigate } from 'react-router-dom';
import { addEvent } from '../models/events.js';
import { useState } from 'react';
import PopupMessage from '../components/PopUpMessage.jsx';

export default function EventCreatorController() {
    const navigate = useNavigate();
    const [error, setError] = useState(null);

    function handleClick(){
        navigate(`/myevents`);
    };

    async function handleCreate({...event}){
        try {
            await addEvent(event);
            handleClick();
        } catch (err) {
            setError('Failed to add event. Please try again.');
        }
    };

    return (
        <>
            {error && <PopupMessage message={error} onClose={() => setError(null)} messageOnClose={"Cerrar"} />}
            <EventCreator handleSubmit={handleCreate} />
        </>
    );
}