import SearchEvents from '../pages/SearchEvents';
// import events from "../assets/events.js";
import { useNavigate } from "react-router-dom";
import {  useState, useEffect } from "react";
import { getEvents } from "../models/events";

export default function EventsController() {
    const labelsArray = ["Educación", "Deporte", "Recreación"]
    const [events, setEvents] = useState([]);
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

    useEffect(() => {
        async function fetchEvents() {
            try {
                const fetchedEvents = await getEvents();
                setEvents(fetchedEvents);
            } catch (error) {
                console.error("Failed to fetch events:", error);
            }
        }

        fetchEvents();
    }, []);
    
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