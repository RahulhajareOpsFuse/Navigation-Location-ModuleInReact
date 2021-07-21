import React from 'react'
import{View,Text}from 'react-native'
import{NavigationContainer}from '@react-navigation/native'
import{createBottomTabNavigator}from '@react-navigation/bottom-tabs'


const Tab=createBottomTabNavigator()
export default function Tab1()
{
    return(
        <Tab.Navigator>
            <Tab.Screen name="Home" component={HomeScreen}/>
            <Tab.Screen name="Settings" component={Settings}/>
            <Tab.Screen name="About" component={About}/>

        </Tab.Navigator>
    )
}
function HomeScreen()
{
    return(
        <View>
            <Text style={{fontSize:30}}> HomeTab Navigation</Text>
        </View>
    )
}
function Settings()
{
    return(
        <View>
            <Text style={{fontSize:30}}>Setting Screen</Text>
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