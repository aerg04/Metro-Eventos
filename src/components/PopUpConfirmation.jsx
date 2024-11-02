import React, { useState } from 'react';

const PopUpConfirmation = ({ messageButton, message, onConfirm, onCancel }) => {
    const [isVisible, setIsVisible] = useState(false);

    const handleConfirm = () => {
        setIsVisible(false);
        onConfirm();
    };

    const handleCancel = () => {
        setIsVisible(false);
        onCancel();
    };

    return (
        <>
            <button
                onClick={() => setIsVisible(true)}
                className="w-1/2 py-2 bg-orange-500 text-white text-center rounded-md shadow-sm hover:bg-orange-600"
            >
                {messageButton}
            </button>

            {isVisible && (
                <div className="fixed inset-0 flex items-center justify-center bg-gray-800 bg-opacity-50">
                    <div className="bg-white p-6 rounded-md shadow-md">
                        <p className="mb-4">{message}</p>
                        <div className="flex justify-end space-x-4">
                            <button
                                onClick={handleCancel}
                                className="py-2 px-4 bg-red-500 text-white rounded-md shadow-sm hover:bg-red-600"
                            >
                                Cancelar
                            </button>
                            <button
                                onClick={handleConfirm}
                                className="py-2 px-4 bg-green-500 rounded-md shadow-sm hover:bg-green-400"
                            >
                                Confirmar
                            </button>
                        </div>
                    </div>
                </div>
            )}
        </>
    );
};

export default PopUpConfirmation;