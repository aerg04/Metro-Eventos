import SearchEvents from '../pages/SearchEvents';
// import events from "../assets/events.js";
import { useNavigate } from "react-router-dom";
import { useState, useEffect } from 'react';
import { getEvents } from '../models/events';

export default function EventsController() {
    const labelsArray = ["Educación", "Deporte", "Recreación"];
    const [eventsRender, setEventsRender] = useState([]);
    const [eventsComplete, setEventsComplete] = useState([]);

    useEffect(() => {
        async function fetchEvents() {
            try {
                const fetchedEvents = await getEvents();
                setEventsRender(fetchedEvents);
                setEventsComplete(fetchedEvents);
            } catch (error) {
                console.error("Failed to fetch events:", error);
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

    function matchAllEvents(name, date, label) {
        const nameMatches = searchEventsByName(name);
        const dateMatches = searchEventsByDate(date);
        const labelMatches = searchEventsByLabel(label);

        setEventsRender(eventsComplete.filter(event => 
            nameMatches.includes(event) && 
            dateMatches.includes(event) && 
            labelMatches.includes(event)
        ))
    }

    const navigate = useNavigate();

    function handleClick(id){
        navigate(`/event/${id}`);
    };
    
    return (
        <SearchEvents
            events={eventsRender}
            onClick={handleClick}
            matchAllEvents={matchAllEvents}
            labelsField={labelsArray}
        />
    )
}