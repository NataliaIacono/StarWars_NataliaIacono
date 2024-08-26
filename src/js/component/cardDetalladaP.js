import React, { useContext } from 'react';
import { Context } from '../store/appContext';

const CardDetalladaP = ({ name, birth_year, gender, height, skin_color, eye_color, uid, description }) => {
    const { store, actions } = useContext(Context);

    return (
        <div>
            <div>
                <img src={`https://starwars-visualguide.com/assets/img/characters/${uid}.jpg`} className="card-img-top" alt="personajes" />
            </div>
            <div>
                <h1>{name}</h1>
                <p>{description}</p>
                -------------------
                <div>
                    <p>
                        name: {name} birth_year: {birth_year} gender: {gender} height: {height} skin_color: {skin_color} eye_color: {eye_color}
                    </p>
                </div>
            </div>
        </div>
    );
};

export default CardDetalladaP;
