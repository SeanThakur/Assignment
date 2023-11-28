import React from 'react';
import {StyleSheet, Text, View} from 'react-native';
import Colors from '../styles/Colors';
import Typography from '../styles/Typography';

type tabLabelProp = {
  label: string;
  additionalText: string;
};

const TabLabel = ({label, additionalText}: tabLabelProp) => {
  return (
    <View style={styles.container}>
      <Text style={[styles.text]}>{label}</Text>
      <Text style={[styles.subText]}>{additionalText}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    justifyContent: 'center',
  },
  text: {
    ...Typography.H4_Bold_18px,
    color: Colors.black,
    paddingBottom: 2,
  },
  subText: {
    ...Typography.Body1_Regular_16,
    color: Colors.highlight,
    paddingBottom: 8,
  },
});

export default TabLabel;
