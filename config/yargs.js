const argv = require('yargs')
    .option("b", {
        alias: "base",
        type: "number",
        demandOption: true,
        describe: "Es la base de la tabla de multiplicar"
    })
    .option("l", {
        alias: "listar",
        type: "boolean",
        default: false,
        describe: "Muestra la tabla en consola"
    })
    .options("h", {
        alias: "hasta",
        type: "number",
        default: 10,
        describe: "Limite de la tabla a calcular"
    })
    .check((argv, options) => {
        if(isNaN(argv.base)) {
            throw "Base need to be a number"
        }
        return true
    })
    .argv;

module.exports = argv;