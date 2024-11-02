import EventCreator from '../pages/EventCreator.jsx';
import { useNavigate } from 'react-router-dom';

export default function EventCreatorController() {
    const navigate = useNavigate();

    function handleClick(){
        navigate(`/myevents`);
    };
    function handleCreate({...event}){
        // aqui deberia las funciones para mandar el evento a la base de datos
        console.log(event);
        handleClick();
    };
    return <EventCreator handleSubmit={handleCreate} />
}