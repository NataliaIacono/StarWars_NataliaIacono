import React, { useContext } from 'react';
import { Context } from '../store/appContext';
import { Link } from 'react-router-dom';

import '../../styles/navbar.css';

export const Navbar = () => {
    const { store, actions } = useContext(Context);
    return (
        <nav className="navbar navbar-light bg-dark mb-3">
            <Link to="/">
                <img className="logo" src="https://brandemia.org/contenido/subidas/2021/05/portada-starwars-imagenes-brandemia-blog-1000x670.jpg" alt="logo"></img>
            </Link>
            <div className="favoritos ml-auto">
                <div className="dropdown">
                    <button className="btn btn-secondary dropdown-toggle" type="button" data-bs-toggle="dropdown" aria-expanded="false">
                        Favoritos <i className="fa fa-heart"></i>
                    </button>

                    <ul className="dropdown-menu">
                        {store.favoritos.length == 0 ? (
                            <li>No tienes favoritos</li>
                        ) : (
                            store.favoritos.map((favorito, index) => {
                                return <li key={index}>{favorito}</li>;
                            })
                        )}
                    </ul>
                </div>
            </div>
        </nav>
    );
};
