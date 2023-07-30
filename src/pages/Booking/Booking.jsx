import { useState, useEffect, useContext } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Form, Button } from 'react-bootstrap';
import {UserContext} from '../../contexts/UserContext.jsx';

function Booking() {
  // Este fetch es temporal para logearse y probar booking. Luego borrar
  // const tempuser = { username: "Sergio A.G", password: "4444", id: "64b80eb78a82fe493962572e" };

  // async function login() {
  //   await fetch('https://apihairs-mbe1.onrender.com/login', {
  //     method: 'POST',
  //     mode: 'cors',
  //     body: JSON.stringify(tempuser),
  //     headers: {
  //       'Content-Type': 'application/json',
  //     },
  //   }).then(response => response.json())
  //     .then(data => {
  //       setToken(data);
  //     })
  //     .catch(error => {
  //       console.error('Error fetching services:', error);
  //     });
  // }

  const { user, setUserProfile } = useContext(UserContext);
  const [services, setServices] = useState([]);
  // const [token, setToken] = useState([]);
  const [dateTime, setDateTime] = useState('');
  const [selectedService, setSelectedService] = useState('');

  useEffect(() => {
    fetch('https://apihairs-mbe1.onrender.com/services/all')
      .then(response => response.json())
      .then(data => {
        setServices(data);
      })
      .catch(error => {
        console.error('Error fetching services:', error);
      });
    // login();
  }, []);

  const handleServiceChange = (e) => {
    setSelectedService(e.target.value);
  };

  const handleDateTimeChange = (e) => {
    setDateTime(e.target.value);
  };

  const handleCreateBooking = async () => {
    let data = {
      date: dateTime,
      state: 'pending',
      deleted: false,
      userId: user._id,
      serviceId: selectedService,
    };
  
    console.log(data);

    await fetch(`https://apihairs-mbe1.onrender.com/bookings/date`, {
      method: 'POST',
      mode: 'cors',
      body: JSON.stringify(data),
      headers: {
        'Content-Type': 'application/json',
        'Authorization': user.token,
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
    <div style={{ backgroundColor: '#90E0EF', maxWidth: '1440px', minHeight: '1024px', margin: '0 auto', padding: '20px' }}>
      <h1>Booking</h1>
      <Form>
        <Form.Group>
          <Form.Label>Tipo de servicio:</Form.Label>
          <Form.Control as="select" value={selectedService} onChange={handleServiceChange}>
            {services.map(service => (
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
  );
}

export default Booking;

