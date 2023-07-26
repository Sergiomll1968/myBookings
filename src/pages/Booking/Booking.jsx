import { useState, useEffect } from 'react';

// import CalendarModal from './CalendarModal';
import CalendarModal from '../../components/Modal/CalendarModal.jsx'; // Importamos el componente CalendarModal

import Logo from '../../components/Logo/Logo.js';
import Button from '../../components/Button/Button.js';
import LayerBlack from '../../components/LayerBlack/LayerBlack.js';
import './Booking.css';

function Booking() {
  const tempuser = { username: "Sergio A.G", password: "4444", id: "64b80eb78a82fe493962572e" };

  async function login() {
    await fetch('https://apihairs-mbe1.onrender.com/login', {
      method: 'POST',
      mode: 'cors',
      body: JSON.stringify(tempuser),
      headers: {
        'Content-Type': 'application/json',
      },
    }).then(response => response.json())
      .then(data => {
        setToken(data);
      })
      .catch(error => {
        console.error('Error fetching services:', error);
      });
  }

  const [services, setServices] = useState([]);
  const [token, setToken] = useState([]);
  const [dateTime, setDateTime] = useState('');
  const [selectedService, setSelectedService] = useState('');
  const [isModalOpen, setIsModalOpen] = useState(false);

  useEffect(() => {
    fetch('https://apihairs-mbe1.onrender.com/services/all')
      .then(response => response.json())
      .then(data => {
        setServices(data);
      })
      .catch(error => {
        console.error('Error fetching services:', error);
      });
    login();
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
      userId: tempuser.id,
      serviceId: selectedService,
    };

    await fetch('https://apihairs-mbe1.onrender.com/bookings/date', {
      method: 'POST',
      mode: 'cors',
      body: JSON.stringify(data),
      headers: {
        'Content-Type': 'application/json',
        'Authorization': token,
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

  const openModal = () => {
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };

  return (
    <>
      <div className='home'>
        <div className='overlap-group'>
          <Logo>
            <img className='logo' alt="Logo" src='/public/Logo.png' />
          </Logo>
        </div>
        <div style={{ width: '80%' }}>
          <br></br>
          <br></br>
          <LayerBlack height='188px' className="col-12 col-md-10 d-flex justify-content-center p-3">
            <div style={{ display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center', marginRight: '50px' }}>
              <h2 className='username'>
                Username: Crispín Clander
              </h2>
              <h2 className='username'>
                Password: ************
              </h2>
            </div>
            <div style={{ display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center', marginRight: '50px' }}>
              <h2 className='username'>
                Email: tucita@gmail.com
              </h2>
              <h2 className='username' style={{ marginLeft: '20px' }}>Telephone: 123 456 789</h2>
            </div>
          </LayerBlack>
          <br></br>
          <LayerBlack height='188px' className="col-12 col-md-10 d-flex justify-content-center p-3">
            <div style={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'center' }}>
              {/* <h2 className='username'> Su próxima cita es: 11/08/2023 a las 10:00h </h2>
              <h2 className='username'> Historial: </h2> */}
            </div>
            <div style={{ display: 'flex', justifyContent: 'flex-end', alignItems: 'flex-end', marginTop: 'auto' }}>
              <Button type='login' onClick={openModal}>Ver Citas</Button>
            </div>
          </LayerBlack>
          <br></br>
          <LayerBlack height='188px' className="col-12 col-md-10 d-flex justify-content-center p-3">
            <div style={{ display: 'flex', justifyContent: 'flex-end', alignItems: 'flex-end', marginTop: 'auto' }}>
              <Button type='login'>Servicios</Button>
            </div>
          </LayerBlack>
          <br></br>
        </div>
      </div>

      {isModalOpen && <CalendarModal onClose={closeModal} />}
    </>
  );
}

export default Booking;
