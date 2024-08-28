import React, { useContext } from 'react';
import { Context } from '../store/appContext';

import '../../styles/cardDetallada.css';

const CardDetalladaPlaneta = ({ name, rotation_period, orbital_period, gravity, population, climate, terrain, surface_water, created, uid, description, diameter }) => {
    const { store, actions } = useContext(Context);

    return (
        <div className="contenedor-general-detallada">
            <div>
                <img className="imagen-detalle" src={`https://starwars-visualguide.com/assets/img/planets/${uid}.jpg`} alt="planeta" />
            </div>
            <div>
                <h1>{name}</h1>
                <p>{description}</p>
                -------------------
                <div className="caja-caracteristicas-detalladas">
                    <p className="caracteristicas-detalladas">
                        diameter: {diameter} - rotation_period: {rotation_period} - orbital_period: {orbital_period} - gravity: {gravity} - population: {population} - climate: {climate} - terrain: {terrain} - surface_water: {surface_water} - created: {created}
                    </p>
                </div>
            </div>
        </div>
    );
};

export default CardDetalladaPlaneta;
