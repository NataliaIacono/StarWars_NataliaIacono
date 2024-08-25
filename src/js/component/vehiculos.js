import React, { useContext } from 'react';
import CardVehiculo from './cardVehiculos';
import { Context } from '../store/appContext';

import '../../styles/vehiculos.css';

const Vehiculos = () => {
    const { store, actions } = useContext(Context);
    console.log(store.vehiculosDetalles);

    return (
        <div className="scroll-container">
            <div>
                <h1>Vehiculos</h1>
                <div className="container d-flex">
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
