import Footer from "./components/Footer/Footer"
import Header from "./components/Header/Header";
import Spinner from "./components/Spinner/Spinner";
import './App.css';
import { Routes,Route } from 'react-router-dom';

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
library.add(fab);


function App() {
  const [auth,setAuth] = useState({});

  const registerSubmitHandler = async(values) =>{
  //   const res = await authService.register(values.email,values.password);
  //   setAuth(res)
  //  localStorage.setItem('accessToken',res.accessToken);
  //   navigate(Path.Home)
  console.log(values);
  }



  return (
    <div className="root">
      <Header className="header" />

      <main className="main">
        <Routes>
          <Route path="/" element={<Home/>}/>
          <Route path="/catalog" element={<Catalog/>}/>
          <Route path="/profile" element={<Profile/>}/>
          <Route path="/login" element={<Login/>}/>
          <Route path="/register" element={<Register registerSubmitHandler={registerSubmitHandler}/>}/>
          <Route path="/create" element={<Create/>}/>
          <Route path="/catalog/details/:gameId" element={<Details/>}/>
          
        </Routes>
      </main>
      
      <Footer className="footer"/>
    </div>
  );
}

export default App
