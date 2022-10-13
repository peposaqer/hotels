import React, {useState} from "react";
import "./Navbar.css"
import Logo from "../img/231079790_2311509662314955_1834368032630282179_n.jpg"
import { Link } from "react-router-dom";

function Home() {
  return (
    <>
        <nav className="navbar navbar-expand-lg ">
            <div className="container-fluid">
                <div className="nav-top w-25">
                    <div className="icon-nav">
                        <Link className="navbar-brand" to="/">
                            <img src={Logo} />
                        </Link>
                        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                            <i className="fa-solid fa-bars-staggered"></i>
                        </button>
                    </div>
                </div>
                <div className="search-div">
                    <div className="search w-50">
                        <input type="text" placeholder="Search"/>
                    </div>
                    <div className="collapse navbar-collapse" id="navbarSupportedContent">
                        <ul className="navbar-nav mb-lg-0">
                            <li className="nav-item">
                                <Link to="/" className="nav-link" >Home</Link>
                            </li>
                            <li className="nav-item">
                                <Link to="/About" className="nav-link " >About</Link>
                            </li>
                            <li className="nav-item">
                                <Link to="/Rooms" className="nav-link " >Rooms</Link>
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link nav-icon dropdown-toggle" role="button" id="dropdownMenuLink" data-bs-toggle="dropdown" aria-expanded="false">
                                    <i className="fa fa-user"></i>
                                </Link>
                                <ul class="dropdown-menu" aria-labelledby="dropdownMenuLink">
                                    <li><Link class="dropdown-item" to="/Register">Register</Link></li>
                                    <li><Link class="dropdown-item" to="/Register">Log In</Link></li>
                                </ul>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
        </nav>
        <div className="margin"></div>
    </>
  )
}

export default Home;