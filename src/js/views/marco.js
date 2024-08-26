/*const numerosPerfectos = () => {
    for (let i = 1; i <= 100; i++) {
        suma = 0;
        for (let x = 1; x < i; x++) {
            if (i % x === 0) {
                suma = suma + x;
            }
        }
        if (suma === i) {
            console.log('perfecto');
        } else {
            console.log(i);
        }
    }
};*/

const sumaDivisores = (num) => {
    let suma = 0;
    for (let x = 1; x < num; x++) {
        if (num % x === 0) {
            suma += x;
        }
    }
    return suma;
};

const numerosPerfectos = () => {
    for (let i = 1; i <= 100; i++) {
        const suma = sumaDivisores(i);
        if (suma === i) {
            console.log('perfecto');
        } else {
            console.log(i);
        }
    }
};
numerosPerfectos();
