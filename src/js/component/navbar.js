import React from 'react';
import { Link } from 'react-router-dom';

import '../../styles/navbar.css';

export const Navbar = () => {
    return (
        <nav className="navbar navbar-light bg-dark mb-3">
            <Link to="/">
                <img className="logo" src="https://brandemia.org/contenido/subidas/2021/05/portada-starwars-imagenes-brandemia-blog-1000x670.jpg" alt="logo"></img>
            </Link>
            <div className="favoritos ml-auto">
                <Link to="/demo">
                    <div className="dropdown">
                        <button className="btn btn-secondary dropdown-toggle" type="button" data-bs-toggle="dropdown" aria-expanded="false">
                            Favoritos <i className="fa fa-heart"></i>
                        </button>

                        <ul className="dropdown-menu">
                            <li></li>
                        </ul>
                    </div>
                </Link>
            </div>
        </nav>
    );
};
