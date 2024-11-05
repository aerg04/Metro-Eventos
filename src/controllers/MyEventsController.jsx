import { useState, useEffect } from "react";
// import evnts from "../assets/events.js";
import { useNavigate } from "react-router-dom";
import { getEvents } from "../models/events";

export default function MyEventsController() {
    const navigate = useNavigate();
    const [events, setEvents] = useState([]);

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

    function handleClick(id){
        navigate(`/event/${id}`);
    };
    return <MyEvents onClick={handleClick} events={events} />
}