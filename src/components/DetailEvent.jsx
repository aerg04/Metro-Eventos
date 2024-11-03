export default function DetailEvent({title, path, date, place, author, entryType, description, labels, ...rest}) {
    return(<>
    <div className="flex flex-col md:flex-row min-h-screen p-4 mt-2">
                <div className="flex flex-col items-center">
                    <div className="w-64 h-64">
                        <img className="w-full h-full object-cover" src={path} alt="" />
                    </div>
                    <div className="mt-4 px-6">
                        <h1 className="text-lg font-bold">{title}</h1>
                        <p className="mt-2"><strong>Fecha:</strong> {date}</p>
                        <p className="mt-2"><strong>Lugar:</strong> {place}</p>
                        <p className="mt-2"><strong>Autor:</strong> {author}</p>
                        <p className="mt-2"><strong>Entrada:</strong> {entryType}</p>
                    </div>
                </div>
                <div className="flex flex-col p-4 w-full md:w-1/2">
                    <div className="">
                        <h1 className="text-center text-xl font-semibold">Descripción</h1>
                        <div className="mt-2 bg-gray-100 p-2 rounded">
                            <p className="mt-2">{description}</p>

                        </div>
                    </div>
                    <div className="mt-4">
                        <h2 className="text-center text-lg font-semibold">Información Adicional</h2>
                        <div className="mt-2 bg-gray-100 p-2 rounded">
                        {Object.entries(rest).map(([key, value]) => (
                            <div key={key}>
                                <strong>{key}:</strong> {typeof value === 'string' && (value.startsWith('http://') || value.startsWith('https://')) ? (
                                    <a href={value} target="_blank" rel="noopener noreferrer" className="text-blue-500 underline">{value}</a>
                                ) : (
                                    value
                                )}
                            </div>
                        ))}
                        </div>
                    </div>
                    <div className="mt-2">
                        <h2 className="text-center text-lg font-semibold">Etiquetas</h2>
                        <div className="mt-2 bg-gray-100 p-2 rounded">
                            {labels && labels.length > 0 ? (
                                labels.map((label, index) => (
                                    <span key={index} className="inline-block bg-blue-200 text-blue-800 text-xs px-2 py-1 rounded-full mr-2">{label}</span>
                                ))
                            ) : (
                                <p>No hay etiquetas disponibles</p>
                            )}
                        </div>
                    </div>
                </div>
            </div>
    </>)
}