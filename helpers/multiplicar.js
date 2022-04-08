const fs = require('fs');

const crearArchivo = async (base = 5, limit = 10) => {
    try {
        let salida = '';
        for (let i=1; i<=limit; i++) {
            salida += `${base} x ${i} = ${base * i}\n`;
        }
        fs.writeFileSync(`./assets/tabla-${base}.txt`, salida);
        return salida;
        
    } catch (err) {
        throw err;
    }
};

module.exports = {
    crearArchivo
};