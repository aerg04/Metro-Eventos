import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';


function SideBar({ is_open, role }) {

    return (
        <div className="flex">
            <div className={`fixed sm:relative left-0 h-full bg-creamhs flex flex-col transition-transform duration-300 ${is_open ? 'w-64' : 'w-0 overflow-hidden'} z-10`}>
                <div className="p-4 text-2xl font-bold">
                    Menu
                </div>
                <ul className="flex flex-col p-2 space-y-1">
                    {/* <li className="hover:bg-neutral-100 p-2 rounded">
                        <NavLink 
                            to="/profile" 
                            className={({ isActive }) => 
                                isActive ? "block p-2 rounded bg-neutral-100" : "block p-2 rounded"
                            }
                        >
                            <div className="flex items-center">
                                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 12c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zM12 14c-2.67 0-8 1.34-8 4v2h16v-2c0-2.66-5.33-4-8-4z"/>
                                </svg>
                                Perfil
                            </div>
                        </NavLink>
                    </li> */}
                    <li className="hover:bg-neutral-100 p-2 rounded">
                        <NavLink 
                            to="/events" 
                            className={({ isActive }) => 
                                isActive ? "block p-2 rounded bg-neutral-100" : "block p-2 rounded"
                            }
                        >
                             <div className="flex items-center">
                                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                                </svg>
                                Eventos
                            </div>
                        </NavLink>
                    </li>
                    {/* <li className="hover:bg-neutral-100 p-2 rounded">
                        <NavLink
                            to="/savedEvents"
                            className={({ isActive }) =>
                                isActive ? "block p-2 rounded bg-neutral-100" : "block p-2 rounded"
                            }
                        >
                            <div className="flex items-center">
                                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                                </svg>
                                Eventos Guardados
                            </div>
                        </NavLink>
                    </li> */}

                    {role === 'ROLE_CREADOR' && (
                        <li className="hover:bg-neutral-100 p-2 rounded">
                            <NavLink 
                                to="/myevents" 
                                className={({ isActive }) => 
                                    isActive ? "block p-2 rounded bg-neutral-100" : "block p-2 rounded"
                                }
                            >
                                <div className="flex items-center">
                                    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 14l2-2m0 0l2-2m-2 2l2 2m-2-2l-2 2m-6 2a2 2 0 012-2h12a2 2 0 012 2v2a2 2 0 01-2 2H5a2 2 0 01-2-2v-2z" />
                                    </svg>
                                    Mis publicaciones
                                </div>
                            </NavLink>
                        </li>
                    )}
                    <li className="hover:bg-neutral-100 p-2 rounded">
                        <NavLink 
                            to="/bookmarks" 
                            className={({ isActive }) => 
                                isActive ? "block p-2 rounded bg-neutral-100" : "block p-2 rounded"
                            }
                        >
                             <div className="flex items-center">
                                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                                </svg>
                                Guardados
                            </div>
                        </NavLink>
                    </li>
                </ul>
            </div>
        </div>
    );
};

export default SideBar;