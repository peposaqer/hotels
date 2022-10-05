import './App.css';
import React from "react";
import { BrowserRouter , Route, Routes} from "react-router-dom";
import About from "./Component/pages/About"
import Home from "./Component/pages/Home"
import Navbar from "./Component/Navbar/Navbar"
import BookRoom from "./Component/Rooms/bookRoom"

function App() {
  return (
    <BrowserRouter >
      <Navbar />
      <Routes>
        <Route exact path="/" element={<Home />}></Route>
        <Route exact path="/About" element={<About />}></Route>
        <Route path="/BookRoom/:id" exact element={<BookRoom />}/>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
