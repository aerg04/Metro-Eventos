export default function PopUpMessage({ message, onClose, messageOnClose }){
    return (
        <div className="fixed inset-0 flex items-center justify-center bg-gray-800 bg-opacity-50">
            <div className="bg-white p-6 rounded-md shadow-md">
                <p className="mb-4">{message}</p>
                <div className="flex justify-end">
                    <button
                        onClick={onClose}
                        className="py-2 px-4 bg-green-500 text-white rounded-md shadow-sm hover:bg-green-400"
                    >
                        {messageOnClose}
                    </button>
                </div>
            </div>
        </div>
    );
};