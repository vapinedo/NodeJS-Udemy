const fs = require("fs");

const tablaMultiplicarDel = async(base, limit = 10) => {
    try {
        let resultado = "";
        for (let i=1; i<=limit; i++) {
            resultado += `${base} x ${i} = ${base * i}\n`;
        }
        fs.writeFileSync(`tabla-${base}.txt`, resultado);

        return resultado;
        
    } catch (err) {
        throw err;
    }
};

module.exports = {
    tablaMultiplicarDel
};