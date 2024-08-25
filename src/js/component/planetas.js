import React, { useContext } from 'react';
import { Context } from '../store/appContext';
import CardPlaneta from './cardPlaneta';

import '../../styles/planetas.css';

const Planetas = () => {
    const { store, actions } = useContext(Context);
    return (
        <div className="scroll-container">
            <div>
                <h1>Planetas</h1>
                <div className="container d-flex">
                    {store.planetasDetalles.map((planeta) => {
                        return <CardPlaneta key={planeta.uid} uid={planeta.uid} name={planeta.properties.name} population={planeta.properties.population} terrain={planeta.properties.terrain} />;
                    })}
                </div>
            </div>
        </div>
    );
};

export default Planetas;
