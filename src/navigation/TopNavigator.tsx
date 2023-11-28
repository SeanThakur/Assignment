import React from 'react';
import {createMaterialTopTabNavigator} from '@react-navigation/material-top-tabs';
import {RootStackParamList} from './RootStackParamList';
import Yesturday from '../screens/Yesterday';
import Today from '../screens/Today';
import Tomorrow from '../screens/Tomorrow';
import {StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';
import useNavigation from './useNavigation';
import Colors from '../styles/Colors';
import Typography from '../styles/Typography';
import TabLabel from '../components/TabLabel';
import {FormattedDates, getFormattedDates} from '../utils/dateUtils';

const MaterialTopTab = createMaterialTopTabNavigator<RootStackParamList>();

const TopNavigator = () => {
  const navigation = useNavigation();
  const formattedDates: FormattedDates = getFormattedDates();

  const handleGoBack = () => {
    navigation.goBack();
  };
  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <TouchableOpacity onPress={handleGoBack}>
          <Icon name="arrow-back-outline" size={24} color={Colors.black} />
        </TouchableOpacity>
        <Text style={styles.headerTitle}>Itinerary Form</Text>
        <View style={styles.noTextView} />
      </View>
      <MaterialTopTab.Navigator
        initialRouteName="Today"
        screenOptions={{
          tabBarGap: 2,
          tabBarStyle: {
            backgroundColor: Colors.white,
          },
          tabBarIndicatorContainerStyle: {
            marginHorizontal: 16,
            width: 200,
          },
          tabBarIndicatorStyle: {
            borderBottomWidth: 1,
            borderBottomColor: Colors.primary,
            left: '8%',
          },
        }}>
        <MaterialTopTab.Screen
          name="Yesterday"
          component={Yesturday}
          options={{
            tabBarLabel: () => (
              <TabLabel
                label="Yesterday"
                additionalText={formattedDates.yesterday}
              />
            ),
          }}
        />
        <MaterialTopTab.Screen
          name="Today"
          component={Today}
          options={{
            tabBarLabel: () => (
              <TabLabel label="Today" additionalText={formattedDates.today} />
            ),
          }}
        />
        <MaterialTopTab.Screen
          name="Tomorrow"
          component={Tomorrow}
          options={{
            tabBarLabel: () => (
              <TabLabel
                label="Tomorrow"
                additionalText={formattedDates.tomorrow}
              />
            ),
          }}
        />
      </MaterialTopTab.Navigator>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingHorizontal: 16,
    height: 100,
    backgroundColor: Colors.white,
  },
  noTextView: {
    width: 24,
  },
  headerTitle: {
    ...Typography.H2_Semibold_26px,
    color: Colors.black,
  },
});

export default TopNavigator;
