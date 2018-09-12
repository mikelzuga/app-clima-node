const axios = require('axios');

//const lugar = require('./lugar/lugar');

const getClima = async(lat, lng) => {

    let resp = await axios.get(`https://api.openweathermap.org/data/2.5/weather?&lat=${lat}&lon=${lng}&units=metric&appid=c9da63ae42b80e3afc192e10323f49c7`)

    return resp.data.main.temp


}

module.exports = {
    getClima
}