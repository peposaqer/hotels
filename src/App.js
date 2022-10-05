import './App.css';
import React from "react";
import { BrowserRouter , Route, Routes} from "react-router-dom";
import About from "./Component/pages/About"
import Home from "./Component/pages/Home"
import Navbar from "./Component/Navbar/Navbar"
import BookRoom from "./Component/Rooms/bookRoom"
import Rooms from "./Component/pages/rooms"
import Register from "./Component/pages/Register"
import Login from './Component/pages/login';
import Footer from './Component/Footer/Footer';

function App() {
  return (
    <BrowserRouter >
      <Navbar />
      <Routes>
        <Route exact path="/" element={<Home />}></Route>
        <Route exact path="/About" element={<About />}></Route>
        <Route path="/Rooms" exact element={<Rooms />}/>
        <Route path="/Register" exact element={<Register />}/>
        <Route path="/Login" exact element={<Login />}/>
        <Route path="/BookRoom/:id" exact element={<BookRoom />}/>
      </Routes>
      <Footer />
    </BrowserRouter>
  );
}

export default App;
