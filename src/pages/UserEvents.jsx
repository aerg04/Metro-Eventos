import EventCom from "../components/EventCom";
import { Link } from 'react-router-dom';
import Calendar from 'react-calendar';
import 'react-calendar/dist/Calendar.css';
import { useEffect, useState } from 'react';
import { getSavedEvents } from '../models/user';

export default function MyEvents({onClick,loading ,events}) {
    const [selectedDate, setSelectedDate] = useState(new Date());

    useEffect(() => {
        getSavedEvents(userId).then(savedEvents => {
            setEvents(savedEvents);
        });
    }, []);

    const eventDates = events.map(event => new Date(event.date));

    const handleDateChange = (date) => {
        setSelectedDate(date);
    };

    return(
    <>
    <div className="pt-4 px-10 gap-y-2">
    <h1 className="font-bold text-2xl">Mis eventos</h1>
    </div>

            <div className="min-h-screen p-2 grid lg:grid-cols-[min-content,1fr] gap-4">

                <div className="bg-white shadow-md rounded-md p-4">
                    <h2 className="font-bold text-lg mb-4">Calendario de eventos</h2>
                    <Calendar
                        onChange={handleDateChange}
                        value={selectedDate}
                            tileClassName={({ date, view }) => {

                            const defaultClass = 'bg-gray-200 text-gray-600';

                            const isEventDate = eventDates.some(
                                (d) => d.toISOString().split("T")[0] === date.toISOString().split("T")[0]
                            );

                            const isWeekend = [0, 6].includes(date.getDay());

                            if (isEventDate) return "react-calendar__tile--hasEvent";
                            if (isWeekend) return "react-calendar__tile--weekend";

              return "defaultClass";
            }}
            className="compact-calendar"
                    />
                </div>

    <div className="min-h-screen p-2 grid gap-4 grid-cols-[repeat(auto-fill,minmax(256px,1fr))]">
            {loading ? (
                    <div className="main-container">
                        <div className="content">
                            <p className="text-2xl font-semibold text-center mt-12 mb-120">Cargando eventos...</p>
                        </div>
                    </div>
            ) : events.length > 0 ? (
                events.map((event, index) => (
                    <EventCom
                    key={index}
                    id={event.id}
                    title={event.title}
                    date={event.date}
                    place={event.place}
                    entryType={event.entryType}
                    author={event.author}
                    path={event.path}
                    handleClick={onClick}
                    />
                ))
            ) : (
               <div className="main-container">
                  <div className="content ">
                  <p className="text-2xl font-semibold text-center mt-12 mb-120">No hay eventos</p>
                  </div>
                  </div>
                    )}
                </div>
            </div>
        </>
    );
}