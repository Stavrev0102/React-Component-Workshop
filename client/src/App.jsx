import Footer from "./components/Footer/Footer"
import Header from "./components/Header/Header";
import Spinner from "./components/Spinner/Spinner";
import './App.css';
import { Routes,Route, useNavigate } from 'react-router-dom';

import { library } from '@fortawesome/fontawesome-svg-core';
import { fab } from '@fortawesome/free-brands-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import Home from "./components/Home/Home";
import Catalog from "./components/Catalog/Catalog";
import Profile from "./components/Profile/Profile";
import Login from "./components/Login/Login";
import Register from "./components/Register/Register";
import Create from "./components/Create/Create";
import Details from "./components/Details/Details";
import { useState } from "react";
import AuthContext from "./context/authContext";
import * as authService from './services/authService'
import Logout from "./components/Logout/Logout";
library.add(fab);


function App() {
  const [auth,setAuth] = useState({});
  const  navigate  = useNavigate()
  const registerSubmitHandler = async(values) =>{
    const res = await authService.register(values.email,values.password);
    setAuth(res)
    console.log(res)
  //  localStorage.setItem('accessToken',res.accessToken);
    navigate('/')
  // console.log(res);
  }

  const loginSubmitHandler = async(values) => {
    const res = await authService.login(values.email,values.password);
    setAuth(res)
    navigate('/')
    console.log(res);
  }

  const logoutHandler = () => {
    setAuth({});
    console.log('done')
    navigate('/')
  }

  const values = {
    loginSubmitHandler,
    registerSubmitHandler,
    logoutHandler,
    email:auth.email,
    isAuthenticated: !!auth.email
  }


  return (
    <AuthContext.Provider value={ values }>
    <div className="root">
      <Header className="header" />

      <main className="main">
        <Routes>
          <Route path="/" element={<Home/>}/>
          <Route path="/catalog" element={<Catalog/>}/>
          <Route path="/profile" element={<Profile/>}/>
          <Route path="/login" element={<Login/>}/>
          <Route path="/logout" element={<Logout/>}/>
          <Route path="/register" element={<Register/>}/>
          <Route path="/create" element={<Create/>}/>
          <Route path="/catalog/details/:gameId" element={<Details/>}/>
          
        </Routes>
      </main>

      <Footer className="footer"/>
    </div>
    </AuthContext.Provider>
  );
}

export default App
