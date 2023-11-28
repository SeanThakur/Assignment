import React from 'react';
import {NavigationContainer, RouteProp} from '@react-navigation/native';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {RootStackParamList} from './RootStackParamList';
import Icon from 'react-native-vector-icons/Entypo';
import FontAwesomIcon from 'react-native-vector-icons/FontAwesome5';
import Colors from '../styles/Colors';
import HomeScreen from '../screens/HomeScreen';
import WalletScreen from '../screens/WalletScreen';
import ChartScreen from '../screens/ChartScreen';
import TopNavigator from './TopNavigator';

const Tab = createBottomTabNavigator<RootStackParamList>();

type TabIconProps = {
  route: RouteProp<RootStackParamList, keyof RootStackParamList>;
  focused: boolean;
};

const getTabIcon = ({route, focused}: TabIconProps) => {
  const iconColor = focused ? Colors.primary : Colors.accent;

  switch (route.name) {
    case 'Home':
      return <Icon name="home" size={24} color={iconColor} />;
    case 'Wallet':
      return <FontAwesomIcon name="shopping-bag" size={24} color={iconColor} />;
    case 'Guide':
      return <FontAwesomIcon name="map-signs" size={24} color={iconColor} />;
    case 'Chart':
      return <FontAwesomIcon name="chart-area" size={24} color={iconColor} />;
    default:
      return null;
  }
};

const BottomTabNavigator = () => {
  return (
    <NavigationContainer>
      <Tab.Navigator
        screenOptions={({route}) => ({
          tabBarIcon: ({focused}) => getTabIcon({route, focused}),
          headerShown: false,
          tabBarActiveTintColor: Colors.primary,
          tabBarInactiveTintColor: Colors.accent,
          tabBarStyle: {
            backgroundColor: 'white',
            height: 80,
            paddingTop: 10,
          },
          tabBarLabelStyle: {
            fontSize: 14,
            fontWeight: '300',
            textAlign: 'center',
            marginBottom: 10,
          },
        })}>
        <Tab.Screen name="Home" component={HomeScreen} />
        <Tab.Screen name="Wallet" component={WalletScreen} />
        <Tab.Screen name="Guide" component={TopNavigator} />
        <Tab.Screen name="Chart" component={ChartScreen} />
      </Tab.Navigator>
    </NavigationContainer>
  );
};

export default BottomTabNavigator;
