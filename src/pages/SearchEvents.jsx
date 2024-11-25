import { useEffect, useState } from "react";
import { FaSearch } from 'react-icons/fa';
import EventCom from "../components/EventCom";

export default function SearchEvents({onClick, events, loading, matchAllEvents, labelsField}) {
    const [name, setName] = useState("");
    const [date, setDate] = useState("");
    const [label, setLabel] = useState([]);


useEffect(() => {
        matchAllEvents(name, date, label);
    }, [name, date, label]);

    return(
        <>
        <div className="p-2 ">
            <div className="flex flex-col sm:flex-row justify-center bg-gray-200 px-4 py-3 sm:space-x-4 rounded-lg">

                <input type="text" placeholder="Ingresa el nombre" className="p-2 m-2 sm:w-1/2 rounded-lg border border-gray-300" onChange={(e) => {
                    setName(e.target.value);
                }}/>
                <input type="date" className="p-2 m-2 rounded-lg border border-gray-300" onChange={(e) => {
                    setDate(e.target.value);
                }}/>

                <div className="p-2 m-2 rounded-lg bg-white sm:max-h-auto sm:overflow-visible">
                    <span className="p-2 text-center text-sm justify-center text-gray-700">Etiquetas</span>
                    {labelsField.map((labelk, index) => (
                        <label key={index} className="inline-block text-sm m-2 font-medium text-gray-700">
                            <input
                                type="checkbox"
                                name="label"
                                value={labelk}
                                checked={label.includes(labelk)}
                                onChange={(e) => {
                                    const selectedOptions = e.target.checked
                                        ? [...label, labelk]
                                        : label.filter((item) => item !== labelk);
                                    setLabel(selectedOptions);
                                }}
                                className="mr-2"
                            />
                            {labelk}
                        </label>
                    ))}
                </div>
            </div>
        </div>

        <div className="min-h-screen p-2 grid gap-10 grid-cols-[repeat(auto-fill,minmax(256px,1fr))]">
                {loading ? (
                    <div className="main-container">
                        <div className="content">
                            <p className="text-2xl font-semibold mt-12 mb-120">Cargando eventos...</p>
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
                        <div className="content">
                            <p className="text-2xl font-semibold mt-12 mb-120">No hay eventos</p>
                        </div>
                    </div>
                )}
            </div>
        </>
            );
        }