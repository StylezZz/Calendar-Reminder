const ReminderData = ({ title, time, description, date, deleteReminder, index }) => {
    // Formatear la fecha = reminderData.date

    const dateObj = new Date(date);

    const day = dateObj.getDate();
    const month = dateObj.getMonth() + 1;
    const year = dateObj.getFullYear();
    return (
        <div className="w-full max-w-lg bg-purple-200 rounded-md p-5 mb-4">
            <div className="flex items-center justify-between">
                <div className="flex-shrink-0 w-1/2 mr-7">
                    <p className="text-lg font-bold text-purple-700 mb-3">Titulo: {title}</p>
                    <p className="text-sm text-gray-700">Fecha: {day}/{month}/{year} </p>
                    <p className="text-sm text-gray-700">Hora: {time}</p>
                    <p className="text-sm text-gray-700 ">Descripción: {description}</p>
                </div>
            </div>
            <div className="flex items-center justify-end">
                <button
                    onClick={() => deleteReminder(index)}
                    className="bg-red-500 text-white px-3 py-1 rounded-md ml-2 hover:bg-red-600 focus:outline-none focus:ring focus:border-blue-300">
                    Delete
                </button>
            </div>
        </div>
    );
};

export default ReminderData;
