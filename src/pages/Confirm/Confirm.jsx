import Logo from '../../components/Logo/Logo.js';

import Button from '../../components/Button/Button.js';
import LayerBlack from '../../components/LayerBlack/LayerBlack.js';



import './Confirm.css';

function Home() {
  return (
    <>
      {/* {loading && <h1>Loading</h1>} */}
      <div className='home'>
        <div className='containerDiv'>
          <div className='row'>
            <LayerBlack height='600px' className='col-10 col-lg-9'>
              <Logo><img src='/Logo.png' alt='Logo' /></Logo>
              <div className='inputs'>
                <br />
                <div className='label' style={{ fontSize: '22' }}>Enhorabuena!</div>
                <div className='label' style={{ fontSize: '22' }}>Has completado tu registro!</div>
                <br />
                <br />
                <a href="https://my-bookings.vercel.app/">
                  <Button>Ir a la Home</Button>
                </a>
              </div>
            </LayerBlack>
          </div>
        </div>
        <br></br>
        <br></br>
      </div>
    </>
  );

}

export default Home;
