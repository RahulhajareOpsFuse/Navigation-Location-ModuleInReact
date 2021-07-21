// In App.js in a new project

import * as React from 'react';
import { View, Text, Button } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import Tab1 from './component/Tab1';
import DrawerNav from './component/DrawerNav';
import Loader from './component/Loader';
import UseEffectHook from './component/UseEffectHook';
import DemoModal from './component/DemoModal';
import DemoLocation from './component/DemoLocation';

const Stack = createStackNavigator();

function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Home">
        <Stack.Screen name=" " component={DemoLocation} />
        <Stack.Screen name="DrawerNav" component={DrawerNav} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
function HomeScreen({navigation}) {
  let data={name:'Rahul Hajare',email:'rahul@gmail.com',addr:'newasa'}
  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <Text>Home Screen</Text>
      <Button title="go to Details" onPress={()=>navigation.navigate("Details")}/>
    </View>
  );
}
function DetailsScreen({navigation}) {
  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <Text style={{fontSize:20,color:'green'}}>welcome to DetailsScreen</Text>
      <Button title="Drawer Navigation" onPress={()=>navigation.navigate("DrawerNav")}/>
    </View>
  );
}

function DrawerScreen({navigation}) {
  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <Text style={{fontSize:20,color:'green'}}>welcome to Drawer Navigation</Text>
      <Button title="Tab Navigation" onPress={()=>navigation.navigate("DrawerNav")}/>
    </View>
  );
}
export default App;