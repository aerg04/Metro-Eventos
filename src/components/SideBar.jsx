import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';

function SideBar({is_open}){

    return (
        <div className="flex">
            <div className={`fixed sm:relative left-0 h-full bg-creamhs flex flex-col transition-transform duration-300 ${is_open ? 'w-64' : 'w-0 overflow-hidden'} z-10`}>
                <div className="p-4 text-2xl font-bold">
                    Menu
                </div>
                <ul className="flex flex-col p-2 space-y-1">
                    <li className="hover:bg-neutral-100 p-2 rounded">
                        <NavLink 
                            to="/profile" 
                            className={({ isActive }) => 
                                isActive ? "block p-2 rounded bg-neutral-100" : "block p-2 rounded"
                            }
                        >
                            Perfil
                        </NavLink>
                    </li>
                    <li className="hover:bg-neutral-100 p-2 rounded">
                        <NavLink 
                            to="/events" 
                            className={({ isActive }) => 
                                isActive ? "block p-2 rounded bg-neutral-100" : "block p-2 rounded"
                            }
                        >
                            Eventos
                        </NavLink>
                    </li>
                    <li className="hover:bg-neutral-100 p-2 rounded">
                        <NavLink 
                            to="/myevents" 
                            className={({ isActive }) => 
                                isActive ? "block p-2 rounded bg-neutral-100" : "block p-2 rounded"
                            }
                        >
                            Mis Eventos
                        </NavLink>
                    </li>
                </ul>
            </div>
        </div>
    );
};

export default SideBar;