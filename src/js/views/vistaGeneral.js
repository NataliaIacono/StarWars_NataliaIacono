import React, { useContext } from 'react';
import { Context } from '../store/appContext';
import Personajes from '../component/personajes';
import Planetas from '../component/planetas';
import Vehiculos from '../component/vehiculos';

const VistaGeneral = () => {
    const { store, actions } = useContext(Context);
    return (
        <div>
            <section>
                <Personajes />
            </section>
            <section>
                <Planetas />
            </section>
            <section>
                <Vehiculos />
            </section>
        </div>
    );
};

export default VistaGeneral;
