import React, { useContext } from 'react';
import CardVehiculo from './cardVehiculos';
import { Context } from '../store/appContext';

import '../../styles/vehiculos.css';

const Vehiculos = () => {
    const { store, actions } = useContext(Context);
    console.log(store.vehiculosDetalles);

    return (
        <div className="scroll-container">
            <div className="row vehiculos">
                <h1>Vehículos</h1>
                <div className="d-flex me-3">
                    {store.vehiculosDetalles.map((vehiculo) => {
                        console.log(vehiculo);

                        return <CardVehiculo key={vehiculo.uid} name={vehiculo.properties.name} uid={vehiculo.uid} model={vehiculo.properties.model} length={vehiculo.properties.length} />;
                    })}
                </div>
            </div>
        </div>
    );
};

export default Vehiculos;
