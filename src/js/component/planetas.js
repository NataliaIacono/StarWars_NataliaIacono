import React, { useContext } from 'react';
import { Context } from '../store/appContext';
import CardPlaneta from './cardPlaneta';

const Planetas = () => {
    const { store, actions } = useContext(Context);
    return (
        <div>
            <h1>Todos los Planetas</h1>
            <div className="container d-flex">
                {store.planetasDetalles.map((planeta) => {
                    return <CardPlaneta key={planeta.uid} name={planeta.name} population={planeta.population} terrain={planeta.terrain} />;
                })}
            </div>
        </div>
    );
};

export default Planetas;
