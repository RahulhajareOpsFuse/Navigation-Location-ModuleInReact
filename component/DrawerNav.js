import React from 'react'
import{View,Text, Button}from 'react-native'
import{NavigationContainer}from '@react-navigation/native'
import{createDrawerNavigator}from '@react-navigation/drawer'

import App from '../App'
const Drawer=createDrawerNavigator()
export default function TDrawerNav()
{
    return(
        <Drawer.Navigator drawerStyle={{
            backgroundColor: '#c6cbef',
            width: 150,
          }}>
            <Drawer.Screen  name="Home" component={HomeScreen}/>
            <Drawer.Screen name="Setting" component={Settings} />
            <Drawer.Screen name="About" component={About}/>
        </Drawer.Navigator>
    )
}
function HomeScreen()
{
    return(
        <View>
            <Text style={{fontSize:30}}> Slide for Drawer</Text>
        </View>
    )
}
function Settings()
{
    return(
        <View>
            <Text style={{fontSize:30}}>Setting Screen</Text>
            <Button title="Home"/>
        </View>
    )
}

function About()
{
    return(
        <View>
            <Text style={{fontSize:30}}>About Screen</Text>
        </View>
    )
}