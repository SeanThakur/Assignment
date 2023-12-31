import React from 'react';
import {StyleSheet, Text, View} from 'react-native';
import Colors from '../styles/Colors';
import Typography from '../styles/Typography';

const HomeScreen = () => {
  return (
    <View style={styles.view}>
      <Text style={styles.text}>Home Page</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  view: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: Colors.secondary,
  },
  text: {
    ...Typography.H1_Regular_30px,
    color: Colors.accent,
  },
});

export default HomeScreen;
