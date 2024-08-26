import React, { useContext } from 'react';
import { Context } from '../store/appContext';
import { Link } from 'react-router-dom';

import '../../styles/card.css';

const Card = ({ name, gender, hair_color, eye_color, uid }) => {
    const { store, actions } = useContext(Context);
    return (
        <div>
            <div className="card">
                <img src={`https://starwars-visualguide.com/assets/img/characters/${uid}.jpg`} className="card-img-top" alt="..." />
                <div className="card-body">
                    <h5 className="card-title">{name}</h5>
                    <p>Gender: {gender}</p>
                    <p>Cabello: {hair_color}</p>
                    <p>Ojos: {eye_color}</p>
                    <Link to={`/detalle/${uid}`}>
                        <button className="btn btn-dark">+ info</button>
                    </Link>
                    <button
                        className="btn btn-Emphasis"
                        onClick={() => {
                            actions.favoritos(name, uid, 'personajes');
                        }}>
                        ♥
                    </button>
                </div>
            </div>
        </div>
    );
};

export default Card;
