import React, { useContext } from 'react';
import CardVehiculo from './cardVehiculos';
import { Context } from '../store/appContext';

const Vehiculos = () => {
    const { store, actions } = useContext(Context);
    return (
        <div>
            //tendre un estado 'vehiculos que hare un map y taere una carga que los muestre
            <h1>los vehiculos</h1>
            <div className="container d-flex">
                {store.vehiculosDetalles.map((vehiculo) => {
                    return <CardVehiculo key={vehiculo.uid} name={vehiculo.name} model={vehiculo.model} length={vehiculo.length} />;
                })}
            </div>
        </div>
    );
};

export default Vehiculos;
