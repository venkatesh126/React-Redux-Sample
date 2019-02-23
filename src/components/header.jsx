import React, { Component } from 'react';
import { NavLink } from "react-router-dom";

class Header extends Component {
    state = {}
    render() {
        return (
            <React.Fragment>
                <nav className="navbar navbar-expand-lg navbar-dark bg-dark static-top">
                    <div className="container">
                        <a className="navbar-brand" href="#" ><img src='' alt='Logo' /></a>
                        <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarResponsive" aria-controls="navbarResponsive" aria-expanded="false" aria-label="Toggle navigation">
                            <span className="navbar-toggler-icon"></span>
                        </button>
                        <div className="collapse navbar-collapse" id="navbarResponsive">
                            <ul className="navbar-nav ml-auto">
                                <li className="nav-item active">
                                    <a className="nav-link" href="#"><NavLink to="/">Home</NavLink><span className="sr-only">(current)</span>
                                    </a>
                                </li>
                                <li className="nav-item">
                                    <a className="nav-link" href="#"><NavLink to="/posts">Posts</NavLink></a>
                                </li>

                            </ul>
                        </div>
                    </div>
                </nav>

            </React.Fragment>
        );
    }
}

export default Header;