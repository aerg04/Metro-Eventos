import React, { useState, useEffect } from 'react';

export default function Profile({userData, handleUpdateUser}) {
    const [formData, setFormData] = useState({
        name: '',
        lastName:'',
        email:'',
        password:'',
        gender:'',
        birthDate:'',
        profilePhoto:'',
        });

    const [isEditing, setIsEditing] = useState(false);

    useEffect (() => {
        if (userData) {
        setFormData({
        name: userData?.name || '',
        lastName: userData?.lastName || '',
        email: userData?.email || '',
        password: '',
        gender: userData?.gender || '',
        birthDate: userData?.birthDate || '',
        profilePhoto: userData?.profilePhoto || '',
            });
        }
    }, [userData]);


    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData((prevData) => ({
            ...prevData,
            [name]: value,
        }));
    };

    const handleFileChange = (e) => {
        const file = e.target.files[0];
        if (file) {
            const reader = new FileReader();
            reader.onloadend = () => {
                setFormData((prevData) => ({
                    ...prevData,
                    profilePhoto: reader.result,
                }));
            };
            reader.readAsDataURL(file);
        }
    };

    const handleSaveChanges = () => {
        if (!isEditing) return;
        handleUpdateUser(formData);
        setIsEditing(false);
    };

    return (
        <div className="container mx-auto p-6 bg-gray-50 shadow-lg rounded-lg mb-14 mt-14">
            <h1 className="text-2xl font-bold mb-6 text-center">Perfil de Usuario</h1>
            <div className="flex flex-col md:flex-row space-y-6 md:space-y-0 md:space-x-6">

                {/* Foto de perfil */}
                <div className="flex flex-col items-center space-y-4">
                    <div className="w-32 h-32 rounded-full overflow-hidden border border-gray-300 flex items-center justify-center">
                        <img
                            className="object-cover w-full h-full"
                            src={formData.profilePhoto || 'https://via.placeholder.com/250'}
                            alt="Perfil"
                        />
                    </div>
                    <label className="px-4 py-2 bg-blue-500 text-white rounded shadow-md hover:bg-blue-600 cursor-pointer">
                        Cambiar Foto
                        <input
                            type="file"
                            accept="image/*"
                            disabled={!isEditing}
                            onChange={handleFileChange}
                            className="hidden"
                        />
                    </label>
                </div>

                {/* Campos del formulario */}
                <div className="flex flex-col flex-grow space-y-4">
                    <div>
                        <label className="block font-medium">Nombre</label>
                        <input
                            type="text"
                            name="name"
                            value={formData.name}
                            onChange={handleChange}
                            disabled={!isEditing}
                            className="input-field"
                        />
                    </div>
                    <div>
                        <label className="block font-medium">Apellido</label>
                        <input
                            type="text"
                            name="lastName"
                            value={formData.lastName}
                            onChange={handleChange}
                            disabled={!isEditing}
                            className="input-field"
                        />
                    </div>
                    <div>
                        <label className="block font-medium">Correo Electrónico (No modificable)</label>
                        <input
                            type="email"
                            name="email"
                            value={formData.email}
                            disabled
                            className="input-field bg-gray-100 border-gray-300 cursor-not-allowed"
                        />
                    </div>
                    <div>
                        <label className="block font-medium">Contraseña</label>
                        <input
                            type="password"
                            name="password"
                            value={formData.password}
                            onChange={handleChange}
                            disabled={!isEditing}
                            className="input-field"
                        />
                    </div>
                    <div>
                        <label className="block font-medium">Género</label>
                        <select
                            name="gender"
                            value={formData.gender}
                            onChange={handleChange}
                            disabled={!isEditing}
                            className="input-field"
                        >
                            <option value="">Seleccione</option>
                            <option value="Masculino">Masculino</option>
                            <option value="Femenino">Femenino</option>
                            <option value="Otro">Otro</option>
                        </select>
                    </div>
                    <div>
                        <label className="block font-medium">Fecha de Nacimiento</label>
                        <input
                            type="date"
                            name="birthDate"
                            value={formData.birthDate}
                            onChange={handleChange}
                            disabled={!isEditing}
                            className="input-field"
                        />
                    </div>
                </div>
            </div>

            {/* Botones */}
            <div className="mt-6 flex justify-end space-x-4">
                {isEditing ? (
                    <>
                        <button
                            onClick={handleSaveChanges}
                            className="px-4 py-2 bg-green-500 text-white rounded shadow-md hover:bg-green-600"
                        >
                            Guardar Cambios
                        </button>
                        <button
                            onClick={() => setIsEditing(false)}
                            className="px-4 py-2 bg-gray-500 text-white rounded shadow-md hover:bg-gray-600"
                        >
                            Cancelar
                        </button>
                    </>
                ) : (
                    <button
                        onClick={() => setIsEditing(true)}
                        className="px-4 py-2 bg-blue-500 text-white rounded shadow-md hover:bg-blue-600"
                    >
                        Editar
                    </button>
                )}
            </div>
        </div>
    );
}