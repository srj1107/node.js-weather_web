const request= require('request')

const geocode= (address, callback)=>{
    const url= 'https://api.mapbox.com/geocoding/v5/mapbox.places/' + encodeURIComponent(address) + '.json?access_token=pk.eyJ1Ijoic3JqMTEwNSIsImEiOiJja2Q2ejZobGgwdm9tMnNuemNhNDloY2g3In0.7n5bHiMqoPl44fkyvZvLwA&limit=1'
    request({url: url}, (error,{body})=>{
        const zebra = JSON.parse(body)
         if(error){
            callback('Unable to connect to location services!', undefined)
        }else if(zebra.features.length ===0){
            callback('Unable to find location. Try another search.', undefined)
        }
        else{
            callback(undefined, {
                latitude: zebra.features[0].center[1],
                longitude: zebra.features[0].center[0],
                location: zebra.features[0].place_name
            }) 
        }
    })
}

module.exports= geocode