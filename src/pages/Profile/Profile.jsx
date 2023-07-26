import Logo from '../../components/Logo/Logo.js';
import Button from '../../components/Button/Button.js';
import LayerBlack from '../../components/LayerBlack/LayerBlack.js';
import './Profile.css';

function Profile() {
  return (
    <>
      <div className='home'>
        <div className='overlap-group'>
          <Logo>
            <img className='logo' alt="Logo" src='/public/Logo.png' />
          </Logo>
          <Button className='button'>Log Out</Button>
        </div>
        <div style={{ width: '80%' }}>
          <br></br>
          <LayerBlack height='188px' className="col-12 col-md-10 d-flex justify-content-center p-3">
            <div style={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'center' }}>
              <h2 className='username'> Username: perfil 1 </h2>
              <h2 className='username'> Password: ****** </h2>
              <h2 className='username'> Email: tucita@gmail.com </h2>
              <h2 className='username'> Telephone: 123 456 789 </h2>
              <img src="/public/myperfil.png" alt="Image" className="grid-image" />
            </div>
          </LayerBlack>
          <br></br>
          <LayerBlack height='188px' className="col-12 col-md-10 d-flex justify-content-center p-3">
            <div style={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'center' }}>
              <h2 className='username'> Su próxima cita es: 11/08/2023 a las 10:00h </h2>
              <h2 className='username'> Historial: </h2>
              <div className='historial'>
                <div className='overlap-group'>
                  <img className="reloj" alt="Reloj" src="citas.png" />
                  <div className='martes'>
                    Martes
                    <br />
                    1/07/2023
                    <br />
                    11:00
                  </div>
                </div>
              </div>
            </div>
          </LayerBlack>
          <br></br>
          <LayerBlack height='188px' className="col-12 col-md-10 d-flex justify-content-center p-3">

          </LayerBlack>
          <br></br>
        </div>
      </div>

    </>
  );
}

export default Profile;