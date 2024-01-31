import ConfirmationModal from "./ConfirmationModal";
import { useState } from "react";

// eslint-disable-next-line react/prop-types
const ModalReminder = ({ setShowModal, selectedDate, addReminder }) => {
    const [showConfirmationModal, setShowConfirmationModel] = useState(false);
    console.log(selectedDate)

    const handleConfirmation = () => {
        setShowConfirmationModel(true)
    }
    return (
        <div className="fixed top-0 left-0 w-full h-full flex items-center justify-center">
            {/* Fondo semi-transparente */}
            <div
                className="absolute top-0 left-0 w-full h-full bg-black opacity-50"
                onClick={() => setShowModal(false)}
            ></div>

            {/* Contenido del modal */}
            <div className="bg-white w-11/12 md:w-2/3 lg:w-1/3 rounded-lg p-5 z-10">
                <h1 className="mt-6 text-xl font-bold">Add a reminder for {selectedDate.$D}/{selectedDate.$M + 1}/{selectedDate.$y} </h1>
                <div className="flex flex-col">
                    <label className="mt-6">Titulo</label>
                    <input className="border-2 border-gray-300 p-2 rounded-lg mt-1" type="text" />

                    <label className="mt-4">Hora</label>
                    <input className="border-2 border-gray-300 p-2 rounded-lg mt-1" type="time" />

                    <label className="mt-4">Descripcion</label>
                    <textarea className="border-2 border-gray-300 p-2 rounded-lg mt-1" type="text"
                        style={{ resize: "none", height: "150px" }} />

                    <div className="flex justify-end mt-6">
                        <button
                            className="bg-green-500 text-white p-2 rounded-lg ml-4 mr-4"
                            onClick={handleConfirmation}>Guardar</button>
                        <button
                            className="bg-red-500 text-white p-2 rounded-lg"
                            onClick={() => setShowModal(false)}
                        >
                            Cancelar
                        </button>

                    </div>
                </div>
            </div>

            {/*Incluir el confirmation modal en caso se le de al Guardar*/}
            {showConfirmationModal && <ConfirmationModal addReminder={addReminder} setShowConfirmationModel={setShowConfirmationModel} reminderData={
                {
                    title: document.querySelector('input[type="text"]').value,
                    time: document.querySelector('input[type="time"]').value,
                    description: document.querySelector('textarea').value,
                    day: selectedDate
                }
            }
                style={{ zIndex: 30 }} />
            }

        </div>
    );
};

export default ModalReminder;
