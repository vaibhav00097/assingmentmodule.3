const axios = require("axios")

const getGeoCode = (city, callback) => {

    const url = `https://api.opencagedata.com/geocode/v1/json?q=${city}&key=faed4d9eb29d483a866000c901ccb680`

    axios.get(url).then(result => {
        const dt = result.data.results[0].geometry;

        const lat = dt.lat
        const lng = dt.lng

        callback(undefined, {
            lat, lng
        })
        // console.log(`

        // lat : ${lat}
        // lng : ${lng}

        // `);

    }).catch(err => {
        callback(err)
    })


}

module.exports = { getGeoCode }
