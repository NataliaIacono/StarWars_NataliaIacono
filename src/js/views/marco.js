const numerosPerfectos = () => {
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
};
