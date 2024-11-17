import SearchEvents from '../pages/SearchEvents';
import events from "../assets/events.js";
import { useNavigate } from "react-router-dom";
import { useState, useEffect } from 'react';

export default function EventsController() {
    const labelsArray = ["Educación", "Deporte", "Recreación"];
    const [eventsRender, setEventsRender] = useState([]);
    const [eventsComplete, setEventsComplete] = useState([]);

    useEffect(() => {
        setEventsRender(events);
        setEventsComplete(events)
    }, []);
    
    function searchEventsByName(name) {
        if (!name) return eventsComplete;
        return eventsComplete.filter(event => event.title.toLowerCase().includes(name.toLowerCase()));
    }

    function searchEventsByDate(date) {
        if (!date) return eventsComplete;
        return eventsComplete.filter(event => new Date(event.date).toDateString() === new Date(date).toDateString());
    }

    function searchEventsByLabel(label) {
        if (!label) return eventsComplete;
        return eventsComplete.filter(event => event.labels.includes(label));
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