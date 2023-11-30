import { AuthProvider } from "./context/authContext"
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
import Logout from "./components/Logout/Logout";
import Edit from "./components/Edit/Edit";

library.add(fab);


function App() {
  


  return (
    <AuthProvider >
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
          <Route path="/catalog/details/:productId" element={<Details/>}/>
          <Route path="/catalog/details/:productId/edit" element={<Edit/>}/>
          <Route path="/catalog/profile/:userId" element={<Profile/>}/>
          
        </Routes>
      </main>

      <Footer className="footer"/>
    </div>
    </AuthProvider>
  );
}

export default App
