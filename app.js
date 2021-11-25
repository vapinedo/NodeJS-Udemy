
const { tablaMultiplicarDel } = require("./helpers/operacionesMatematicas");

console.clear();

tablaMultiplicarDel(10)
    .then(console.log)
    .catch(console.log);