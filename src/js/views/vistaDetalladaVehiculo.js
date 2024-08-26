import React, { useContext } from 'react';
import { useParams } from 'react-router-dom';
import { Context } from '../store/appContext';
import CardDetalladaVehiculo from '../component/cardDetalladaVehiculo';

const VistaDetalladaVehiculo = () => {
    const { store, actions } = useContext(Context);
    const { uid } = useParams();

    const vehiculo = store.vehiculosDetalles.find((vehiculo) => vehiculo.uid === uid);
    console.log(uid);

    return (
        <div>
            {vehiculo ? (
                <CardDetalladaVehiculo
                    key={vehiculo.uid}
                    uid={vehiculo.uid}
                    description={vehiculo.description}
                    name={vehiculo.properties.name}
                    vehicle_class={vehiculo.properties.vehicle_class}
                    model={vehiculo.properties.model}
                    manufacturer={vehiculo.properties.manufacturer}
                    cost_in_credits={vehiculo.properties.cost_in_credits}
                    length={vehiculo.properties.length}
                    crew={vehiculo.properties.crew}
                    passengers={vehiculo.properties.passengers}
                    cargo_capacity={vehiculo.properties.cargo_capacity}
                />
            ) : (
                <p>Planeta no encontrado</p>
            )}
        </div>
    );
};

export default VistaDetalladaVehiculo;
