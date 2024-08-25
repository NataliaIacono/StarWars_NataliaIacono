import React, { useContext } from 'react';
import { Context } from '../store/appContext';
import Card from './card';

import '../../styles/personajes.css';

const Personajes = () => {
    const { store, actions } = useContext(Context);
    return (
        <div className="scroll-container">
            <div className="personajes">
                <h1>Personajes</h1>
                <div className="container d-flex">
                    {store.personajesDetalles.map((personaje) => {
                        return <Card key={personaje.uid} uid={personaje.uid} name={personaje.properties.name} gender={personaje.properties.gender} hair_color={personaje.properties.hair_color} eye_color={personaje.properties.eye_color} />;
                    })}
                </div>
            </div>
        </div>
    );
};

export default Personajes;
