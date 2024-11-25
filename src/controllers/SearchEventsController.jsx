import SearchEvents from '../pages/SearchEvents';
// import events from "../assets/events.js";
import { useNavigate } from "react-router-dom";
import { useState, useEffect } from 'react';
import { getEvents } from '../models/events';

export default function EventsController() {
    const labelsArray = ["Educación", "Deporte", "Recreación"];
    const [eventsRender, setEventsRender] = useState([]);
    const [eventsComplete, setEventsComplete] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        async function fetchEvents() {
            setLoading(true);
            try {
                const fetchedEvents = await getEvents();
                setEventsComplete(fetchedEvents);
                setEventsRender(fetchedEvents);
            } catch (error) {
                console.error("Error al cargar los eventos:", error);
            } finally {
                setLoading(false);
            }
        }
        fetchEvents();
    }, []);
    
    function searchEventsByName(name) {
        if (!name) return eventsComplete;
        return eventsComplete.filter(event => event.title.toLowerCase().includes(name.toLowerCase()));
    }

    function searchEventsByDate(date) {
        if (!date) return eventsComplete;
        return eventsComplete.filter(event => new Date(event.date).toDateString() === new Date(date).toDateString());
    }

    function searchEventsByLabel(labelk) {
        console.log(labelk);
        if (!labelk || labelk.length === 0) return eventsComplete;
        return eventsComplete.filter(event => 
            labelk.every(label => event.label.includes(label))
        );
    }

function matchAllEvents(name, date, labels) {
        const nameMatches = searchEventsByName(name);
        const dateMatches = searchEventsByDate(date);
        const labelMatches = searchEventsByLabel(labels);

        const filteredEvents = eventsComplete.filter(event =>
            nameMatches.includes(event) &&
            dateMatches.includes(event) &&
            labelMatches.includes(event)
        );

        setEventsRender(filteredEvents);
    }

    const navigate = useNavigate();

    function handleClick(id){
        navigate(`/event/${id}`);
    };
    
    return (
        <SearchEvents
            events={eventsRender}
            loading={loading}
            onClick={handleClick}
            matchAllEvents={matchAllEvents}
            labelsField={labelsArray}
        />
    )
}