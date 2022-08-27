const request = require('request')
const url =
'https://www.google.com/webhp?hl=id&sa=X&ved=0ahUKEwisl93txeb5AhVE0nMBHYuyDOYQPAgI'
request({ url: url }, (error, response) => {
 // Parse the response body from JSON string into JavaScript object
 const data = JSON.parse(response.body)
 // Will print the current temperature to the console
 console.log(data.currently.temperature)
})