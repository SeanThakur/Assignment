import React from 'react';
import {
  SafeAreaView,
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import Colors from '../styles/Colors';
import Typography from '../styles/Typography';
import Icon from 'react-native-vector-icons/MaterialIcons';
import useNavigation from '../navigation/useNavigation';
import GridCard from '../components/GridCard';
import {RootState, useAppSelector} from '../store/root.store';

const FavouriteScreen = () => {
  const navigation = useNavigation();
  const favouriteList = useAppSelector(
    (state: RootState) => state.favourite.favourite,
  );

  return (
    <SafeAreaView>
      <ScrollView showsVerticalScrollIndicator={false} style={styles.container}>
        <View style={styles.header}>
          <TouchableOpacity
            style={styles.headerBack}
            onPress={() => navigation.goBack()}>
            <Icon
              name="keyboard-arrow-left"
              size={20}
              color={Colors.black100}
            />
          </TouchableOpacity>
          <Text style={styles.headerTitle}>
            Favourite ({favouriteList.length})
          </Text>
        </View>
        {favouriteList.length === 0 ? (
          <Text style={styles.headerTitle}>No Item.</Text>
        ) : (
          <GridCard data={favouriteList} />
        )}
      </ScrollView>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#FFF',
    height: '100%',
  },
  header: {
    paddingHorizontal: 20,
    paddingVertical: 30,
    flexDirection: 'row',
    alignItems: 'center',
  },
  headerBack: {
    borderRadius: 100,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: Colors.black10,
    height: 36,
    width: 36,
    marginRight: 24,
  },
  headerTitle: {
    ...Typography.H3_Medium_20px,
    color: Colors.black90,
  },
});

export default FavouriteScreen;
