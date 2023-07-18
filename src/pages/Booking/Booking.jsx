import React, { useState, useEffect } from 'react';

const Booking = () => {
  const [services, setServices] = useState([]);
  const [selectedService, setSelectedService] = useState('');
  const [dateTime, setDateTime] = useState('');

  useEffect(() => {
    fetch('https://apihairs.onrender.com/services/all')
      .then(response => response.json())
      .then(data => {
        setServices(data);
      })
      .catch(error => {
        console.error('Error fetching services:', error);
      });
  }, []);

  const handleServiceChange = (e) => {
    setSelectedService(e.target.value);
  };

  const handleDateTimeChange = (e) => {
    setDateTime(e.target.value);
  };

  const handleCreateBooking = () => {
    fetch('https://apihairs.onrender.com/booking/date', {
      method: 'POST', // *GET, POST, PUT, DELETE, etc.
      mode: 'cors', // no-cors, *cors, same-origin)
      headers: {
        'Content-Type': 'application/json',
        //'Authorization': token
      },
    })
      .then(response => response.json())
      .then(data => {
        setServices(data);
      })
      .catch(error => {
        console.error('Error fetching services:', error);
      });
  };

  return (
    <div>
      <h1>Booking</h1>
      <label>
        Tipo de servicio:
        <select value={selectedService} onChange={handleServiceChange}>
          <option value="">Selecciona un servicio</option>
          {services.map(service => (
            <option key={service.id} value={service.id}>{service.name}</option>
          ))}
        </select>
      </label>
      <br />
      <label>
        Día y Hora:
        <input type="datetime-local" value={dateTime} onChange={handleDateTimeChange} />
      </label>
      <br />
      <button onClick={handleCreateBooking}>Crear cita</button>
    </div>
  );
};

export default Booking;
