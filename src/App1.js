// React Navigate Drawer with Bottom Tab
// https://aboutreact.com/bottom-tab-view-inside-navigation-drawer/

import 'react-native-gesture-handler';

import * as React from 'react';
import {View, TouchableOpacity, Image} from 'react-native';

import {
  NavigationContainer,
  getFocusedRouteNameFromRoute,
} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import {createDrawerNavigator} from '@react-navigation/drawer';
import { useNavigation } from '@react-navigation/native';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';

import HomeScreen from '../src/HomeScreen';
import Gallary from '../src/Gallary';
import Detection from '../src/Detection';
import FileUpload from '../src/FileUpload';
import Showimages from './Showimages';
import Dashboard from './Dashboard';

const Stack = createStackNavigator();
const Drawer = createDrawerNavigator();
const Tab = createBottomTabNavigator();



const BottomTabStack = () => {
  return (
    <Tab.Navigator
      screenOptions={{
        headerShown: false
      }}
      >
      <Tab.Screen
        name="HomeScreen"
        component={HomeScreen}
        screenOptions={{
          headerShown: false
        }}
      />
      <Tab.Screen
        name="Gallary"
        component={Gallary}
      />
    </Tab.Navigator>
  );
};

const Home = () => {
  return (
    <Stack.Navigator 
    screenOptions={{
      headerShown: false
    }}>
      <Stack.Screen
        name="BottomTabStalwewck"
        component={BottomTabStack}
      />
      <Stack.Screen name="Detection" component={Detection} />
      <Stack.Screen name="Gallary" component={Gallary} />
      <Stack.Screen name="Showimages" component={Showimages}  options={{headerShown:false}}/>
      <Stack.Screen name="FileUpload" component={FileUpload} />
    </Stack.Navigator>
  );
};

const App = () => {
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
        />
        <Drawer.Screen
          name="Dashboard"
          component={Dashboard}
        />

      </Drawer.Navigator>
    </NavigationContainer>
  );
};

export default App;










