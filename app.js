
const { crearArchivo } = require('./helpers/multiplicar');

console.clear();

const [,, arg3 = 'base=4'] = process.argv;
const [, base = 5] = arg3.split('=');

crearArchivo(base)
    .then(console.log)
    .catch(console.log);