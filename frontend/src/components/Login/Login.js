import React, { useState } from 'react';
import { useHistory } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import './Login.css';
import { fetchService } from '../../services';
import { storeUserDataAction } from '../../actions/userActions';

const Login = () => {
  const [userName, setUserName] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState(null);
  const history = useHistory();
  const dispatch = useDispatch();


  const handleSubmit = async submitEvent => {
    submitEvent.preventDefault();
    try {
      const responseBody = await fetchService.fetchData('login', 'POST', { userName, password }, null);
      dispatch(storeUserDataAction(responseBody));
      history.push(`/main`);
    } catch (error) {
      console.log(error.message);
      setError(error.message);
    }
  };

  return (
    <div>
      <h1>Login</h1>
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
            LOG IN
          </button>
        </form>
    </div>
  );
};

export default Login;
