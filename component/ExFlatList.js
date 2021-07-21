{/**
    Flat List:
        Flat list is use to upload our json format data into List(Which is basically from Api.)
        -Flat list has built in scroll view. 
*/}

import { RENDER } from 'ci-info'
import { extend } from 'expect'
import React from 'react'
import{
    View,
    Text,
    FlatList
}from 'react-native'

class ExFlatlist extends React.Component{
    constructor(){
        super()
        this.state={
            data:[
                {name:'rahul' ,email:'Rahul@gamil.com'},
                {name:'Mahesh',email:'m@gmail.com'},
                {name:'Rahim',email:'m@gmail.com'},
                {name:'Atul',email:'m@gmail.com'},
                {name:'Abhi',email:'m@gmail.com'},
                {name:'Nitin',email:'m@gmail.com'},
                {name:'Ashok',email:'m@gmail.com'}
            ]
        }
    }
    render(){
        return(
            <View>
                <FlatList 
                style={{backgroundColor:'black',borderColor:'blue'}}
                data={this.state.data} renderItem={({item})=><Text style={{color:'white',fontSize:50}}>{item.name+"\n"+item.email+"\n"}</Text>
            }></FlatList>
            </View>
        )
    }
}

export default ExFlatlist;