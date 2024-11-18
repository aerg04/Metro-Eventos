import { useState, useEffect } from "react";
import MyEvents from "../pages/MyEvents";
// import evnts from "../assets/events.js";
import { useNavigate } from "react-router-dom";
import { getEvents } from "../models/events";
import { getUserInfo } from "../models/user";
export default function MyEventsController() {
    const navigate = useNavigate();
    const [events, setEvents] = useState([]);

    useEffect(() => {
        async function fetchEvents() {
            try {
                //falta buscar eventos del usuario
                const fetchedEvents = await getEvents();
                const filterEvents = searchMyEvents(fetchedEvents)
                setEvents(filterEvents);
            } catch (error) {
                console.error("Failed to fetch events:", error);
            }
        }

        fetchEvents();
    }, []);

    function searchMyEvents(events){
        const user = getUserInfo()
        return events.filter(event => event.author === user.email);
    }

    function handleClick(id){
        navigate(`/editevent/${id}`);
    };
    return <MyEvents onClick={handleClick} events={events} />
}