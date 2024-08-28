import React, { useContext } from 'react';
import { Context } from '../store/appContext';

import '../../styles/cardDetallada.css';

const CardDetalladaVehiculo = ({ name, uid, description, vehicle_class, model, manufacturer, cost_in_credits, length, crew, passengers, cargo_capacity }) => {
    const { store, actions } = useContext(Context);

    return (
        <div className="contenedor-general-detallada">
            <div>
                <img className="imagen-detalle" src={`https://starwars-visualguide.com/assets/img/vehicles/${uid}.jpg`} alt="vehiculo" />
            </div>
            <div>
                <h1>{name}</h1>
                <p>{description}</p>
                -------------------
                <div className="caja-caracteristicas-detalladas">
                    <p className="caracteristicas-detalladas">
                        vehicle_class: {vehicle_class} - model: {model} - manufacturer: {manufacturer} - cost_in_credits: {cost_in_credits} - length: {length} - crew: {crew} - passengers: {passengers} - cargo_capacity: {cargo_capacity}
                    </p>
                </div>
            </div>
        </div>
    );
};

export default CardDetalladaVehiculo;
