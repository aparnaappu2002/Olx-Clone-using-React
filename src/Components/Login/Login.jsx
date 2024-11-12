import React from 'react';
import {FirebaseContext} from '../../Store/Context';
import Logo from '../../olx-logo.png';
import './Login.css';
import { useState,useContext } from 'react';
import { getAuth,signInWithEmailAndPassword } from 'firebase/auth';
import { useNavigate } from 'react-router-dom';

function Login() {
  const [email,setEmail] = useState('')
  const [password,setPassword] =useState('')
  const [error,setError] = useState("")
  const {firebase} = useContext(FirebaseContext)
  const navigate = useNavigate()

  const auth = getAuth(firebase)
  
  const handleLogin = async (e) => {
    e.preventDefault();


    setError('');

    // Basic validation
    if (!email) {
      setError('Email is required');
      return;
    } else if (!/\S+@\S+\.\S+/.test(email)) {
      setError('Please enter a valid email');
      return;
    }

    if (!password) {
      setError('Password is required');
      return;
    } else if (password.length < 6) {
      setError('Password must be at least 6 characters long');
      return;
    }

    try {
      await signInWithEmailAndPassword(auth, email, password);
      alert("Logged In");
      navigate('/')
    } catch (error) {
      alert(error.message);
    }
  };

  return (
    <div>
      <div className="loginParentDiv">
        <img width="200px" height="200px" src={Logo}></img>
        <form onSubmit={handleLogin}>
          <label htmlFor="fname">Email</label>
          <br />
          <input
            className="input"
            type="email"
            id="fname"
            name="email"
            value={email}
            onChange={(e)=>setEmail(e.target.value)}
          />
          <br />
          <label htmlFor="lname">Password</label>
          <br />
          <input
            className="input"
            type="password"
            id="lname"
            name="password"
            value={password}
            onChange={(e)=>setPassword(e.target.value)}
          />
          <br />
          
          {error && <p style={{ color: 'red' }}>{error}</p>}
          
          <br />
          <button type='submit'>Login</button>
        </form>
        <a href='/signup'>Signup</a>
      </div>
    </div>
  );
}

export default Login;
