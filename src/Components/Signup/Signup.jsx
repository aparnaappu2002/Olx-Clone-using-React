import React, { useState } from 'react';
import Logo from '../../olx-logo.png';
import './Signup.css';
import { collection, addDoc } from 'firebase/firestore';
import { getAuth, createUserWithEmailAndPassword, updateProfile } from 'firebase/auth';
import { auth, db } from '../../Firebase/config'; 
import { useNavigate } from 'react-router-dom';

export default function Signup() {
  const navigate = useNavigate();
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [password, setPassword] = useState("");
  const [errors, setErrors] = useState({});

  const handleSubmit = async (e) => {
    e.preventDefault();
    
    // Reset errors before each submission attempt
    setErrors({});

    // Validation
    const validationErrors = {};

    if (!username) {
      validationErrors.username = "Username is required.";
    }
    if (!email) {
      validationErrors.email = "Email is required.";
    } else if (!/\S+@\S+\.\S+/.test(email)) {
      validationErrors.email = "Please enter a valid email address.";
    }
    if (!phone) {
      validationErrors.phone = "Phone number is required.";
    } else if (!/^\d{10}$/.test(phone)) {  // Check if phone number is numeric and 10 digits
      validationErrors.phone = "Please enter a valid 10-digit phone number.";
    }
    if (!password) {
      validationErrors.password = "Password is required.";
    } else if (password.length < 6) {
      validationErrors.password = "Password must be at least 6 characters.";
    }

    // If there are validation errors, show them and stop form submission
    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors);
      return;
    }

    // If validation passes, create the user
    try {
      const result = await createUserWithEmailAndPassword(auth, email, password);
      await updateProfile(result.user, { displayName: username });
      await addDoc(collection(db, 'users'), {
        id: result.user.uid,
        username: username,
        phone: phone,
      });

      navigate('/login'); // Redirect to login page after successful signup
      console.log("User created successfully:", result.user);
    } catch (error) {
      console.error("Error creating user:", error.message);
    }
  };

  return (
    <div>
      <div className="signupParentDiv">
        <img width="200px" height="200px" src={Logo} alt="Logo" />
        <form onSubmit={handleSubmit}>
          <label htmlFor="username">Username</label>
          <br />
          <input
            className="input"
            type="text"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            id="username"
            name="name"
          />
          {errors.username && <div className="error" style={{color:"red"}}>{errors.username}</div>}
          <br />
          
          <label htmlFor="email">Email</label>
          <br />
          <input
            className="input"
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            id="email"
            name="email"
          />
          {errors.email && <div className="error" style={{color:"red"}}>{errors.email}</div>}
          <br />
          
          <label htmlFor="phone">Phone</label>
          <br />
          <input
            className="input"
            type="number"
            value={phone}
            onChange={(e) => setPhone(e.target.value)}
            id="phone"
            name="phone"
          />
          {errors.phone && <div className="error" style={{color:"red"}}>{errors.phone}</div>}
          <br />
          
          <label htmlFor="password">Password</label>
          <br />
          <input
            className="input"
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            id="password"
            name="password"
          />
          <br />
          {errors.password && <div className="error" style={{color:"red"}}>{errors.password}</div>}
          <br />
          
          <button type="submit">Signup</button>
        </form>
        <br />
        <a href="/login">Already have an account? Login</a>
      </div>
    </div>
  );
}
