const { crearArchivo } = require('./helpers/multiplicar');
const argv = require("./config/yargs");

console.clear();

crearArchivo(argv.base, argv.l)
    .then(file => console.log(file, "File created"))
    .catch(console.log);                       