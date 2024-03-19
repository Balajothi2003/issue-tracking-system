import './App.css';
import {Route,Routes } from 'react-router-dom';
import Home from './Component/Home';
import Admin from './Component/Admin';
import User from './Component/User';
import Navbar from './Component/Navbar';
import { Auth } from './Component/Auth';
import  Login  from './Component/Login';
import Signup from './Component/Signup';
import About from './Component/About';
import Service from './Component/Service';
import Contact from './Component/Contact';


function App() {
  return (
    <div className="App">
    <Auth>
      <Navbar/>
    
      <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/Admin" element={<Admin/>}/>
        <Route path="/User" element={<User/>}/>
        <Route path='/Auth' element={<Auth/>}/>
        <Route path='/login' element={<Login/>}/>
        <Route path='/signup' element={<Signup/>}/>
        <Route path='/about' element={<About/>}/>
        <Route path='/service' element={<Service/>}/>
        <Route path='/contact' element={<Contact/>}/>
      </Routes>
    </Auth>
    </div>
  );
}

export default App;

