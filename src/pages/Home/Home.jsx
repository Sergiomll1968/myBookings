import { useContext, useEffect } from 'react';
import { UserContext } from '../../contexts/UserContext.jsx';
import { useGetData } from '../../hooks/useGetData.js';

import './Home.css';

function Home() {

  const {user, setUserProfile} = useContext(UserContext);

  const { getData, data, error, loading } = useGetData();

  useEffect(() => {
    setUserProfile({...user, token: data?.token})
  }, [data]);

  function changeUsername (e) {
    setUserProfile({...user, username: e.target.value});
  }

  function changeEmail (e) {
    setUserProfile({...user, mail: e.target.value});
  }

  function changePassword(e) {
    setUserProfile({...user, password: e.target.value});
  }

  async function onClickHandler(e) {
    getData({
      // route: `https://apihairs-mbe1.onrender.com/${e.target.value}`,
      route: `http://localhost:3001/${e.target.value}`,
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
  }

  return (
    <>
      {loading && <h1>Loading</h1>}
      <label htmlFor='username'>Usuario:&nbsp;</label>
      <input name='username' type='text'onChange={(e) => changeUsername(e)} />
      <label htmlFor='email'>Email:&nbsp;</label>
      <input name='email' type='email' onChange={(e) => changeEmail(e)} />
      <label htmlFor='password'>Password:&nbsp;</label>
      <input name='password' type='password' onChange={(e) => changePassword(e)}/>
      &nbsp;&nbsp;
      <input name='register' type='button' value='register' onClick={(e) => onClickHandler(e)} />
      <input name='login' type='button' value='login' onClick={(e) => onClickHandler(e)} />
      {error && <h2> error -- {JSON.stringify(error.statusText)} </h2>}
      {data && <h2> data --- {JSON.stringify(data)} </h2>}
    </>
  );
}

export default Home;
