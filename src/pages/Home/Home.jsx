import { useState, useContext, useEffect } from 'react';

import Logo from '../../components/Logo/Logo.js';
import Input from '../../components/Input/Input.js';
import Button from '../../components/Button/Button.js';
import LayerBlack from '../../components/LayerBlack/LayerBlack.js';
import Modal from '../../components/Modal/Modal.js';
import Panel from '../../components/Panel/Panel.js';

import { UserContext } from '../../contexts/UserContext.jsx';
import { useGetData } from '../../hooks/useGetData.js';

import './Home.css';

function Home() {
  const { user, setUserProfile } = useContext(UserContext);

  const { getData, data, error, loading } = useGetData();

  const [showRegister, setShowRegister] = useState(false);
  const [register, setRegister] = useState(false);
  const [button, setButton] = useState();

  useEffect(() => {
    setUserProfile({ ...user, token: data?.token });
  }, [data]);

  useEffect(() => {
    if (!register) {
      return;
    }

    setTimeout(() => {
      setRegister(false);
    }, 5000);
  }, [register]);

  function changeUsername(e) {
    setUserProfile({ ...user, username: e.target.value });
  }

  function changeEmail(e) {
    setUserProfile({ ...user, mail: e.target.value });
  }

  function changePassword(e) {
    setUserProfile({ ...user, password: e.target.value });
  }

  async function onClickHandler(e) {
    let userDataAndToken;
    try {
      userDataAndToken = await getData({
        route: `https://apihairs-mbe1.onrender.com/${e.target.value}`,
        // route: `http://localhost:3001/${e.target.value}`,
        method: 'POST',
        mode: 'cors',
        headers: {
          'Content-Type': 'application/json',
          'Access-Control-Allow-Origin': '*',
          'Access-Control-Allow-Headers': '*',
          'Access-Control-Allow-Credentials': true,
        },
        body: JSON.stringify({ 'username': user.username, 'mail': user.mail, 'password': user.password }),
      });
    } catch
    (error) {
      return;
    }
    setUserProfile({ ...user, userDataAndToken });
    setButton(e.target.value);
    if (!userDataAndToken) {
      setRegister(true);
    }
  }

  return (
    <>
      <div className='home'>
        <br />
        <div className='containerDiv'>
          <div className='row'>
            <LayerBlack className='col-10 col-lg-9'>
              <Logo><img src='/Logo.png' alt='Logo' /></Logo>
              <div className='inputs'>
                <div className='label'>Username</div>
                <Input className='col-10 col-lg-9' type='text' onChange={(e) => changeUsername(e)}></Input>
                <br></br>
                <div className='label'>Password</div>
                <Input className='col-10 col-lg-9' type='password' onChange={(e) => changePassword(e)}></Input>
                <br></br>
                <Button type='login' value='login' onClick={(e) => onClickHandler(e)}>Log In</Button>
                <br></br>
                <br></br>
                <div className='label'>Don&apos;t have an account?</div>
                <Button width='200px' onClick={() => setShowRegister(true)}>Create new account</Button>
              </div>
            </LayerBlack>
            {showRegister &&
              <Modal>
                <Panel className='col-12 col-md-10 col-lg-4'>
                  <div className='containerRegister'>
                    <div><Button height='30px' width='30px' $borderRadius='5px' onClick={() => setShowRegister(false)}>X</Button></div>
                    <div className='row'>
                      <div className='inputs'>
                        <div className='labelRegister' style={{ fontSize: '45px' }}>Sign Up</div>
                        <div className='labelRegister'>It’s quick and easy</div>
                        <br></br>
                        <br></br>
                        <div className='labelRegister'>Username</div>
                        <Input className='col-10 col-md-9 col-lg-8' type='text' onChange={(e) => changeUsername(e)}></Input>
                        <br></br>
                        <div className='labelRegister'>Password</div>
                        <Input className='col-10 col-md-9 col-lg-8' type='password' onChange={(e) => changePassword(e)}></Input>
                        <br></br>
                        <div className='labelRegister'>Email</div>
                        <Input className='col-10 col-md-9 col-lg-8' type='email' onChange={(e) => changeEmail(e)}></Input>
                        <br></br>
                        <Button value='register' onClick={(e) => onClickHandler(e)}>Register</Button>
                      </div>
                    </div>
                  </div>
                </Panel>
              </Modal>
            }
            {register &&
              <Modal>
                <Panel className='col-12 col-md-10 col-lg-4'>
                  <div className='containerRegister'>
                    <div className='row'>
                      <div className='inputs'>
                        { }
                        {button === 'login' || data.message ?
                          <div className='labelRegister'>{data.message}</div> :
                          <div className='labelRegister'>Please, we&apos;ve sent you an email to confirm your account</div>}
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
      {error && <h2> error -- {JSON.stringify(error.statusText)} </h2>}
      {data && <h2> data --- {JSON.stringify(data)} </h2>}
    </>
  );

}

export default Home;
