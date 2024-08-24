import Vehiculos from '../component/vehiculos';

const getState = ({ getStore, getActions, setStore }) => {
    return {
        store: {
            personajes: [],
            planetas: [],
            Vehiculos: [],
            personajesDetalles: [],
            planetasDetalles: [],
            vehiculosDetalles: [],
            favoritos: [],
            imagenesPersonajes: [],
        },
        actions: {
            obtenerPersonajes: async () => {
                const response = await fetch(`https://www.swapi.tech/api/people`);
                if (!response.ok) {
                    console.log('No se pudieron obtener los personajes');
                    return;
                }
                const data = await response.json();
                const store = getStore();
                setStore({ ...store, personajes: data.results });

                const responseDetalles = data.results.map(async (personaje) => {
                    const response = await fetch(personaje.url);
                    const data = await response.json();
                    return data.result.properties;
                });

                const personajesDetalles = await Promise.all(responseDetalles);
                console.log(personajesDetalles);

                setStore({ ...getStore(), personajesDetalles });
            },

            obtenerPlanetas: async () => {
                try {
                    const response = await fetch('https://www.swapi.tech/api/planets');
                    if (!response.ok) {
                        console.log('No se puedieron obtener los planetas');
                        return;
                    }
                    const data = await response.json();
                    console.log(data);

                    //repasar quiero ver si lo entiendo
                    const detallesPlanetasPromesas = data.results.map(async (planeta) => {
                        const resDetalle = await fetch(planeta.url);
                        const detalle = await resDetalle.json();
                        return detalle.result.properties;
                    });

                    //como funciona promise.all?
                    const planetasDetalles = await Promise.all(detallesPlanetasPromesas);
                    console.log(planetasDetalles);

                    setStore({ ...getStore(), planetasDetalles }); // por que asi? y no como abajo

                    //const store = getStore(); // en la const store guardo todo lo que tiene store
                    // setStore({ ...store, contactos: contactList }); // actualizo el store
                } catch (error) {
                    console.log(error);
                }
            },

            obtenerVehiculos: async () => {
                const response = await fetch(`https://www.swapi.tech/api/vehicles`);
                if (!response.ok) {
                    console.log('No se pudieron obtener los vehiculos');
                    return;
                }
                const data = await response.json();
                const store = getStore();
                setStore({ ...store, personajes: data.results });

                const responseDetalles = data.results.map(async (vehiculo) => {
                    const response = await fetch(vehiculo.url);
                    const data = await response.json();
                    return data.result.properties;
                });

                const vehiculosDetalles = await Promise.all(responseDetalles);
                console.log(vehiculosDetalles);

                setStore({ ...getStore(), vehiculosDetalles });
            },
        },
    };
};

export default getState;
