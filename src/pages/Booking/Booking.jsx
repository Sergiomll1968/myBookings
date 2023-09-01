import { useState, useEffect, useContext } from 'react';

import { Form, Button } from 'react-bootstrap';

import Select from '../../components/Select/Select.jsx';

import { UserContext } from '../../contexts/UserContext.jsx';
import { EnvContext } from '../../contexts/EnvContext.jsx';
import { useGetData } from '../../hooks/useGetData.js';

import 'bootstrap/dist/css/bootstrap.min.css';

function Booking() {
  
  const { user } = useContext(UserContext);
  const { env } = useContext(EnvContext);
 
  const servicesHook = useGetData();
  const bookingsHook = useGetData();

  const [services, setServices] = useState([]);
  const [bookings, setBookings] = useState([]);
  const [dateTime, setDateTime] = useState('');
  const [selectedService, setSelectedService] = useState('');

  useEffect(() => {
    async function fetchData() {
      try {
        await servicesHook.getData({
          route: `${env.HOST}services/all`,
          method: 'GET',
          mode: 'cors',
          headers: {
          'Content-Type': 'application/json',
          'Access-Control-Allow-Origin': '*',
          'Access-Control-Allow-Headers': '*',
          'Access-Control-Allow-Credentials': true,
          },
        });
      }
      catch (e) {
        console.error('Error fetching services:', e);
        return;
      }
    }
    
    fetchData();

  });

  useEffect(() => {
    return;
  }, [services]);

  useEffect(() => {
    setServices(servicesHook.data);
    return;
  }, [servicesHook.data]);

  useEffect(() => {
    setBookings(bookingsHook.data);
    return;
  }, [bookingsHook.data]);

  const handleDateTimeChange = (e) => {
    setDateTime(e.target.value);
  };

  const handleCreateBooking = async () => {
    let booking = {
      date: dateTime,
      state: 'pending',
      deleted: false,
      userId: user._id,
      serviceId: selectedService,
      // serviceId: '647a20a39ccdc89e3a14f524',
    };
    try {
      await bookingsHook.getData({
        // route: `https://apihairs-7342.onrender.com/${e.target.value}`,
        route: `${env.HOST}bookings/date`,
        method: 'POST',
        mode: 'cors',
        headers: {
          'Content-Type': 'application/json',
          'Access-Control-Allow-Origin': '*',
          'Access-Control-Allow-Headers': '*',
          'Access-Control-Allow-Credentials': true,
        },
        body: JSON.stringify({booking}),
      });
    }
    catch (e) {
      console.error('Error fetching services:', e);
      return;
    }
  };

  return (
    <div style={{ backgroundColor: '#90E0EF', maxWidth: '1440px', minHeight: '1024px', margin: '0 auto', padding: '20px' }}>
      <h1>Booking</h1>
      <Form>
        <Form.Group>
          <Form.Label>Tipo de servicio:</Form.Label>
          <Select
            data={services.map((serv) => {
              return { key: serv._id, value: serv.name }
            })}
            // defaultMessage='Seleccione una servicio'
            selectedKey={{key: '64b589e475d6d25a28767ef5'}} // Jona2
            onChangeHandler={(serv) => {
              console.log(serv)
              setSelectedService(serv.key)
            }}/>
        </Form.Group>
        <Form.Group>
          <Form.Label>Día y Hora:</Form.Label>
          <Form.Control type="datetime-local" value={dateTime} onChange={handleDateTimeChange} />
        </Form.Group>
        <Button onClick={handleCreateBooking}>Crear cita</Button>
      </Form>
    </div>
  );
}

export default Booking;

