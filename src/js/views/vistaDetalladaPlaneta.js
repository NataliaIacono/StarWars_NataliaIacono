import React, { useContext } from 'react';
import { useParams } from 'react-router-dom';
import { Context } from '../store/appContext';
import CardDetalladaPlaneta from '../component/cardDetalladaPlaneta';

const VistaDetalladaPlaneta = () => {
    const { store, actions } = useContext(Context);
    const { uid } = useParams();

    const planeta = store.planetasDetalles.find((planeta) => planeta.uid === uid);
    console.log(uid);

    return (
        <div>
            {planeta ? (
                <CardDetalladaPlaneta
                    key={planeta.uid}
                    uid={planeta.uid}
                    description={planeta.description}
                    name={planeta.properties.name}
                    rotation_period={planeta.properties.rotation_period}
                    orbital_period={planeta.properties.orbital_period}
                    gravity={planeta.properties.gravity}
                    population={planeta.properties.population}
                    climate={planeta.properties.climate}
                    terrain={planeta.properties.terrain}
                    surface_water={planeta.properties.surface_water}
                    created={planeta.properties.created}
                />
            ) : (
                <p>Planeta no encontrado</p>
            )}
        </div>
    );
};

export default VistaDetalladaPlaneta;
