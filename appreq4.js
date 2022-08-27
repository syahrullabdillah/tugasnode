const request = require('request')
const geocode = (address, callback) => {
 const url = 'file:///C:/Users/ASUS/Downloads/PDF-Guide-Node-Andrew-Mead-v3.pdf'
 request({ url: url, json: true }, (error, response) => {
 if (error) {
 callback('Unable to connect to location services!', undefined)
 } else if (response.body.features.length === 0) {
 callback('Unable to find location. Try another search.',
undefined)
 } else {
 callback(undefined, {
 latitude: response.body.features[0].center[0],
 longitude: response.body.features[0].center[1],
 location: response.body.features[0].place_name
 })
 }
 })
}
module.exports = geocode

const geocode = require('./utils/geocode')
geocode('Boston', (error, data) => {
 console.log('Error', error)
 console.log('Data', data)
})