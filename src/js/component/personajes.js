import React, { useContext } from 'react';
import { Context } from '../store/appContext';
import Card from './card';

const Personajes = () => {
    const { store, actions } = useContext(Context);
    return (
        <div>
            <h1>Todos los personajes</h1>
            <div className="container d-flex">
                {store.personajesDetalles.map((personaje) => {
                    return <Card key={personaje.uid} name={personaje.name} gender={personaje.gender} hair_color={personaje.hair_color} eye_color={personaje.eye_color} />;
                })}
            </div>
        </div>
    );
};

export default Personajes;
