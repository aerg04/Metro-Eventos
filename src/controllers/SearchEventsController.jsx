import SearchEvents from '../pages/SearchEvents';
import events from "../assets/events.js";
import { useNavigate } from "react-router-dom";

export default function EventsController() {
    const labelsArray = ["Educación", "Deporte", "Recreación"]
    function searchEventsByName(){
        // aqui deberia la funcion para buscar eventos por nombre
    }
    function searchEventsByDate(){
        // aqui deberia la funcion para buscar eventos por nombre
    }
    function searchEventsByLabel(){
        // aqui deberia la funcion para buscar eventos por nombre
    }
    const navigate = useNavigate();

    function handleClick(id){
        navigate(`/event/${id}`);
    };
    
    return (
        <SearchEvents
            events={events}
            onClick={handleClick}
            searchEventsByName={searchEventsByName}
            searchEventsByDate={searchEventsByDate}
            searchEventsByLabel={searchEventsByLabel}
            labelsField={labelsArray}
        />
    )
}