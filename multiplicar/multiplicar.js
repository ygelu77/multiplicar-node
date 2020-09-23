const { rejects } = require('assert');
const colors = require('colors');
// Requireds
const fs = require('fs');
// const fs = require('express');
// const fs = require('./fs');

let listarTabla = (base, limite) => {
    return new Promise((resolve, reject) => {
        if (!Number(base)) {
            reject(`El valor introducido de base ${ base } no es un número`);
            return;
        } else if (!Number(limite)) {
            reject(`El valor introducido de limite ${ limite } no es un número`);
            return;
        } else if (base <= 0) {
            reject(`El valor introducido de base ${ base } no puede ser menor o igual que 0`);
            return;
        } else if (limite <= 0) {
            reject(`El valor introducido de limite ${ limite } no puede ser menor o igual que 0`);
            return;
        }

        let tabla = '';
        for (let i = 1; i <= limite; i++) {
            tabla += `${base} * ${ i } = ${ base * i}\n`;

        }
        resolve(tabla);
    });
}

//module.exports.crearArchivo = (base) => {
let crearArchivo = (base, limite) => {
    return new Promise((resolve, reject) => {

        if (!Number(base)) {
            reject(`El valor introducido de base ${ base } no es un número`);
            return;
        } else if (!Number(limite)) {
            reject(`El valor introducido de limite ${ limite } no es un número`);
            return;
        } else if (base <= 0) {
            reject(`El valor introducido de base ${ base } no puede ser menor o igual a 0`);
            return;
        } else if (limite <= 0) {
            reject(`El valor intrucido de limite ${ limite } no puede ser menor o igual a 0`);
            return;
        }
        let data = '';

        for (let i = 1; i <= limite; i++) {
            data += `${ base } * ${ i } = ${ base * i }\n`;

        }

        fs.writeFile(`tablas/tabla-${ base }-al-${ limite }.txt`, data, (err) => {
            if (err)
                reject(err)
            else
                resolve(`tabla-${ base }-al-${ limite }.txt`);
        });

    });
}

module.exports = {
    crearArchivo,
    listarTabla
}