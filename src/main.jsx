import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import {FirebaseContext} from './Store/Context.jsx'
import Context from './Store/Context.jsx'
import {firebase} from './Firebase/config'
import 'bootstrap/dist/css/bootstrap.min.css';

createRoot(document.getElementById('root')).render(
  <StrictMode>
    
    <FirebaseContext.Provider value={{firebase}}>

    <Context>
    <App />
    </Context>

    </FirebaseContext.Provider>
      
      
   
   
   
  </StrictMode>
)
