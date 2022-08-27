const request = require('request')
const geocodeURL =
'file:///C:/Users/ASUS/Downloads/PDF-Guide-Node-Andrew-Mead-v3.pdf'
request({ url: geocodeURL, json: true }, (error, response) => {
 if (error) {
 console.log('Unable to connect to location services!')
 } else if (response.body.features.length === 0) {
 console.log('Unable to find location. Try another search.')
 } else {
 const latitude = response.body.features[0].center[0]
 const longitude = response.body.features[0].center[1]
 console.log(latitude, longitude)
 }
})

const geocode = require('./utils/geocode')
geocode('Boston', (error, data) => {
 console.log('Error', error)
 console.log('Data', data)
})
