import React, { useContext } from 'react';
import { Context } from '../store/appContext';
import { Link } from 'react-router-dom';

import '../../styles/navbar.css';
import Personajes from './personajes';

export const Navbar = () => {
    const { store, actions } = useContext(Context);

    return (
        <nav className="navbar navbar-light bg-dark mb-3">
            <Link to="/">
                <img className="logo" src="https://brandemia.org/contenido/subidas/2021/05/portada-starwars-imagenes-brandemia-blog-1000x670.jpg" alt="logo"></img>
            </Link>
            <div className="favoritos ml-auto">
                <div className="dropdown">
                    <button className="btn btn-secondary dropdown-toggle me-3" type="button" data-bs-toggle="dropdown" aria-expanded="false">
                        Favoritos <i className="fa fa-heart"></i> {store.favoritos ? store.favoritos.length : 0}
                    </button>

                    <ul className="dropdown-menu">
                        {store.favoritos.length == 0 ? (
                            <li>No tienes favoritos</li>
                        ) : (
                            store.favoritos.map((favorito, index) => {
                                return (
                                    <li key={index}>
                                        {favorito.type === 'personajes' ? <Link to={`/detalle/${favorito.uid}`}>{favorito.name}</Link> : favorito.type === 'planetas' ? <Link to={`/detallePlaneta/${favorito.uid}`}>{favorito.name}</Link> : favorito.type === 'vehiculos' ? <Link to={`/detalleVehiculo/${favorito.uid}`}>{favorito.name}</Link> : <p>El tipo es incorrecto</p>}

                                        <i
                                            className="fa-solid fa-trash"
                                            onClick={(e) => {
                                                actions.eliminarFavorito(favorito);
                                                e.stopPropagation();
                                            }}></i>
                                    </li>
                                );
                            })
                        )}
                    </ul>
                </div>
            </div>
        </nav>
    );
};
