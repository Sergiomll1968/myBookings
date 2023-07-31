import React, { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import Calendar from 'react-calendar';
import './CalendarModal.css';

const CalendarModal = ({ onClose }) => {
  const [selectedDate, setSelectedDate] = useState(new Date());

  const onDateChange = (date) => {
    setSelectedDate(date);
  };

  return (
    

    <div className="modal-background">
      <div className="modal-content">
        <h2>Calendario</h2>
        <Calendar onChange={onDateChange} value={selectedDate} />
        <button onClick={onClose}>Cerrar</button>
      </div>
    </div>




    
  );
};

export default CalendarModal;
