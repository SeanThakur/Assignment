import React from 'react';
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  FlatList,
  Dimensions,
  ListRenderItem,
  Image,
} from 'react-native';
import Colors from '../styles/Colors';
import Typography from '../styles/Typography';
import {ProductsEntity} from '../store/products/products.entity';
import useNavigation from '../navigation/useNavigation';
import Entypo from 'react-native-vector-icons/Entypo';
import {RootState, actions, useAppSelector} from '../store/root.store';
import {FavouriteEntity} from '../store/favourite/favourite.entity';

const {width} = Dimensions.get('window');
const CARD_WIDTH = width / 2 - 20;
const CARD_IMAGE_WIDTH = width / 2 - 50;

type GridCardProps = {
  data: ProductsEntity[];
};

const GridCard: React.FC<GridCardProps> = ({data}) => {
  const navigation = useNavigation();

  const favouriteList = useAppSelector(
    (state: RootState) => state.favourite.favourite,
  );

  const handleAddToCartProduct = async (item: ProductsEntity) => {
    await actions.cart.productAdd(item);
  };

  const handleFav = async (item: ProductsEntity) => {
    const productExist = favouriteList.find(
      (favItem: FavouriteEntity) => Number(item.id) === Number(favItem.id),
    );
    if (productExist) {
      await actions.favourite.productDelete(item.id);
    } else {
      const favData = {
        ...item,
        qty: 1,
      };
      await actions.favourite.productAdd(favData);
    }
  };

  const renderItem: ListRenderItem<ProductsEntity> = ({item}) => (
    <TouchableOpacity
      key={item.id}
      style={[styles.card]}
      onPress={() => navigation.navigate('Details', {productId: item.id})}>
      <TouchableOpacity
        style={styles.favContainer}
        onPress={() => handleFav(item)}>
        <Entypo name={'heart'} size={28} color={Colors.pinkShade} />
      </TouchableOpacity>
      <Image source={{uri: item.thumbnail}} style={styles.cardImage} />
      <View style={styles.cardInfoContainer}>
        <View>
          <Text style={styles.cardPriceText}>${item.price}</Text>
          <Text numberOfLines={1} ellipsizeMode="clip" style={styles.cardText}>
            {item.title}
          </Text>
        </View>
        <TouchableOpacity
          style={styles.addToCart}
          onPress={() => handleAddToCartProduct(item)}>
          <Entypo name="plus" size={16} color={Colors.black1} />
        </TouchableOpacity>
      </View>
    </TouchableOpacity>
  );

  return (
    <FlatList
      data={data}
      numColumns={2}
      renderItem={renderItem}
      keyExtractor={item => item.id.toString()}
      contentContainerStyle={styles.container}
    />
  );
};

const styles = StyleSheet.create({
  container: {
    paddingHorizontal: 10,
    paddingVertical: 18,
  },
  favContainer: {
    position: 'absolute',
    left: 10,
    top: 10,
    zIndex: 99,
  },
  card: {
    width: CARD_WIDTH,
    height: 194,
    justifyContent: 'space-between',
    alignItems: 'flex-start',
    margin: 5,
    borderRadius: 10,
    backgroundColor: Colors.black10,
    opacity: 0.8,
    padding: 16,
  },
  cardInfoContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    width: '100%',
  },
  addToCart: {
    borderRadius: 100,
    backgroundColor: Colors.primary,
    height: 28,
    width: 28,
    alignItems: 'center',
    justifyContent: 'center',
  },
  cardImage: {
    height: 124,
    width: CARD_IMAGE_WIDTH,
    resizeMode: 'contain',
  },
  cardPriceText: {
    color: Colors.black100,
    ...Typography.H4_Bold_18px,
    paddingBottom: 2,
  },
  cardText: {
    color: Colors.black45,
    ...Typography.Body1_Regular_16,
  },
});

export default GridCard;
