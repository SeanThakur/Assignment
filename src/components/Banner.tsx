import React from 'react';
import {
  View,
  FlatList,
  Dimensions,
  TouchableOpacity,
  Text,
  StyleSheet,
} from 'react-native';
import Colors from '../styles/Colors';
import Typography from '../styles/Typography';
import Icon from 'react-native-vector-icons/FontAwesome';

const {width} = Dimensions.get('window');

const Banner = () => {
  return (
    <View style={styles.container}>
      <View style={styles.flatListContainer}>
        <FlatList
          data={[1, 1, 1]}
          showsHorizontalScrollIndicator={false}
          pagingEnabled
          horizontal
          renderItem={({index}) => {
            return (
              <View style={styles.itemContainer} key={index}>
                <TouchableOpacity disabled={true} style={styles.touchable}>
                  <Icon name="photo" size={78} color="#FFF" />
                  <View style={styles.bannerItemDescription}>
                    <Text style={styles.getIntroText}>Get</Text>
                    <Text style={styles.percentOffText}>50% OFF</Text>
                    <Text style={styles.firstOrderText}>On First 03 order</Text>
                  </View>
                </TouchableOpacity>
              </View>
            );
          }}
        />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    paddingVertical: 24,
  },
  flatListContainer: {
    height: 156,
    justifyContent: 'center',
    alignItems: 'center',
  },
  itemContainer: {
    width: width - 50,
    height: 156,
    justifyContent: 'center',
    alignItems: 'center',
  },
  touchable: {
    width: '90%',
    height: '90%',
    backgroundColor: Colors.highlight,
    borderRadius: 18,
    padding: 18,
    flexDirection: 'row',
    alignItems: 'center',
  },
  bannerItemDescription: {
    marginLeft: 34,
  },
  getIntroText: {
    ...Typography.H2_Regular_26px,
    color: Colors.black1,
    opacity: 0.8,
  },
  firstOrderText: {
    ...Typography.H4_Regular_18px,
    color: Colors.black1,
    opacity: 0.8,
  },
  percentOffText: {
    ...Typography.H2_Regular_26px,
    color: '#FFF',
  },
});

export default Banner;
