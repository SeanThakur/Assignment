import React, {useEffect, useState} from 'react';
import {
  FlatList,
  Image,
  SafeAreaView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import Colors from '../styles/Colors';
import Typography from '../styles/Typography';
import PButton from '../components/PButton';
import Icon from 'react-native-vector-icons/MaterialIcons';
import useNavigation from '../navigation/useNavigation';
import Entypo from 'react-native-vector-icons/Entypo';
import {RootState, actions, useAppSelector} from '../store/root.store';

const CartScreen = () => {
  const navigation = useNavigation();
  const cartList = useAppSelector((state: RootState) => state.cart.cart);
  const [productTotal, setProductTotal] = useState<number>(0);
  const [deliveryCharges] = useState<number>(2);

  useEffect(() => {
    const totalPrice = cartList.reduce((total, item) => total + item.price, 0);
    setProductTotal(totalPrice);
  }, [cartList]);

  const handleRemoveToCartProduct = async (id: number) => {
    await actions.cart.productDelete(id);
  };

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.header}>
        <TouchableOpacity
          style={styles.headerBack}
          onPress={() => navigation.goBack()}>
          <Icon name="keyboard-arrow-left" size={20} color={Colors.black100} />
        </TouchableOpacity>
        <Text style={styles.headerTitle}>Shopping Cart (5)</Text>
      </View>
      {cartList.length === 0 ? (
        <Text
          style={{
            color: Colors.black100,
          }}>
          No Item in cart.
        </Text>
      ) : (
        <>
          <View style={styles.cartListContainer}>
            <FlatList
              data={cartList}
              showsHorizontalScrollIndicator={false}
              renderItem={({item, index}) => {
                return (
                  <View key={index}>
                    <TouchableOpacity
                      style={styles.cartListItemContainer}
                      onPress={() =>
                        navigation.navigate('Details', {productId: item.id})
                      }>
                      <View style={styles.cartListItem}>
                        <Image
                          source={{uri: item.thumbnail}}
                          style={{height: 40, width: 40}}
                        />
                        <View style={styles.cartListDescriptionContainer}>
                          <Text style={styles.cartHeading}>{item.title}</Text>
                          <Text style={styles.cartListDescPrice}>
                            ${item.price}
                          </Text>
                        </View>
                      </View>
                      <View style={styles.addToCart}>
                        <TouchableOpacity
                          style={styles.addToCartIcon}
                          onPress={() =>
                            handleRemoveToCartProduct(Number(item.id))
                          }>
                          <Entypo
                            name="minus"
                            size={16}
                            color={Colors.black100}
                          />
                        </TouchableOpacity>
                        <Text style={styles.cartSubheading}>{item.qty}</Text>
                        <TouchableOpacity style={styles.addToCartIcon}>
                          <Entypo
                            name="plus"
                            size={16}
                            color={Colors.black100}
                          />
                        </TouchableOpacity>
                      </View>
                    </TouchableOpacity>
                  </View>
                );
              }}
            />
          </View>
          <View style={styles.cartTotalContainer}>
            <View style={styles.cartSummery}>
              <Text style={styles.cartHeading}>Subtotal</Text>
              <Text style={styles.cartSubheading}>${productTotal}</Text>
            </View>
            <View style={styles.cartSummery}>
              <Text style={styles.cartHeading}>Delivery</Text>
              <Text style={styles.cartSubheading}>${deliveryCharges}</Text>
            </View>
            <View style={styles.cartSummery}>
              <Text style={styles.cartHeading}>Total</Text>
              <Text style={styles.cartSubheading}>
                ${productTotal + deliveryCharges}
              </Text>
            </View>
            <View style={styles.checkoutBtnContainer}>
              <PButton
                type="primary"
                title="Proceed To checkout"
                mWidth={100}
              />
            </View>
          </View>
        </>
      )}
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#FFF',
    flex: 1,
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
  addToCart: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  addToCartIcon: {
    borderRadius: 100,
    backgroundColor: Colors.black10,
    width: 34,
    height: 34,
    alignItems: 'center',
    justifyContent: 'center',
  },
  headerTitle: {
    ...Typography.H3_Medium_20px,
    color: Colors.black90,
  },
  cartListDescriptionContainer: {
    marginLeft: 18,
  },
  cartListDescPrice: {
    ...Typography.H4_Bold_18px,
    color: Colors.black90,
  },
  cartListContainer: {
    paddingHorizontal: 20,
    paddingVertical: 10,
  },
  cartListItemContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    borderBottomWidth: 0.5,
    borderColor: Colors.Grey,
    paddingVertical: 14,
  },
  cartListItem: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  cartTotalContainer: {
    backgroundColor: Colors.black10,
    borderTopLeftRadius: 20,
    borderTopRightRadius: 20,
    padding: 28,
    marginHorizontal: 8,
    flexDirection: 'column',
    alignItems: 'center',
    position: 'absolute',
    bottom: 0,
    left: 0,
    right: 0,
  },
  cartSummery: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    width: '100%',
    paddingBottom: 8,
  },
  cartHeading: {
    ...Typography.Body1_Regular_16,
    color: Colors.black90,
  },
  cartSubheading: {
    ...Typography.H4_Bold_18px,
    color: Colors.black90,
    marginHorizontal: 8,
  },
  checkoutBtnContainer: {
    paddingHorizontal: 20,
    marginTop: 24,
  },
});

export default CartScreen;
