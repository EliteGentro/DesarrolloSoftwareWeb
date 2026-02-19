function saludar(nombre:string):string{
    return `Hola ${nombre}`;
}

const saludarFlecha = (nombre:string):string => {
    return `Hola ${nombre}`;
}

const msg = saludar('Jorge');
const msg2 = saludarFlecha('Banorte');

console.log(msg);
console.log(msg2);