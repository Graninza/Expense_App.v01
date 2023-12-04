import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import styled from 'styled-components';

function SignUp() {
  const [email, setEmail] = useState('');
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();

  const handleSubmit = (event) => {
    event.preventDefault();
    axios
      .post('http://localhost:5000/api/register', { email, username, password })
      .then(() => {
        alert('Registration Successful');
        setEmail('');
        setUsername('');
        setPassword('');
        navigate('/login');
      })
      .catch((error) => {
        console.log('Unable to register user');
      });
  };

  return (
    <AppStyled>
      <div>
        <form onSubmit={handleSubmit}>
          {/* Email Input */}
          <label>Email</label>
          <br />
          <input
            type="text"
            placeholder="Email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          <br />
          <br />
          {/* Username Input */}
          <label>Username</label>
          <br />
          <input
            type="text"
            placeholder="Username"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
          />
          <br />
          <br />
          {/* Password Input */}
          <label>Password</label>
          <br />
          <input
            type="password"
            placeholder="Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
          <br />
          <br />
          {/* Button */}
          <button type="submit">Sign Up</button>
        </form>
      </div>
      <div>
        <h2 className="text-3xl">Sign Up</h2>
      </div>
    </AppStyled>
  );
}

const AppStyled = styled.div`
  height: 100vh;
  background-image: url(${props => props.bg});
  position: relative;
  display: flex;

  div {
    flex: 1;
    display: flex;
    justify-content: center;
    align-items: center;
    background-color: rgba(57, 66, 90, 0.56);
  }

  form {
    text-align: center;
    border: 1px solid rgba(197, 162, 20, 0.75);
    border-radius: 8px;
    color: rgba(197, 162, 20, 0.75);
    width: 600px;
    height: 400px;
    padding: 20px;
  }

  input {
    width: 400px;
    height: 40px;
    border-radius: 8px;
    background-color: #3a3a3a;
    padding: 8px;
    margin-bottom: 16px;
    color: rgba(197, 162, 20, 0.75);
  }

  button {
    width: 200px;
    height: 50px;
    border: 1px solid white;
    &:hover {
      background-color: rgba(225, 121, 13, 0.8);
    }
  }

  main {
    flex: 1;
    background: rgba(57, 66, 90, 0.56);
    border: 3px solid rgba(197, 162, 20, 0.75);
    backdrop-filter: blur(4.5px);
    border-radius: 32px;
    overflow-x: hidden;
    &::-webkit-scrollbar {
      width: 0;
    }
  }
`;


export default SignUp;
