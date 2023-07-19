import { useState, useEffect } from 'react';
import Logo from '../../components/Logo/Logo.js';
import Input from '../../components/Input/Input.js';
import Button from '../../components/Button/Button.js';
import LayerBlack from '../../components/LayerBlack/LayerBlack.js';
import Modal from '../../components/Modal/Modal.js';
import Panel from '../../components/Panel/Panel.js';

import './Home.css';

function Home() {

  const [showRegister, setShowRegister] = useState(false);


  return (
    <>
      <div className='home'>
        <div className='containerDiv'>
          <div className='row'>
            <LayerBlack className='col-10 col-md-11 col-lg-12'>
              <Logo><img src='/public/Logo.png' alt='Logo' /></Logo>
              <div className='inputs'>
                <div className='label'>Username</div>
                <Input className='col-10'></Input>
                <br></br>
                <div className='label'>Password</div>
                <Input className='col-10'></Input>
                <br></br>
                <Button type='login'>Log In</Button>
                <br></br>
                <br></br>
                <br></br>
                <div className='label'>Don&apos;t have an account?</div>
                <br></br>
                <Button onClick={() => setShowRegister(true)}>Register</Button>
              </div>
            </LayerBlack>
            {showRegister &&
              <Modal onClick={() => setShowRegister(false)}>
                <Panel className='col-12 col-md-10 col-lg-4'>
                  <div className='containerRegister'>
                    <div className='row'>
                      <div className='inputs'>
                        <div className='labelRegister' style={{ fontSize: '45px' }}>Registrarte</div>
                        <div className='labelRegister'>Es rápido y fácil</div>
                        <br></br>
                        <br></br>
                        <div className='labelRegister'>Username</div>
                        <Input className='col-10'></Input>
                        <br></br>
                        <div className='labelRegister'>Password</div>
                        <Input className='col-10'></Input>
                        <br></br>
                        <div className='labelRegister'>Email</div>
                        <Input className='col-10'></Input>
                        <br></br>
                        <Button>Register</Button>
                      </div>
                    </div>
                  </div>
                </Panel>
              </Modal>
            }
          </div>
        </div>
        <br></br>
        <br></br>
      </div>
    </>
  );
}

export default Home;
