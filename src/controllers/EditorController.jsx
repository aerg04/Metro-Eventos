import React, { useState,useEffect } from 'react';
import EventEditErase from '../pages/EventEditErase';
import { useNavigate } from 'react-router-dom';
import { getEvents } from '../models/events';
import { useParams } from 'react-router-dom';
import { editEvent } from '../models/events';
import { deleteEvent } from '../models/events';
import { getUserInfo } from '../models/user';
import PopupMessage from '../components/PopUpMessage';

export default function EditorController() {
    const navigate = useNavigate();
    const { id } = useParams();
    const [error, setError] = useState(null);
    const [events, setEvents] = useState([]);
    const [event, setEvent] = useState(null);
    const user = getUserInfo();

    function handleClick(){
        navigate(`/myevents`);
    };

    async function handleEdit({...event}){
        try {
            //cambiar esto por la funcion de editar
            
            const response = await editEvent(event,id);
            if(response){
                setError("Evento editado correctamente");
            }
        } catch (err) {
            setError('Evento no editado. Por favor intente de nuevo.');
        } 
    };

async function handleDelete(id) {
    try {
        await deleteEvent(id);
        setError("Evento eliminado correctamente");
    } catch (err) {
        setError('No se pudo eliminar el evento. Inténtelo nuevamente.');
    }
};

    useEffect(() => {
        getEvents().then(fetchedEvents => {
            setEvents(fetchedEvents);
            const foundEvent = fetchedEvents.find(event => event.id === id);
            setEvent(foundEvent);
            // console.log(event);
        });
    }, [id]);

    if (!event) {
        return  <div className="main-container">
                   <div className="content">
                   <p className="text-2xl font-semibold mt-12 mb-120">Cargando evento...</p>
                 </div>
                </div>;
    }
    return (
    <>
        {error && (
            <PopupMessage
                message={error}
                onClose={() => {
                    setError(null);
                    handleClick();
                }}
                messageOnClose="Cerrar"
            />
        )}
        <EventEditErase
            handleEdit={handleEdit}
            handleDelete={handleDelete}
            form={event}
            pageTitle="Editar Eventos"
            author={user.email}
        />
    </>
);
}