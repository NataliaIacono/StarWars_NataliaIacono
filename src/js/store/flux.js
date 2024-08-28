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
            contador: 0,
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
                    return data.result;
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
                        console.log(detalle);

                        return detalle.result;
                    });

                    //como funciona promise.all?
                    const planetasConSusDetalles = await Promise.all(detallesPlanetasPromesas);
                    console.log(planetasConSusDetalles);

                    setStore({ planetasDetalles: planetasConSusDetalles }); // por que asi? y no como abajo...PORQUE NO AGREGO NADA LUEGO DE EL GET

                    //tener encuanta esto para FAVORITOS
                    //const store = getStore(); // en la const store guardo todo lo que tiene store
                    // setStore({ ...store, planetasDetalles: planetasConSusDetalles }); // actualizo el store
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
                    return data.result;
                });

                const vehiculosDetalles = await Promise.all(responseDetalles);
                console.log(vehiculosDetalles);

                setStore({ ...getStore(), vehiculosDetalles });
            },

            // favoritos: (name) => {
            //     const store = getStore();
            //     if (!store.favoritos.includes(name)) {
            //         setStore({ favoritos: [...store.favoritos, name] });
            //     } else store.favoritos.includes(name);
            //     setStore({ favoritos: [...store.favoritos, name] });
            // },

            favoritos: (name, uid, type) => {
                const store = getStore();
                //const favoritos = store.favoritos; //esto es lo mismo que siguiente renglon,
                const { favoritos } = store; // esto es desestructurar

                const index = favoritos.findIndex((item) => item.uid === uid);

                if (index === -1) {
                    favoritos.push({ name, uid, type });
                } else {
                    favoritos.splice(index, 1);
                }
                setStore({ favoritos: favoritos });
                console.log(store);
            },

            // favoritos: (name, uid, type) => {
            //     const store = getStore();
            //     //const favoritos = store.favoritos; //esto es lo mismo que siguiente renglon,
            //     const { favoritos } = store; // esto es desestructurar

            //     const index = favoritos.findIndex((item) => item.uid === uid);

            //     if (index !== -1) {
            //         return getActions().eliminarFavorito(name);
            //     }
            //     favoritos.push({ name, uid, type });
            //     setStore({ favoritos: favoritos });
            //     console.log(store);
            // },

            eliminarFavorito: (name) => {
                const store = getStore();
                const favoritos = store.favoritos;

                const index = favoritos.indexOf(name);
                if (index == -1) {
                    return;
                }
                favoritos.splice(index, 1);
                setStore({ favoritos: favoritos });
            },
        },
    };
};

export default getState;
