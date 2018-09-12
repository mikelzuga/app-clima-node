const lugar = require('./lugar/lugar');
const clima = require('./clima/clima');
const colors = require('colors');
const argv = require('yargs').options({
    direccion: {
        alias: 'd',
        desc: 'Dirección de la ciudad para obtener el clima',
        demand: true
    }
}).argv;

let getInfo = async(direccion) => {

    try {
        let coordenadas = await lugar.getLugarLatLng(direccion);
        let temp = await clima.getClima(coordenadas.lat, coordenadas.lng);

        return 'La temperatura en ' + coordenadas.direccion.white + ' es de ' + temp + ' ºC'.grey;
    } catch (e) {
        return 'No se pudo determinar el clima en ' + direccion.red;
    }

};

getInfo(argv.direccion)
    .then(mensaje => console.log(mensaje))
    .catch(e => console.log(e));