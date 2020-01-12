const request = require('request')

const forecast = (latitude,longitude,callback) =>{
    const url = 'https://api.darksky.net/forecast/b030f91cc86d167e7740ee92f1575fee/'+latitude+','+longitude+'?lang=pt&units=si'
    request({url,json:true},(error,{body}) =>{
        if(error){
            callback('Unable to connetc to weather service')
        }else if(body.error){
            callback('Unable to find location')
        }else{
            callback(undefined,{
                temperature: body.currently.temperature,
                precipProbability: body.currently.precipProbability,
                sumary: body.daily.data[0].summary,
                icon:  body.currently.icon
            })
        }
    })
}
module.exports = forecast