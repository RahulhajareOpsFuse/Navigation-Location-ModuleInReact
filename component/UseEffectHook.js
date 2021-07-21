import React, { Component } from 'react'
import{View,Text, Button}from 'react-native'
import { useEffect } from 'react/cjs/react.production.min'

function UseEffectHook(){
    const [count,setCount]=useState(0)
const [data,setData]=useState("No Data")

useEffect(()=>{
    console.warn("use effect",count)
})

    return(
        <View>
            <Text style={{fontSize:30,color:'res'}}>{count}</Text>
            <Button title="Update State" onPress={()=>setCount(count+1)}/>
        </View>
    )
}

export default UseEffectHook;