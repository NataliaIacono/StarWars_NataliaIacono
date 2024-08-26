import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import ScrollToTop from './component/scrollToTop';

import injectContext from './store/appContext';

import '../styles/layout.css';

import { Navbar } from './component/navbar';
import { Footer } from './component/footer';
import VistaGeneral from './views/vistaGeneral';
import VistaDetallada from './views/vistaDetallada';
import VistaDetalladaPlaneta from './views/vistaDetalladaPlaneta';
import VistaDetalladaVehiculo from './views/vistaDetalladaVehiculo';

//create your first component
const Layout = () => {
    //the basename is used when your project is published in a subdirectory and not in the root of the domain
    // you can set the basename on the .env file located at the root of this project, E.g: BASENAME=/react-hello-webapp/
    const basename = process.env.BASENAME || '';

    return (
        <div className="fondo">
            <BrowserRouter basename={basename}>
                <ScrollToTop>
                    <Navbar />
                    <Routes>
                        <Route path="/" element={<VistaGeneral />} />
                        <Route path="/detalle/:uid" element={<VistaDetallada />} />
                        <Route path="/detallePlaneta/:uid" element={<VistaDetalladaPlaneta />} />
                        <Route path="/detalleVehiculo/:uid" element={<VistaDetalladaVehiculo />} />
                        <Route path="*" element={<h1>Not found!</h1>} />
                    </Routes>
                    <Footer />
                </ScrollToTop>
            </BrowserRouter>
        </div>
    );
};

export default injectContext(Layout);
