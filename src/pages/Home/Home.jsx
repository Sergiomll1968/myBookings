import Logo from '../../components/Logo/Logo.js';
import Input from '../../components/Input/Input.js';
import Button from '../../components/Button/Button.js';
import LayerBlack from '../../components/LayerBlack/LayerBlack.js';
import './Home.css';

function Home() {
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
                <Button>Register</Button>
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
