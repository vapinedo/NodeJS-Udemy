const { crearArchivo } = require('./helpers/multiplicar');
const argv = require("./config/yargs");

console.clear();

crearArchivo(argv.b, argv.l, argv.h)
    .then(file => console.log(file, "File created"))
    .catch(console.log);                       