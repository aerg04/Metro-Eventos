import React, { useState, useEffect } from 'react';
import PopUpConfirmation from '../components/PopUpConfirmation';
import PopUpMessage from '../components/PopUpMessage';

function EventCreator({ handleSubmit, form = {}, pageTitle="Crear Evento", author }) {
    const [showError, setShowError] = useState(false);
    const [errorMessage,setErrorMessage] = useState("");
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



    const handleFileChange = (e) => {
        const file = e.target.files[0];
        if (file) {
            const reader = new FileReader();
            reader.onloadend = () => {
                setFormData({ ...formData, path: reader.result });
            };
            reader.readAsDataURL(file);
        }
    };

    const handleChange = (e) => {
        const { name, value, type, checked } = e.target;
        if (name === 'label') {
            const updatedLabels = checked
                ? [...formData.label, value]
                : formData.label.filter(labelk => labelk !== value);
            setFormData({ ...formData, label: updatedLabels });
        } else {
            setFormData({ ...formData, [name]: value });
        }
    };


    return (
        <div className="min-h-screen bg-gray-50 flex justify-center items-center py-8 px-4">
            <div className="bg-white shadow-md rounded-lg p-8 w-full lg:w-3/4 flex flex-col lg:flex-row">

               <div className="w-full lg:w-1/3 flex flex-col justify-center items-center p-4">
                    <div className="w-64 h-64 border border-gray-300 rounded-lg overflow-hidden">
                        {formData.path ? (
                            <img src={formData.path} alt="Vista previa" className="w-full h-full object-cover"/>
                                ) : (
                                 <p className="flex items-center justify-center h-full text-gray-400">Sin imagen</p>
                            )}
                    </div>
                    <label className="mt-4 bg-orange-500 text-white py-2 px-4 rounded-lg cursor-pointer shadow-md hover:bg-orange-600">
                        Seleccionar Archivo
                        <input type="file" accept="image/*" onChange={handleFileChange} className="hidden" />
                    </label>
                   </div>

            <div className="w-full lg:w-2/3 flex flex-col space-y-6 p-4">
            <h1 className='font-bold text-2xl text-center'> {pageTitle}</h1>

            <div>
                <label className="block text-sm font-medium text-gray-700">Título</label>
                <input type="text"
                className="mt-1 block w-full py-2 px-3 border border-gray-300 rounded-md shadow-sm focus:ring-orange-500 focus:border-orange-500"
                name="title"
                value={formData.title}
                onChange={handleChange}
                />
            </div>

            <div>
                <label className="block text-sm font-medium text-gray-700">Fecha</label>
                <input type="date"
                className="mt-1 block w-full py-2 px-3 border border-gray-300 rounded-md shadow-sm focus:ring-orange-500 focus:border-orange-500"
                name="date"
                value={formData.date}
                onChange={handleChange}
                />
            </div>

            <div>
                <label className="block text-sm font-medium text-gray-700">Autor</label>
                <input type="author"
                className="mt-1 block w-full py-2 px-3 border border-gray-300 rounded-md shadow-sm focus:ring-orange-500 focus:border-orange-500"
                name="author"
                value={formData.author}
                onChange={handleChange}
                />
            </div>

            <div>
                <label className="block text-sm font-medium text-gray-700">Lugar</label>
                <input type="text"
                className="mt-1 block w-full py-2 px-3 border border-gray-300 rounded-md shadow-sm focus:ring-orange-500 focus:border-orange-500"
                name="place"
                value={formData.place}
                onChange={handleChange}
                />
            </div>

            <div>
                <label className="block text-sm font-medium text-gray-700">Entrada</label>
                <select
                className="mt-1 block w-full py-2 px-3 border border-gray-300 rounded-md shadow-sm focus:ring-orange-500 focus:border-orange-500"
                name="entryType"
                value={formData.entryType}
                onChange={handleChange}
                >
                    <option value="">Selecciona el tipo de entrada</option>
                    <option value="Pago">Pago</option>
                    <option value="Libre">Libre</option>
                    <option value="Registro">Registro</option>
                </select>
            </div>

            <div>
                 <label className="block text-sm font-medium text-gray-700">Etiquetas</label>
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

            <div>
                <label className="block text-sm font-medium text-gray-700">Descripción</label>
                <textarea
                className="mt-1 block w-full py-2 px-3 border border-gray-300 rounded-md shadow-sm focus:ring-orange-500 focus:border-orange-500"
                name="description"
                value={formData.description}
                onChange={handleChange}
                />
            </div>

            <button
                type="button"
                className="w-full py-2 px-4 bg-green-500 text-white rounded-lg shadow-md hover:bg-green-600 focus:outline-none"
                 >
                        Publicar Evento
            </button>
            </div>
        </div>
    </div>
);
}

export default EventCreator;


