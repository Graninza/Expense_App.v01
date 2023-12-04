import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import styled from 'styled-components';


const Login = () => {
  const [users, setUsers] = useState([]);
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();

  useEffect(() => {
    fetchUsers();
  }, []);

  const fetchUsers = async () => {
    try {
      const response = await axios.get('http://localhost:5000/api/get-users');
      setUsers(response.data);
    } catch (error) {
      console.log('Fetch Users Error', error);
    }
  };

  const handleLogin = async (event) => {
    event.preventDefault();
    try {
      const response = await axios.post('http://localhost:5000/api/login', { username, password });
      const token = response.data.token;
      alert('Login successful');
      setUsername('');
      setPassword('');
      fetchUsers();
      navigate('/account');
      window.location.reload();
      localStorage.setItem('token', token);
    } catch (error) {
      console.log('Login Error', error);
    }
  };

  return (
    <AppStyled>
      <section>
        <form onSubmit={handleLogin}>
          <label>Username</label>
          <br />
          <input
            type='text'
            placeholder='Username'
            value={username}
            onChange={(e) => setUsername(e.target.value)}
          />
          <br />
          <br />
          <label>Password</label>
          <br />
          <input
            type='password'
            placeholder='Password'
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
          <br />
          <br />
          <button type='submit'>Login</button>
        </form>
      </section>
      <section right>
        <h2 className='text-3xl text-white'>Login</h2>
      </section>
    </AppStyled>
  );
};

const AppStyled = styled.div`
  display: flex;
  width: 100%;
  height: 100vh;

  section {
    width: 50%;
    height: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    background-color: ${(props) => (props.right ? 'rgba(57, 66, 90, 0.56)' : 'rgba(57, 66, 90, 0.56)')};
  }

  form {
    text-align: center;
    border: 1px solid rgba(197, 162, 20, 0.75);
    border-radius: 8px;
    width: 600px;
    height: 400px;
    padding: 1.5rem;
  }

  input {
    width: 400px;
    height: 40px;
    color: rgba(197, 162, 20, 0.75);
    border-radius: 20px;
    background-color: #363636;
    padding: 8px;
    margin-bottom: 1rem;
  }

  button {
    width: 200px;
    height: 50px;
    border: 1px solid white;
    &:hover {
      background-color: rgba(225, 121, 13, 0.8);
    }
  }
`;

export default Login;
