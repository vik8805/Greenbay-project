import React, { useState } from 'react';
import { useHistory } from 'react-router-dom';
import './Register.css';
import { fetchService } from '../../services'

const Register = () => {
  const [userName, setUserName] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState(null);
  const history = useHistory();

  const handleSubmit = async submitEvent => {
    submitEvent.preventDefault();
    try {
      const responseBody = await fetchService.fetchData('register', 'POST', { userName, password }, null);
      console.log(responseBody);
      history.push(`/login`);
    } catch (error) {
      console.log(error.message);
      setError(error.message);
    }
  };

  return (
    <div>
      <h1>Register</h1>
      <form onSubmit={handleSubmit}>
          <input
            type="text"
            placeholder="Username"
            minLength="3"
            value={userName}
            onChange={changeEvent => {
              setUserName(changeEvent.target.value);
              setError(null);
            }}
          />
          <input
            type="password"
            placeholder="Password"
            minLength="6"
            value={password}
            onChange={changeEvent => {
              setPassword(changeEvent.target.value);
              setError(null);
            }}
          />
          {error && (<div>{error}</div>)}
          <button type="submit">
            SIGN UP
          </button>
        </form>
    </div>
  );
};

export default Register;
