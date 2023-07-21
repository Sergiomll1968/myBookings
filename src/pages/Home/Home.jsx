import { useState } from 'react';
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
            <LayerBlack className='col-10 col-lg-9'>
              <Logo><img src='/public/Logo.png' alt='Logo' /></Logo>
              <div className='inputs'>
                <div className='label'>Username</div>
                <Input className='col-10 col-lg-9' type='text'></Input>
                <br></br>
                <div className='label'>Password</div>
                <Input className='col-10 col-lg-9' type='password'></Input>
                <br></br>
                <Button type='login'>Log In</Button>
                <br></br>
                <br></br>
                <br></br>
                <div className='label'>Don&apos;t have an account?</div>
                <br></br>
                <Button width='200px' onClick={() => setShowRegister(true)}>Create new account</Button>
              </div>
            </LayerBlack>
            {showRegister &&
              <Modal>
                <Panel className='col-12 col-md-10 col-lg-4'>
                  <div className='containerRegister'>
                    <div><Button height='30px' width='30px' borderRadius='5px' onClick={() => setShowRegister(false)}>X</Button></div>
                    <div className='row'>
                      <div className='inputs'>
                        <div className='labelRegister' style={{ fontSize: '45px' }}>Registrarte</div>
                        <div className='labelRegister'>Es rápido y fácil</div>
                        <br></br>
                        <br></br>
                        <div className='labelRegister'>Username</div>
                        <Input className='col-10 col-md-9 col-lg-8' type='text'></Input>
                        <br></br>
                        <div className='labelRegister'>Password</div>
                        <Input className='col-10 col-md-9 col-lg-8' type='password'></Input>
                        <br></br>
                        <div className='labelRegister'>Email</div>
                        <Input className='col-10 col-md-9 col-lg-8' type='email'></Input>
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
