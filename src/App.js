
import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createDrawerNavigator } from '@react-navigation/drawer';
import Home from './Home';
import Bottomnav from './Bottomnav';
import Login from './Login';
import Signup from './Signup';
import profile from './profile';
import Detection from './Detection';
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';

import { FlatList } from 'react-native-gesture-handler';



const Drawer = createDrawerNavigator();


function App() {
  return (
    <NavigationContainer>
      <Drawer.Navigator
        initialRouteName="Home"
        drawerPosition='left'
        drawerType="front"
        edgeWidth={100}
        hideStatusBar={false}
        overlayColor='#00000090'
        drawerStyle={{
          backgroundColor: '#e6e6e6',
          width: 250
        }}
        screenOptions={{
          headerShown: true,
          swipeEnabled: true,
          gestureEnabled: true,
          headerTitleAlign: 'center',
          headerStyle: {
            backgroundColor: '#0080ff'
          },
          headerTintColor: '#ffffff',
          headerTitleStyle: {
            fontSize: 25,
            fontWeight: 'bold'
          }
        }}
      >
        <Drawer.Screen
          name="Home"
          component={Home}
          options={{
            title: 'Home ',
            drawerIcon: ({ focused }) => (
              <FontAwesome5
                name="autoprefixer"
                size={focused ? 25 : 20}
                color={focused ? '#0080ff' : '#999999'}
              />
            )
          }}
        />
        <Drawer.Screen
          name="Detection"
          component={Detection}
          options={{
            title: 'Detection ',
            drawerIcon: ({ focused }) => (
              <FontAwesome5
                name="autoprefixer"
                size={focused ? 25 : 20}
                color={focused ? '#0080ff' : '#999999'}
              />
            )
          }}
        />
        <Drawer.Screen
          name="Bottomnav"
          component={Bottomnav}
          options={{
            title: 'Bottomnav',
            drawerIcon: ({ focused }) => (
              <FontAwesome5
                name="btc"
                size={focused ? 25 : 20}
                color={focused ? '#0080ff' : '#999999'}
              />
            )
          }}
        />
        <Drawer.Screen
          name="Signup"
          component={Signup}
          options={{
            title: 'Signup ',
            drawerIcon: ({ focused }) => (
              <FontAwesome5
                name="btc"
                size={focused ? 25 : 20}
                color={focused ? '#0080ff' : '#999999'}
              />
            )
          }}
        />
        <Drawer.Screen
          name="profile"
          component={profile}
          options={{
            title: 'profile ',
            drawerIcon: ({ focused }) => (
              <FontAwesome5
                name="btc"
                size={focused ? 25 : 20}
                color={focused ? '#0080ff' : '#999999'}
              />
            )
          }}
        />
         <Drawer.Screen
          name="Login"
          component={Login}
          options={{
            title: 'Login ',
            drawerIcon: ({ focused }) => (
              <FontAwesome5
                name="autoprefixer"
                size={focused ? 25 : 20}
                color={focused ? '#0080ff' : '#999999'}
              />
            )
          }}
        />
      </Drawer.Navigator>
    </NavigationContainer>
  )
}





export default App;
















