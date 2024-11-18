import React, { useState, useEffect } from 'react';
import PopUpConfirmation from '../components/PopUpConfirmation';
import PopUpMessage from '../components/PopUpMessage';

function EventCreator({ handleSubmit, form = {}, pageTitle="Crear Evento", author }) {
    const [showError, setShowError] = useState(false);
    const [errorMessage,setErrorMessage] = useState("")
    const [formData, setFormData] = useState({
        title: '',
        path: '',
        date: '',
        place: '',
        author: '',
        entryType: '',
        description: '',
        label: [],
        userEmail: ""
    });
    useEffect(() => {
        setFormData({
            title: form.title || '',
            path: form.path || '',
            date: form.date || '',
            place: form.place || '',
            author: author,
            entryType: form.entryType || '',
            description: form.description || '',
            label: form.label || [],
            userEmail: author
        });
    }, []);
    
    // console.log(formData);
    const labelsArray = ["Educación", "Deporte", "Recreación"]; // Add more labels as needed
    function handlePetition() {
        // Validate formData
        const requiredFields = ['title', 'path', 'date', 'place', 'author', 'entryType', 'description'];
        for (const field of requiredFields) {
            if (!formData[field]) {
                setErrorMessage(`The field "${field}" no `);
                setShowError(true);
                return;
            }
        }
        handleSubmit(formData);
        ;
    };

    const handleChange = (e) => {
        const { name, value, options, type, checked } = e.target;
        if (name === 'label') {
            const updatedLabels = checked
                ? [...formData.label, value]
                : formData.label.filter(labelk => labelk !== value);
            setFormData({
                ...formData,
                label: updatedLabels
            });
        } else {
            setFormData({
                ...formData,
                [name]: value
            });
        }
    };

    function handleCloseError() {
        setShowError(false);
        setErrorMessage('');
    };
    // Falta cargar la imagen a la Storage
    const handleFileChange = (e) => {
        const file = e.target.files[0];
        if (file) {
            const reader = new FileReader();
            reader.onloadend = () => {
                setFormData({
                    ...formData,
                    path: reader.result
                });
            };
            reader.readAsDataURL(file);
        }
    };

    const [newKey, setNewKey] = useState('');
    const [newValue, setNewValue] = useState('');

    const handleAddAdditionalInfo = () => {
        if (newKey && newValue) {
            if (formData.hasOwnProperty(newKey)) {
                setErrorMessage(`The key "${newKey}" already exists.`);
                setShowError(true);
                return;
            }
            setFormData({
                ...formData,
                [newKey]: newValue
            });
            setNewKey('');
            setNewValue('');
        }
    };

    return (
        <div className="px-10 py-4">
            <div className="flex flex-col items-center justify-center">
                <PopUpConfirmation messageButton={"Publicar Evento"} message={"Publicar Evento"} onConfirm={handlePetition} />
            </div>
            <h1 className='font-bold text-2xl'> {pageTitle}</h1>
            <div className="flex flex-col md:flex-row min-h-screen p-4 mt-2">
                <div className="flex flex-col items-center w-full md:w-2/5">
                    <div className="w-64 h-64">
                        <img className="w-full h-full object-cover" src={formData.path} alt="" />
                    </div>
                    <input
                        type="file"
                        accept="image/*"
                        onChange={handleFileChange}
                        className="mt-2"
                    />
                    <div className="mt-4 px-6">
                        <label className="block text-sm font-medium text-gray-700">Título</label>
                        <input
                            type="text"
                            name="title"
                            value={formData.title}
                            onChange={handleChange}
                            className="mt-1 block w-full py-2 px-3 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-orange-500 focus:border-orange-500 sm:text-sm"
                        />
                        <label className="block text-sm font-medium text-gray-700 mt-4">Fecha</label>
                        <input
                            type="date"
                            name="date"
                            value={formData.date}
                            onChange={handleChange}
                            className="mt-1 block w-full py-2 px-3 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-orange-500 focus:border-orange-500 sm:text-sm"
                        />
                        <label className="block text-sm font-medium text-gray-700 mt-4">Lugar</label>
                        <input
                            type="text"
                            name="place"
                            value={formData.place}
                            onChange={handleChange}
                            className="mt-1 block w-full py-2 px-3 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-orange-500 focus:border-orange-500 sm:text-sm"
                        />
                        <label className="block text-sm font-medium text-gray-700 mt-4">Autor</label>
                        <input
                            type="text"
                            name="author"
                            value={formData.author}
                            onChange={handleChange}
                            className="mt-1 block w-full py-2 px-3 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-orange-500 focus:border-orange-500 sm:text-sm"
                            readOnly
                        />
                        <label className="block text-sm font-medium text-gray-700 mt-4">Entrada</label>
                        <select
                            name="entryType"
                            value={formData.entryType}
                            onChange={handleChange}
                            className="mt-1 block w-full py-2 px-3 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-orange-500 focus:border-orange-500 sm:text-sm"
                        >
                            <option value="">Select Entry Type</option>
                            <option value="Pago">Pago</option>
                            <option value="Libre">Libre</option>
                            <option value="Registro">Registro</option>
                        </select>
                    </div>
                </div>
                <div className="flex flex-col p-4 w-full md:w-3/5">
                    <div className="">
                        <h1 className="text-center text-xl font-semibold">Descripción</h1>
                        <div className="mt-2 bg-gray-100 p-2 rounded">
                            <textarea
                                name="description"
                                value={formData.description}
                                onChange={handleChange}
                                className="mt-1 block w-full py-2 px-3 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-orange-500 focus:border-orange-500 sm:text-sm"
                            />
                        </div>
                    </div>
                    {/* <div className="mt-4">
                        <h2 className="text-center text-lg font-semibold">Información Adicional</h2>
                        <div className="mt-2 bg-gray-100 p-2 rounded">
                            {Object.entries(formData).map(([key, value]) => (
                                key !== 'title' && key !== 'path' && key !== 'date' && key !== 'place' && key !== 'author' && key !== 'entryType' && key !== 'labels' && key !== 'description' && (
                                    <div key={key} className="mt-2">
                                        <label className="block text-sm font-medium text-gray-700">{key}</label>
                                        {typeof value === 'string' && (value.startsWith('http://') || value.startsWith('https://')) ? (
                                            <input
                                                type="url"
                                                name={key}
                                                value={value}
                                                onChange={handleChange}
                                                className="mt-1 block w-full py-2 px-3 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-orange-500 focus:border-orange-500 sm:text-sm"
                                            />
                                        ) : (
                                            <input
                                                type="text"
                                                name={key}
                                                value={value}
                                                onChange={handleChange}
                                                className="mt-1 block w-full py-2 px-3 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-orange-500 focus:border-orange-500 sm:text-sm"
                                            />
                                        )}
                                    </div>
                                )
                            ))}
                            <div className="mt-4">
                                <label className="block text-sm font-medium text-gray-700">Campo</label>
                                <input
                                    type="text"
                                    name="newKey"
                                    value={newKey}
                                    onChange={(e) => setNewKey(e.target.value)}
                                    className="mt-1 block w-full py-2 px-3 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-orange-500 focus:border-orange-500 sm:text-sm"
                                />
                                <label className="block text-sm font-medium text-gray-700 mt-4">Valor</label>
                                <input
                                    type="text"
                                    name="newValue"
                                    value={newValue}
                                    onChange={(e) => setNewValue(e.target.value)}
                                    className="mt-1 block w-full py-2 px-3 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-orange-500 focus:border-orange-500 sm:text-sm"
                                />
                                <button
                                    type="button"
                                    onClick={handleAddAdditionalInfo}
                                    className="mt-2 w-full py-2 px-4 bg-orange-500 text-white rounded-md shadow-sm hover:bg-orange-600 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-orange-500"
                                >
                                    Añadir campos
                                </button>
                            </div>
                        </div>
                    </div> */}
                    <div className='mt-4'>
                        <h2 className="text-center text-lg font-semibold">Etiquetas</h2>
                        <div className="mt-2 bg-gray-100 p-2 rounded">
                            {labelsArray.map(labelk => (
                                <label key={labelk} className="block text-sm font-medium text-gray-700">
                                    <input
                                        type="checkbox"
                                        name="label"
                                        value={labelk}
                                        checked={formData.label && formData.label.includes(labelk)}
                                        onChange={handleChange}
                                        className="mr-2"
                                    />
                                    {labelk}
                                </label>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
            {showError && (
                <PopUpMessage
                    message={errorMessage}
                    onClose={handleCloseError}
                    messageOnClose={"Cerrar"}
                />
            )}
        </div>
    );
};

export default EventCreator;