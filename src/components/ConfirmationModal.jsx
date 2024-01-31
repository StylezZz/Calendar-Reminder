/* eslint-disable react/prop-types */
const ConfirmationModal = ({setShowConfirmationModel,reminderData,addReminder}) => {
    return (
        <div className="fixed top-0 left-0 w-full h-full flex items-center justify-center z-30">
            {/* Fondo semi-transparente */}
            <div
                className="absolute top-0 left-0 w-full h-full bg-black opacity-50"
            ></div>

            {/* Contenido del modal */}
            <div className="bg-white w-11/12 md:w-2/3 lg:w-1/3 rounded-lg p-5 z-10">
                <h1 className="mt-6 text-xl font-bold">Confirm your reminder </h1>
                <div className="flex flex-col">
                    <label className="mt-6">Titulo</label>
                    <p className="font-medium text-lg">{reminderData.title}</p>

                    <label className="mt-4">Hora</label>
                    <p className="font-medium text-lg">{reminderData.time}</p>

                    <label className="mt-4">Descripcion</label>
                    <p className="font-medium text-lg">{reminderData.description}</p>

                    <div className="flex justify-end mt-6">
                        <button className="bg-green-500 text-white p-2 rounded-lg" onClick={()=>addReminder(
                            {
                                title: reminderData.title,
                                time: reminderData.time,
                                description: reminderData.description,
                                date: reminderData.date
                            }
                        )}>Yes</button>
                        <button className="bg-red-500 text-white p-2 rounded-lg ml-4"
                                onClick={()=>setShowConfirmationModel(false)}>No</button>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default ConfirmationModal