const axios = require('axios');

const getLugarLatLng = async(direccion) => {


    let encodedUrl = encodeURI(direccion);

    let resp = await axios.get(`https://maps.googleapis.com/maps/api/geocode/json?address=${ encodedUrl }&key=AIzaSyCoVrKy1TOphryg3H26NHMxKteiHuMFaKI`)
    if (resp.data.status === 'ZERO_RESULTS') {
        throw new Error(`No Hay resultados para la ciudad ${ direccion}`);
    }

    let location = resp.data.results[0];
    let coordenadas = location.geometry.location

    return {
        direccion: location.formatted_address,
        lat: coordenadas.lat,
        lng: coordenadas.lng
    }
}

module.exports = {
    getLugarLatLng
}