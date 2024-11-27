import SearchEvents from '../pages/SearchEvents';
// import events from "../assets/events.js";
import { useNavigate } from "react-router-dom";
import { useState, useEffect } from 'react';
import { getEvents } from '../models/events';
import { getUserBookmarks,updateBookmark } from '../models/user';

export default function EventsController() {
    const labelsArray = ["Educación", "Deporte", "Recreación"];
    const [eventsRender, setEventsRender] = useState([]);
    const [eventsComplete, setEventsComplete] = useState([]);
    const [loading, setLoading] = useState(true);
    const [bookmarks, setBookmarks] = useState([]);
    const [bookmarkedEvents, setBookmarkedEvents] = useState({});
    const [user, setUser] = useState({});

    useEffect(() => {
        setLoading(true);
        getEvents()
            .then(fetchedEvents => {
                setEventsComplete(fetchedEvents);
                setEventsRender(fetchedEvents);
            })
            .catch(error => {
                console.error("Error al cargar los eventos:", error);
            })
            .finally(() => {
                setLoading(false);
            });

        getUserBookmarks()
            .then(response => {
                console.log(response);
                if (response.bookmarks) {
                    setBookmarks(response.bookmarks);
                } else {
                    setBookmarks([]);
                }
                setUser({ ...response, bookmarks: bookmarks });
                matchBookmarks();
            })
            .catch(error => {
                console.error('Error al obtener los bookmarks del usuario:', error);
            });
    }, []); 
    
    useEffect(() => {
        matchBookmarks();
        console.log(bookmarkedEvents);
        setEventsRender(eventsComplete);
    }, [bookmarks, eventsComplete, user]);

    useEffect(() => {
        setEventsRender(eventsComplete);
    }, [bookmarkedEvents]);

    useEffect(() => {
        filterBookmarkedEvents();
    }, [bookmarks]);

    function filterBookmarkedEvents() {
        const filteredEvents = eventsComplete.filter(event => bookmarks.includes(event.id));
        setEventsRender(filteredEvents);
    }

    function searchEventsByName(name) {
        if (!name) return eventsComplete;
        return eventsComplete.filter(event => event.title.toLowerCase().includes(name.toLowerCase()));
    }
   

    function searchEventsByDate(date) {
        if (!date) return eventsComplete;
        return eventsComplete.filter(event => new Date(event.date).toDateString() === new Date(date).toDateString());
    }

    function searchEventsByLabel(labelk) {
        // console.log(labelk);
        if (!labelk || labelk.length === 0) return eventsComplete;
        return eventsComplete.filter(event => 
            labelk.every(label => event.label.includes(label))
        );
    }

    function matchAllEvents(name="", date="", labels=[]) {
        const nameMatches = searchEventsByName(name);
        const dateMatches = searchEventsByDate(date);
        const labelMatches = searchEventsByLabel(labels);

        const filteredEvents = eventsComplete.filter(event =>
            nameMatches.includes(event) &&
            dateMatches.includes(event) &&
            labelMatches.includes(event)
        );

        setEventsRender(filteredEvents);
    };
    
    const navigate = useNavigate();

    function handleClick(id){
        navigate(`/event/${id}`);
    };

    function matchBookmarks() {
        const bookmarked = {};
        
        eventsRender.forEach(event => {
            if (bookmarks.includes(event.id)) {
                bookmarked[event.id] = true;
            }else{
                bookmarked[event.id] = false;
            } 
        });
        setBookmarkedEvents(bookmarked);
    };

    function handleBookmark(id) {
        matchBookmarks();
        console.log(bookmarks);
        console.log(bookmarks.includes(id));
        setBookmarks((prevBookmarks) => {
            const updatedBookmarks = prevBookmarks.includes(id)
                ? prevBookmarks.filter(bookmark => bookmark !== id)
                : [...prevBookmarks, id];
            
            // Call updateBookmark with the updated bookmarks
            updateBookmark({...user,bookmarks: updatedBookmarks})
            return updatedBookmarks;
        })
        console.log(bookmarks);
    }
        
    return (
        <SearchEvents
            events={eventsRender}
            loading={loading}
            onClick={handleClick}
            matchAllEvents={matchAllEvents}
            labelsField={labelsArray}
            handleClick={handleBookmark}
            bookmarksEvents={bookmarkedEvents}
        />
    )
}