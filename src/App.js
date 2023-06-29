import './App.css';
import React from 'react';
import Navbar from  './components/NavBar/navbar';
import Home from './components/Home/homePage';
import AllUsers from './components/AllUsers/allUsers';
import AddUser from './components/AddUser/addUser';
import EditUser from './components/EditUser/editUsers';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />}></Route>
        <Route path="/all" element={<AllUsers />}></Route>
        <Route path="/add" element={<AddUser />}></Route>
        <Route path="/edit/:id" element={<EditUser />}></Route>
      </Routes>
    </Router>
  );
}

export default App;
