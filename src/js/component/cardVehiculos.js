import React from 'react';
import { Link } from 'react-router-dom';

const CardVehiculo = ({ name, model, length, uid }) => {
    return (
        <div>
            <div className="card" style={{ width: '18rem' }}>
                <img src={`https://starwars-visualguide.com/assets/img/vehicles/${uid}.jpg`} className="card-img-top" alt="..." />
                <div className="card-body">
                    <h5 className="card-title">{name}</h5>
                    <p>{model}</p>
                    <p>{length}</p>

                    <Link to="/detalles:uid">
                        <button className="btn btn-dark">+ info</button>
                    </Link>
                    <button
                        className="btn btn-Emphasis"
                        onClick={() => {
                            actions.favoritos(name);
                        }}>
                        ♥
                    </button>
                </div>
            </div>
        </div>
    );
};

export default CardVehiculo;
