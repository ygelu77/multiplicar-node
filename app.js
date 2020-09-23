const argv = require('./config/yargs').argv;
const colors = require('colors');

const { crearArchivo, listarTabla } = require('./multiplicar/multiplicar'); //Destructuracion

let comando = argv._[0];


switch (comando) {
    case 'listar':
        console.log('Listar'.green);
        console.log('==================='.green);
        console.log(`Tabla de ${ argv.base }`.green);
        console.log('==================='.green);

        listarTabla(argv.base, argv.limite)
            .then(tabla => console.log(tabla))
            .catch(err => console.log(err));

        break;
    case 'crear':
        console.log('Crear');
        crearArchivo(argv.base, argv.limite)
            // .then(archivo => console.log(`Archivo creado: ${ archivo.green }`))
            .then(archivo => console.log('Archivo creado: ', archivo.green))
            .catch(e => console.log(e));

        break;
    default:
        console.log('Commando no reconocido');


}



// console.log(process.argv);

// let argv2 = process.argv;
// 
// console.log(argv.limite);

// let parametro = argv[2];
// let base = parametro.split('=')[1];