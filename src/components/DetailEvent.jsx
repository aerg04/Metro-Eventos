export default function DetailEvent({id, title, path, date, place, author, entryType, description, label, ...rest}) {

    const baseUrl = window.location.origin;
    const eventUrl = `${baseUrl}/event/${id}`;

    const handleSubscribe = () => {
        // Lógica para manejar la suscripción del usuario
        // Puedes llamar a un controlador o actualizar el estado del usuario
        alert(`Te has suscrito al evento: ${title}`);
    };

const urlsCompartir = {
    whatsapp: `https://wa.me/?text=${encodeURIComponent(
        `Asiste al siguiente evento: ${title} en ${place} el ${date}. Más información aquí: ${eventUrl}`
    )}`,
    telegram: `https://t.me/share/url?url=${encodeURIComponent(eventUrl)}&text=${encodeURIComponent(
        `Asiste al siguiente evento: ${title} en ${place} el ${date}.`
    )}`,
    gmail: `mailto:?subject=${encodeURIComponent(`Evento: ${title}`)}&body=${encodeURIComponent(
        `Asiste al siguiente evento: ${title} en ${place} el ${date}. Más información aquí: ${eventUrl}`
    )}`,
};

    return(<>
    <div className="flex flex-col lg:flex-row min-h-screen p-6 space-y-6 lg:space-y-0 lg:space-x-6 bg-gray-50">
                <div className="flex flex-col justify-center items-center items-center bg-white shadow-md p-6 rounded-lg w-full lg:w-1/3">
                    <div className="w-full h-80 overflow-hidden rounded-lg">
                        <img className="object-contain w-full h-full" src={path} alt="" />
                    </div>
                    <div className="mt-4 text-center">
                        <h1 className="text-3xl font-bold">{title}</h1>
                        <p className="mt-2 text-lg text-gray-700"><strong>Fecha:</strong> {date}</p>
                        <p className="mt-2 text-lg text-gray-700"><strong>Lugar:</strong> {place}</p>
                        <p className="mt-2 text-lg text-gray-700"><strong>Autor:</strong> {author}</p>
                        <p className="mt-2 text-lg text-gray-700"><strong>Entrada:</strong> {entryType}</p>
                    </div>
                </div>


                <div className="flex flex-col bg-white shadow-md p-6 rounded-lg w-full lg:w-2/3">
                    <div className="mb-6 mt-6">
                        <h1 className="text-2xl text-center font-semibold">Descripción</h1>
                        <div className="mt-4 bg-gray-100 p-4 rounded-lg shadow-inner">
                            <p className="text-xl text-gray-700">{description}</p>

                        </div>
                    </div>
                    {/* <div className="mt-4">
                        <h2 className="text-center text-lg font-semibold">Información Adicional</h2>
                        <div className="mt-2 bg-gray-100 p-2 rounded">
                        {Object.entries(rest).map(([key, value]) => (
                            key !== 'id' && key !== 'labels' && (
                                <div key={key}>
                                    <strong>{key}:</strong> {typeof value === 'string' && (value.startsWith('http://') || value.startsWith('https://')) ? (
                                        <a href={value} target="_blank" rel="noopener noreferrer" className="text-blue-500 underline">{value}</a>
                                    ) : (
                                        value
                                    )}
                                </div>
                            )
                        ))}
                        </div>
                    </div> */}
                    <div className="mb-6 mt-20">
                        <h2 className="text-center text-xl font-semibold">Etiquetas</h2>
                        <div className="mt-4 flex flex-wrap gap-2 justify-center bg-gray-100 p-2 rounded">
                            {label && label.length > 0 ? (
                                label.map((labelk, index) => (
                                    <span key={index} className="inline-block bg-blue-200 text-blue-800 text-lg px-5 py-3 rounded-full mr-2">{labelk}</span>
                                ))
                            ) : (
                                <p className="text-gray-500">No hay etiquetas disponibles</p>
                            )}
                        </div>
                        </div>

                        <div className="mb-6 mt-20">
                            <h2 className="text-center text-xl font-semibold">Compartir este evento</h2>
                        <div className="flex justify-center mt-6 space-x-6">
                                <a href={urlsCompartir.whatsapp} target="_blank" rel="noopener noreferrer"
                               className="p-6 bg-green-500 text-white rounded-full shadow-md hover:bg-green-600 transition">
                               <i className="fab fa-whatsapp"></i>
                               <img
                               src="https://upload.wikimedia.org/wikipedia/commons/6/6b/WhatsApp.svg"
                               alt="WhatsApp"
                               className="w-10 h-10"
                               />
                              </a>

                              <a href={urlsCompartir.telegram} target="_blank" rel="noopener noreferrer"
                                  className="p-6 bg-blue-500 text-white rounded-full shadow-md hover:bg-blue-600 transition">
                              <i className="fab fa-telegram"></i>
                              <img
                              src="https://upload.wikimedia.org/wikipedia/commons/8/82/Telegram_logo.svg"
                              alt="Telegram"
                              className="w-10 h-10"
                              />
                              </a>

                              <a href={urlsCompartir.gmail} target="_blank" rel="noopener noreferrer"
                                 className="p-6 bg-purple-500 text-white rounded-full shadow-md hover:bg-purple-600 transition">
                              <i className="fas fa-envelope"></i>
                              <img
                              src="https://upload.wikimedia.org/wikipedia/commons/7/7e/Gmail_icon_%282020%29.svg"
                              alt="Gmail"
                              className="w-10 h-10"
                              />
                           </a>

                        </div>
                        <div className="flex justify-center mt-20">
                            <button
                                onClick={() => handleSubscribe()}
                                className="py-3 px-5 bg-blue-500 text-white text-2xl rounded-md shadow hover:bg-blue-600 transition"
                            >
                                Suscribirse
                            </button>
                        </div>
                    </div>
                </div>
            </div>
     </>);
}