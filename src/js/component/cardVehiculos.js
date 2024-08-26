import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { Context } from '../store/appContext';

const CardVehiculo = ({ name, model, length, uid }) => {
    const { store, actions } = useContext(Context);
    return (
        <div>
            <div className="card">
                <img src={`https://starwars-visualguide.com/assets/img/vehicles/${uid}.jpg`} className="card-img-top" alt="..." />
                <div className="card-body">
                    <h5 className="card-title">{name}</h5>
                    <p>{model}</p>
                    <p>{length}</p>

                    <Link to={`/detalleVehiculo/${uid}`}>
                        <button className="btn btn-dark">+ info</button>
                    </Link>
                    <button
                        className="btn btn-Emphasis"
                        onClick={() => {
                            actions.favoritos(name, uid, 'vehiculos');
                        }}>
                        ♥
                    </button>
                </div>
            </div>
        </div>
    );
};

export default CardVehiculo;
