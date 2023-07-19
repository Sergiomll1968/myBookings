import { useState } from 'react';

import './Home.css';

function Home() {

  const [error, setError] = useState();
  const [registering, setRegistering] = useState();
  const [token, setToken] = useState();
  const [user, setUser] = useState();

  function changeUsername (e) {
    setUser({...user, username: e.target.value});
  }

  function changeEmail (e) {
    setUser({...user, mail: e.target.value});
  }

  function changePassword(e) {
    setUser({...user, password: e.target.value});
  }

  async function login() {
    setRegistering(true);

    try {
      const response = await fetch(`https://apihairs-mbe1.onrender.com/register`, {
      // const response = await fetch(`http://localhost:3001/register`, {
        method: 'POST',
        mode: 'cors',
        headers: {
          'Content-Type': 'application/json',
          'Access-Control-Allow-Origin': '*',
          'Access-Control-Allow-Headers':'*',
          'Access-Control-Allow-Credentials': true,
        },
        body: JSON.stringify({'username': user.username, 'mail': user.mail, 'password': user.password}),
      });

      const userToken = await response.json();

      if(userToken.ok === false) {
        setToken(userToken.statusText)
      } else {
        setToken(userToken);
      }
      
    } catch (e) {
      setError(e);
    } finally {
      setRegistering(false);
    }
  }

  return (
    <>
      {registering && <h1>Registering</h1>}
      <label htmlFor='username'>Usuario:&nbsp;</label>
      <input name='username' type='text'onChange={(e) => changeUsername(e)} />
      <label htmlFor='email'>Email:&nbsp;</label>
      <input name='email' type='email' onChange={(e) => changeEmail(e)} />
      <label htmlFor='password'>Password:&nbsp;</label>
      <input name='password' type='password' onChange={(e) => changePassword(e)}/>
      &nbsp;&nbsp;
      <input name='login' type='button' value='Login' onClick={login} />
      {error && <h2> {JSON.stringify(error.statusText)} </h2>}
      {token && <h2> {JSON.stringify(token)} </h2>}
    </>
  );
}

export default Home;
