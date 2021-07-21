import React,{useState}from 'react'
import{ View,Text }from 'react-native'
import Geolocation from '@react-native-community/geolocation'

const DemoLocation=()=>{
    const [info,setInfo]=useState(0)
    Geolocation.getCurrentPosition(data=>{setInfo(data.coords.latitude)
    })
    return(
        <View>
            <Text style={{fontSize:30,color:'red'}}>Geolocation Latitude :,{info}</Text>
        </View>
    )
}

export default DemoLocation;