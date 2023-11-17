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

library.add(fab);


function App() {

  return (

    <div className="root">
      <Header className="header" />

      <main className="main">
        <Routes>
          <Route path="/" element={<Home/>}/>
          <Route path="/catalog" element={<Catalog/>}/>
          <Route path="/profile" element={<Profile/>}/>
          <Route path="/login" element={<Login/>}/>
          <Route path="/register" element={<Register/>}/>
          <Route path="/create" element={<Create/>}/>
        </Routes>
      </main>
      
      <Footer className="footer"/>
    </div>
  );
}

export default App
