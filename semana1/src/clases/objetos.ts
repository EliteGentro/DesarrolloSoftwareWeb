const estudiante = {
    matricula: 'A0001',
    nombre: 'Humberto',
    edad: 21,
    direccion: {
        ciudad: 'Monterrey',
        cp: 63242,
    }
};


console.log(estudiante);


const estudiante2 = {...estudiante};

estudiante2.nombre = 'Jaime';
console.log(estudiante2);

const estudiante3 = estudiante;
estudiante3.nombre = 'Maria';
console.log(estudiante3);
console.log(estudiante);
