import React from 'react';
import {View, TextInput, StyleSheet} from 'react-native';
import Colors from '../styles/Colors';
import Typography from '../styles/Typography';
import Icon from 'react-native-vector-icons/AntDesign';

const SearchInput = () => {
  return (
    <View style={styles.container}>
      <Icon name="search1" size={16} color="#FFF" style={styles.searchIcon} />
      <TextInput
        style={styles.input}
        placeholder="Search Products or store"
        placeholderTextColor={Colors.black45}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'center',
    height: 56,
    paddingHorizontal: 26,
    borderRadius: 28,
    backgroundColor: Colors.secondary,
  },
  searchIcon: {
    marginRight: 12,
  },
  input: {
    flex: 1,
    height: '100%',
    fontSize: 16,
    color: '#FFF',
    opacity: 0.8,
    ...Typography.Body2_Regular_14,
  },
});

export default SearchInput;
