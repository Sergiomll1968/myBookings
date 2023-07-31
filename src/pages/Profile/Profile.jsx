import Logo from '../../components/Logo/Logo.js';
import Button from '../../components/Button/Button.js';
import LayerBlack from '../../components/LayerBlack/LayerBlack.js';
import './Profile.css';

function Profile() {
  return (
    <>
      <div className='home'>
        <LayerBlack height='188px' borderRadius='0px' style={{ width: '100%' }} className="col-12 col-md-12 d-flex justify-content-center p-3">
          <Logo>
            <img className='logoProfile' alt="Logo" src='/Logo.png' />
          </Logo>
          <Button className='button'>Log Out</Button>
        </LayerBlack>
        <div style={{ width: '80%' }}>
          <br></br>
          <br></br>
          <LayerBlack height='188px' className="col-12 col-md-10 d-flex justify-content-center p-3">
            <div style={{ display: 'flex', justifyContent: 'space-around', width: '100%' }}>
              <div>
                <h2 className='username'> Username: perfil 1 </h2>
                <h2 className='username'> Password: ****** </h2>
                <h2 className='username'> Email: tucita@gmail.com </h2>
                <h2 className='username'> Telephone: 123 456 789 </h2>
              </div>
              <img src="/myperfil.png" alt="Image" className="grid-image" />
            </div>
          </LayerBlack>
          <br></br>
          <LayerBlack className="col-12 col-md-10 d-flex justify-content-space-around p-3">
            <div style={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'center' }}>
              <div>
                <h2 className='username'> Su próxima cita es: 11/08/2023 a las 10:00h </h2>
                <h2 className='username'> Historial: </h2>
              </div>

              <div className='row' style={{ display: 'flex', justifyContent: 'space-between', width: '100%' }}>
                <LayerBlack height='100px' className="col-6 col-md-3 d-flex justify-content-center" style={{ position: 'relative' }}>

                  <img className="reloj" alt="Reloj" src="citas.png" style={{ marginRight: '10px' }} />
                  <div className='martes'>
                    Martes
                    <br />
                    1/07/2023
                    <br />
                    11:00
                  </div>
                </LayerBlack>

                <LayerBlack height='100px' className="col-6 col-md-3 d-flex justify-content-center" style={{ position: 'relative' }}>

                  <img className="reloj" alt="Reloj" src="citas.png" style={{ marginRight: '10px' }} />
                  <div className='martes'>
                    Miercoles
                    <br />
                    15/07/2023
                    <br />
                    12:00
                  </div>
                </LayerBlack>


                <LayerBlack height='100px' className="col-6 col-md-3 d-flex justify-content-center" style={{ position: 'relative' }}>

                  <img className="reloj" alt="Reloj" src="citas.png" style={{ marginRight: '10px' }} />
                  <div className='martes'>
                    Viernes
                    <br />
                    1/08/2023
                    <br />
                    09:00
                  </div>
                </LayerBlack>

                <div className="col-6 col-md-3">
                  <img src="/+citas.png" alt="Image" className="grid-image" />
                </div>
              </div>
            </div>
          </LayerBlack>

          <br></br>
          <LayerBlack className="col-12 col-md-10 d-flex justify-content-center p-3">
            <div style={{ display: 'flex', justifyContent: 'space-between', width: '100%', alignItems: 'center', flexWrap: 'wrap' }}>
              <img src="/verpremios.png" alt="Image" className="grid-image" />
              <LayerBlack height='100px' className="col-3 col-md-3 d-flex align-items-center" style={{ position: 'relative' }}>
                <img className="reloj" alt="Reloj" src="premios.png" style={{ marginRight: '10px' }} />
                <div className='martes' style={{ textAlign: 'center' }}>
                  No tiene
                  <br />
                  Premios
                </div>
              </LayerBlack>
              <LayerBlack height='100px' className="col-3 col-md-3 d-flex align-items-center" style={{ position: 'relative' }}>
                <img className="reloj" alt="Reloj" src="premios.png" style={{ marginRight: '10px' }} />
                <div className='martes' style={{ textAlign: 'center' }}>
                  Score
                  <br />
                  1000 Pts
                </div>
              </LayerBlack>
            </div>
          </LayerBlack>
          <br></br>
        </div >
      </div >
    </>
  );
}

export default Profile;