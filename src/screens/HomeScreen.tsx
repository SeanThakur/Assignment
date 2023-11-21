import React, {useEffect, useState} from 'react';
import {
  ActivityIndicator,
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import Colors from '../styles/Colors';
import Typography from '../styles/Typography';
import SearchInput from '../components/SearchInput';
import CarouselCard from '../components/Banner';
import GridCard from '../components/GridCard';
import {SafeAreaView} from 'react-native-safe-area-context';
import Icon from 'react-native-vector-icons/FontAwesome';
import MaterialIcon from 'react-native-vector-icons/MaterialIcons';
import {RootState, actions, useAppSelector} from '../store/root.store';
import useNavigation from '../navigation/useNavigation';

const HomeScreen = () => {
  const navigation = useNavigation();
  const productsList = useAppSelector(
    (state: RootState) => state.products.productList,
  );
  const cartList = useAppSelector((state: RootState) => state.cart.cart);

  const [loading, setLoading] = useState<boolean>(false);

  const handleGetProductsList = async () => {
    try {
      setLoading(true);
      await actions.products.getProductsList();
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    handleGetProductsList();
  }, []);

  return (
    <SafeAreaView>
      <ScrollView showsVerticalScrollIndicator={false} style={styles.container}>
        <View style={styles.header}>
          <View style={styles.headerTitleContainer}>
            <Text style={styles.headerTitle}>Hey, Rahul</Text>
            <TouchableOpacity
              style={styles.cartCountContainer}
              onPress={() => navigation.navigate('Cart')}>
              <View style={styles.cartListCount}>
                <Text style={styles.cartListCountText}>{cartList.length}</Text>
              </View>
              <Icon name="shopping-cart" size={32} color="#FFF" />
            </TouchableOpacity>
          </View>
          <SearchInput />
          <View style={styles.deliveryContainer}>
            <View>
              <Text style={styles.deliverySubTitle}>DELIVERY TO</Text>
              <View style={styles.deliveryAddText}>
                <Text style={styles.deliveryTitle}>Green way 3000, Selhet</Text>
                <MaterialIcon
                  name="keyboard-arrow-down"
                  size={16}
                  color={Colors.black45}
                />
              </View>
            </View>
            <View>
              <Text style={styles.deliverySubTitle}>WITHIN</Text>
              <View style={styles.deliveryAddText}>
                <Text style={styles.deliveryTitle}>1 Hour</Text>
                <MaterialIcon
                  name="keyboard-arrow-down"
                  size={16}
                  color={Colors.black45}
                />
              </View>
            </View>
          </View>
        </View>
        <CarouselCard />
        <Text style={styles.recommandedText}>Recommended</Text>
        {loading ? (
          <ActivityIndicator size={'large'} />
        ) : (
          <GridCard data={productsList} />
        )}
      </ScrollView>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {backgroundColor: '#FFF', height: '100%'},
  header: {
    backgroundColor: Colors.primary,
    height: 250,
    paddingHorizontal: 20,
    flexDirection: 'column',
    justifyContent: 'space-between',
  },
  headerTitleContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingTop: 30,
  },
  headerTitle: {
    ...Typography.H1_Medium_30px,
    color: '#FFF',
  },
  deliveryContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingBottom: 18,
  },
  deliveryAddText: {
    flexDirection: 'row',
    alignItems: 'flex-start',
  },
  deliverySubTitle: {
    ...Typography.Label_Medium_12,
    color: Colors.black45,
    paddingBottom: 4,
  },
  deliveryTitle: {
    ...Typography.Body1_Regular_16,
    color: '#FFF',
    marginRight: 8,
  },
  recommandedText: {
    ...Typography.H1_Regular_30px,
    color: Colors.black100,
    paddingHorizontal: 20,
  },
  cartCountContainer: {position: 'relative'},
  cartListCount: {
    borderRadius: 100,
    backgroundColor: Colors.highlight,
    height: 22,
    width: 22,
    alignItems: 'center',
    justifyContent: 'center',
    position: 'absolute',
    right: 0,
    left: 12,
    bottom: 14,
    zIndex: 99,
  },
  cartListCountText: {
    ...Typography.Body1_Regular_16,
    color: '#FFF',
  },
});

export default HomeScreen;
