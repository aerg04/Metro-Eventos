import React from 'react';
import Bookmarks from '../pages/Bookmarks';
import { useState, useEffect } from "react";
// import evnts from "../assets/events.js";
import { useNavigate } from "react-router-dom";
import { getEvents } from "../models/events";
import { getUserBookmarks } from "../models/user";

export default function BookmarksController() {
    const navigate = useNavigate();
    const [events, setEvents] = useState([]);
    const [loading, setLoading] = useState(true);
    
    useEffect(() => {
        async function fetchEvents() {
            setLoading(true);
            try {
                //falta buscar eventos del usuario
                const fetchedEvents = await getEvents();
                const userBookmarks = await getUserBookmarks();
                if(userBookmarks.bookmarks){
                    const filterEvents = fetchedEvents.filter(event => userBookmarks.bookmarks.includes(event.id));
                    setEvents(filterEvents);
                }else{
                    setEvents(fetchedEvents);
                }
            } catch (error) {
                console.error("Failed to fetch events:", error);
            } finally {
                setLoading(false);
                }
        }

        fetchEvents();
    }, []);

    function handleClick(id){
        navigate(`/event/${id}`);
    };

    return <Bookmarks onClick={handleClick} loading={loading} events={events} />

}