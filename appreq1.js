const request = require('request')
const url =
'file:///C:/Users/ASUS/Downloads/PDF-Guide-Node-Andrew-Mead-v3.pdf'
request({ url: url, json: true }, (error, response) => {
 console.log(response.body.daily.data[0].summary + ' It is currently ' +
response.body.currently.temperature + ' degrees out. There is a ' +
response.body.currently.precipProbability + '% chance of rain.')
})