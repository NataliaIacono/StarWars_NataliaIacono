import React, { useContext } from 'react';
import { Context } from '../store/appContext';
import { Link } from 'react-router-dom';

const CardPlaneta = ({ name, population, terrain, uid }) => {
    const { store, actions } = useContext(Context);
    return (
        <div>
            <div className="card" style={{ width: '18rem' }}>
                <img src={`https://starwars-visualguide.com/assets/img/planets/${uid}.jpg`} className="card-img-top" alt="..." />
                <div className="card-body">
                    <h5 className="card-title">{name}</h5>
                    <p>{population}</p>
                    <p>{terrain}</p>
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

export default CardPlaneta;
