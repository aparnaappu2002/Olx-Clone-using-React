import React, { useContext, useEffect } from 'react';
import './App.css';
import {BrowserRouter as Router,Routes,Route} from 'react-router-dom'


/**
 * ?  =====Import Components=====
 */
import Home from './Pages/Home';
import SignupPage from './Pages/Signup';
import Login from './Pages/Login'
import {AuthContext, FirebaseContext} from './Store/Context';
import { getAuth,onAuthStateChanged } from 'firebase/auth';
import { firebase } from './Firebase/config';
import Create from './Pages/Create'
import ViewPost from './Pages/ViewPost';
import Post from './Store/PostContext';

function App() {

  const {user,setUser} =useContext(AuthContext)
  const {auth} = useContext(FirebaseContext)
  useEffect(()=>
  {
    const authInstance = getAuth(firebase)
    const unsubscribe=onAuthStateChanged(authInstance,(user)=>
    {
      setUser(user)
    })
    return ()=>unsubscribe()
  },[setUser,auth])
  return (
    <div>

      <Post>

      <Router>
    <Routes>
          <Route path='/' element={<Home/>}/>
          <Route path='/signup' element={<SignupPage/>}/>
          <Route path='/login' element={<Login/>}/>
          <Route path='/create' element={<Create/>}/>
          <Route path='/view' element={<ViewPost/>}/>
        </Routes>

    </Router>


      </Post>

    
        
    
     
    </div>
  );
}

export default App;
