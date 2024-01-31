import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { DateCalendar } from '@mui/x-date-pickers/DateCalendar';
import ModalReminder from './components/ModalReminder';
import { useEffect, useState } from 'react';
import ReminderData from './components/ReminderData';

export default function BasicDateCalendar() {
  const [showModal,setShowModal] = useState(false);
  const [selectedDate, setSelectedDate] = useState(null);
  const [reminderList, setReminderList] = useState([]);

  useEffect(()=>{
    const storedReminders = JSON.parse(localStorage.getItem('reminders'));
    if(storedReminders){
      setReminderList(storedReminders)
    }
  },[])




  const handleDateChange = (date) =>{
    const formattedDate = date.toISOString().split('T')[0];
    const todayDate = new Date().toISOString().split('T')[0];
    if(formattedDate< todayDate){
      alert('Please select a date in the future')
      return;
    }else{
      setSelectedDate(date)
      setShowModal(true)
    }
  }

  const addReminder = (reminder) =>{
    if(reminder.title === ""  || reminder.time === "" || reminder.description === ""){ 
      alert('Please fill all the fields')
      return;
    }else{
      const updatedReminders = [...reminderList,reminder]
      setReminderList(updatedReminders)
      localStorage.setItem('reminders',JSON.stringify(updatedReminders))
      setShowModal(false)
    }
  }

  const deleteReminder = (index) =>{
    const newReminderList = reminderList.filter((_,i)=> i !==index)
    setReminderList(newReminderList)
    localStorage.setItem('reminders',JSON.stringify(newReminderList))
  }

  return (
    <LocalizationProvider dateAdapter={AdapterDayjs}>
      <div className="flex justify-center text-center flex-col">
        <h1 className='mt-10 text-6xl text-white'>Personal Agenda</h1>
        <div className='mt-14'>
          <DateCalendar 
            className='bg-white'
            views={['year','month','day']}
            onChange={handleDateChange}
            />
        </div>
        
      </div>
      {showModal && <ModalReminder selectedDate={selectedDate} setShowModal={setShowModal} addReminder={addReminder}/>}

      {/*Un renderizado condicional */}

      {reminderList.length > 0 && 
        <div className="flex flex-col items-center mt-10">
          <h1 className="text-4xl text-white mb-5">Your reminders</h1>
          {reminderList.map((reminder,index) => <ReminderData key={index} 
                      title={reminder.title}
                      date={reminder.date}
                      time={reminder.time}
                      description={reminder.description}
                      deleteReminder={()=>deleteReminder(index)} 
                      index={index}/>)}
        </div>
      }

    </LocalizationProvider>
  );
}
