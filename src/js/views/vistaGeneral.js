import React, { useContext } from 'react';
import { Context } from '../store/appContext';
import Personajes from '../component/personajes';
import Planetas from '../component/planetas';
import Vehiculos from '../component/vehiculos';

import '../../styles/vistaGeneral.css';

const VistaGeneral = () => {
    const { store, actions } = useContext(Context);
    return (
        <div className="background ">
            <Personajes />
            <Planetas />
            <Vehiculos />
        </div>
    );
};

export default VistaGeneral;
