import { useState, useEffect, useContext } from 'react';

import { Form, Button } from 'react-bootstrap';

import { UserContext } from '../../contexts/UserContext.jsx';
import { EnvContext } from '../../contexts/EnvContext.jsx';
import { useGetData } from '../../hooks/useGetData.js';

import 'bootstrap/dist/css/bootstrap.min.css';

function Booking() {
  
  const { user } = useContext(UserContext);
  const { env } = useContext(EnvContext);
 
  const { getData, data, error, loading } = useGetData();

  const [services, setServices] = useState([]);
  const [dateTime, setDateTime] = useState('');
  const [selectedService, setSelectedService] = useState('');

  useEffect(() => {
    async function fetchData() {
      try {
        await getData({
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
        console.error('Error fetching services:', error);
        return;
      }
    }
    
    fetchData();

  });

  useEffect(() => {
    return;
  }, [services]);

  useEffect(() => {
    setServices(data);
    return;
  }, [data]);

  const handleServiceChange = (e) => {
    setSelectedService(e.target.value);
  };

  const handleDateTimeChange = (e) => {
    setDateTime(e.target.value);
  };

  const handleCreateBooking = async () => {
    let booking = {
      date: dateTime,
      state: 'pending',
      deleted: false,
      userId: user._id,
      // serviceId: selectedService,
      serviceId: '647a20a39ccdc89e3a14f524',
    };
    try {
      await getData({
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
      console.error('Error fetching services:', error);
      return;
    }
    // setServices(data);
    // await fetch(`https://apihairs-mbe1.onrender.com/bookings/date`, {
    //   method: 'POST',
    //   mode: 'cors',
    //   body: JSON.stringify(data),
    //   headers: {
    //     'Content-Type': 'application/json',
    //     'Authorization': user.token,
    //   },
    // })
    //   .then(response => response.json())
    //   .then(data => {
    //     setServices(data);
    //   })
    //   .catch(error => {
    //     console.error('Error fetching services:', error);
    //   });
  };

  return (
    <>
      <div style={{ backgroundColor: '#90E0EF', maxWidth: '1440px', minHeight: '1024px', margin: '0 auto', padding: '20px' }}>
        <h1>Booking</h1>
        <Form>
          <Form.Group>
            <Form.Label>Tipo de servicio:</Form.Label>
            <Form.Control as="select" value={selectedService} onChange={handleServiceChange}>
              {data && data.map(service => (
                <option key={service.id} value={service.id}>{service.name}</option>
                ))}
            </Form.Control>
          </Form.Group>
          <Form.Group>
            <Form.Label>Día y Hora:</Form.Label>
            <Form.Control type="datetime-local" value={dateTime} onChange={handleDateTimeChange} />
          </Form.Group>
          <Button onClick={handleCreateBooking}>Crear cita</Button>
        </Form>
      </div>
      {data && <h2> data...</h2>}
      {loading && <h2> loading...</h2>}
    </>
  );
}

export default Booking;

