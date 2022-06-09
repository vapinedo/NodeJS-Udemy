const { crearArchivo } = require('./helpers/multiplicar');
const argv = require('yargs')
    .option("b", {
        alias: "base",
        type: "number",
        demandOption: true
    })
    .option("l", {
        alias: "listar",
        type: "boolean",
        demandOption: true,
        default: false
    })
    .check((argv, options) => {
        if(isNaN(argv.base)) {
            throw "Base need to be a number"
        }
        return true
    })
    .argv;

console.clear();

console.log(argv)

console.log("Base", argv.base)

crearArchivo(argv.base, argv.l)
    .then(file => console.log(file, "File created"))
    .catch(console.log);                       