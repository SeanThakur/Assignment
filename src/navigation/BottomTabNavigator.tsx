/* eslint-disable @typescript-eslint/no-shadow */
/* eslint-disable react/no-unstable-nested-components */
import React from 'react';
import {
  NavigationContainer,
  getFocusedRouteNameFromRoute,
} from '@react-navigation/native';
import StackScreen from './StackScreen';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {RootStackParamList} from './RootStackParamList';
import Icon from 'react-native-vector-icons/Entypo';
import Colors from '../styles/Colors';
import FavouriteScreen from '../screens/FavouriteScreen';

const Tab = createBottomTabNavigator<RootStackParamList>();

const BottomTabNavigator = () => (
  <NavigationContainer>
    <Tab.Navigator
      screenOptions={{
        headerShown: false,
      }}>
      <Tab.Screen
        name="HomeBottom"
        component={StackScreen}
        options={({route}) => ({
          tabBarStyle: (route => {
            const routeName = getFocusedRouteNameFromRoute(route) ?? '';
            if (routeName === 'Cart' || routeName === 'Details') {
              return {display: 'none'};
            }
            return;
          })(route),
          tabBarIcon: () => (
            <Icon name="home" size={24} color={Colors.highlight} />
          ),
        })}
      />
      <Tab.Screen
        name="Favourite"
        component={FavouriteScreen}
        options={{
          tabBarIcon: () => (
            <Icon name="heart" size={24} color={Colors.highlight} />
          ),
        }}
      />
    </Tab.Navigator>
  </NavigationContainer>
);

export default BottomTabNavigator;
