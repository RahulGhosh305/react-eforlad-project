import React, { Component } from 'react';


// Assets
import Logo from '../assets/images/logo.png';

class Navbar extends Component {
    render() {
        return (
            <div>
                <div className="container">
                    <div className="row">
                        <div className="col-xl-3 col-lg-3 col-md-3 col-sm-3 col logo_section">
                            <div className="full">
                                <div className="center-desk">
                                    <div className="logo"> 
                                        <a href="index.html">
                                            <img src={Logo} alt="#"/> 
                                        </a>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className="col-xl-9 col-lg-9 col-md-9 col-sm-9">
                            <div className="menu-area">
                                <div className="limit-box">
                                    <nav className="main-menu">
                                        <ul className="menu-area-main">
                                            <li className="active"> <a href="#">Home</a> </li>
                                            <li> <a href="#about">About</a> </li>
                                            <li><a href="#travel">Travel</a></li>
                                            <li><a href="#blog">Blog</a></li>
                                            <li><a href="#contact">Contact Us</a></li>
                                        </ul>
                                    </nav>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default Navbar;