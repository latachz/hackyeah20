import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';

import FontAwesomeIcon from 'react-native-vector-icons/FontAwesome';

import HomeScreen from '../screens/Home';
import SubjectScreen from '../screens/Subject';
import ProfileScreen from '../screens/Profile'

const Tab = createBottomTabNavigator();

export default function Navigation() {
  return (
    <NavigationContainer>
      <Tab.Navigator
        screenOptions={({route}) => ({
          tabBarIcon: ({focused, color, size}) => {
            let iconName;

            if (route.name === 'Home') {
              iconName = focused ? 'home' : 'home';
            } else if (route.name === 'Subject') {
              iconName = focused ? 'globe' : 'globe';
            } else if (route.name === 'Profile') {
              iconName = focused ? 'user' : 'user';
            }

            // You can return any component that you like here!
            return (
              <FontAwesomeIcon name={iconName} size={size} color={color} />
            );
          },
        })}
        tabBarOptions={{
          activeTintColor: '#70A1FF',
          inactiveTintColor: 'gray',
        }}>
        <Tab.Screen name="Home" component={HomeScreen} />
        <Tab.Screen name="Subject" component={SubjectScreen} />
        <Tab.Screen name="Profile" component={ProfileScreen} />
      </Tab.Navigator>
    </NavigationContainer>
  );
}
