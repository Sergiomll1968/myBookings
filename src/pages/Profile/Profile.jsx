import { Link } from 'react-router-dom';

function Profile() {
  return (
    <div>
      <h1>Profile</h1>
      <Link to="/booking">Citas</Link>
      <br></br>
      <Link to="/awards">Premios</Link>
    </div>
  );
}

export default Profile;
