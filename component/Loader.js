import React, { Component } from 'react'
import{View,Text,ActivityIndicator}from 'react-native'

class Loader extends Component{
    constructor(){
        super()
        this.state={
            Loader:true
        }
    }
    componentDidMount(){
        setTimeout(()=>{
            this.setState({Loader:false})
        },6000);
    }
    render(){
        return(
            <View>
             {
                 this.state.Loader ?
                 <ActivityIndicator size={100} color="red"/>
                 :<Text style={{color:'red', fontSize:40}}>Thanks for Waiting</Text>
             }
             </View>
        )
    }
}
export default Loader;