import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

//Pages

import Login from './component/Login'
import Home from './component/Home';
import Notification from './component/Notification'
import Feedview from './component/Feedview'
import Addmenu from './component/Addmenu'

//redux

import { useSelector } from 'react-redux'

const Stack = createStackNavigator();

export default function PageManage() {

    let data = useSelector( state => state.LogManage);

    let page = 'Home';

    if(data === 0){
         page = 'Home';
    }else{
        page = 'Login';
    }

  return (
      <NavigationContainer>
       <Stack.Navigator
            screenOptions={{
                headerShown: false
            }}
            initialRouteName={page}
        >
            <Stack.Screen name="Home" component={Home} />
            <Stack.Screen name="Login" component={Login} />
            <Stack.Screen name="Notification" component={Notification} />
            <Stack.Screen name="Addmenu" component={Addmenu} />
            <Stack.Screen name="Feedview" component={ Feedview } />

        </Stack.Navigator>
    </NavigationContainer>    
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    // alignItems: 'center',
    // justifyContent: 'center',
  },
});
