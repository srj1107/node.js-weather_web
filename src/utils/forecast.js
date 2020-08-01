const request = require('request')

const forecast= (latitude, longitude , callback)=>{
    const url ='https://weather.visualcrossing.com/VisualCrossingWebServices/rest/services/weatherdata/forecast?contentType=json&locationMode=single&locations=' + latitude + ',' + longitude + '&aggregateHours=24&key=XUBU5R64M5A1MC5KQL9SN466U'

    request({url},(error, { body })=>{
        if(error){
            callback('Unable to connect to the weather service! ', undefined)
        }
        else if(body.message){
            callback('Unable to find loaction!', undefined)
        }
        else{
            const data= JSON.parse(body)
            callback(undefined, 'It is currently '+data.location.values[0].temp+' fahrenheit out. There is a '+ data.location.values[0].precip+'% chance of precipitation.')
        }
    })
    }

module.exports= forecast