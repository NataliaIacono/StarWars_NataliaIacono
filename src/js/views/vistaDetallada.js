import React, { useContext } from 'react';
import { useParams } from 'react-router-dom';
import { Context } from '../store/appContext';
import CardDetalladaP from '../component/cardDetalladaP';

const VistaDetallada = () => {
    const { store, actions } = useContext(Context);
    const { uid } = useParams();

    const personaje = store.personajesDetalles.find((personaje) => personaje.uid === uid);
    console.log(uid);

    return (
        <div>{personaje ? <CardDetalladaP key={personaje.uid} uid={personaje.uid} description={personaje.description} name={personaje.properties.name} gender={personaje.properties.gender} eye_color={personaje.properties.eye_color} birth_year={personaje.properties.birth_year} height={personaje.properties.height} skin_color={personaje.properties.skin_color} /> : <p>Personaje no encontrado</p>}</div>
    );
};

export default VistaDetallada;
