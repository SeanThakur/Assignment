import React, {useEffect, useState} from 'react';
import {
  ActivityIndicator,
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import {SafeAreaView} from 'react-native-safe-area-context';
import Colors from '../styles/Colors';
import Typography from '../styles/Typography';
import PButton from '../components/PButton';
import Icon from 'react-native-vector-icons/MaterialIcons';
import AntIcon from 'react-native-vector-icons/AntDesign';
import Rating from '../components/Rating';
import useNavigation from '../navigation/useNavigation';
import {RootState, actions, useAppSelector} from '../store/root.store';
import Carousel from '../components/Carousel';
import {ProductsEntity} from '../store/products/products.entity';

type DetailsScreenProps = {
  route: {
    params: {
      productId: string;
    };
  };
};

const DetailsScreen: React.FC<DetailsScreenProps> = ({route}) => {
  const navigation = useNavigation();
  const {productId} = route.params;
  const productDetails = useAppSelector(
    (state: RootState) => state.productDetails.productDetails,
  );
  const cartList = useAppSelector((state: RootState) => state.cart.cart);

  const [loading, setLoading] = useState<boolean>(false);

  const handleAddToCartProduct = async (item: ProductsEntity) => {
    await actions.cart.productAdd(item);
  };

  useEffect(() => {
    const handleGetProductDetailsList = async () => {
      try {
        setLoading(true);
        await actions.productDetails.getProductDetailsList(Number(productId));
      } finally {
        setLoading(false);
      }
    };
    handleGetProductDetailsList();
  }, [productId]);

  return (
    <SafeAreaView style={styles.container}>
      <ScrollView showsVerticalScrollIndicator={false}>
        <View style={styles.header}>
          <TouchableOpacity
            style={styles.headerBack}
            onPress={() => navigation.navigate('Home')}>
            <Icon
              name="keyboard-arrow-left"
              size={20}
              color={Colors.black100}
            />
          </TouchableOpacity>
          <TouchableOpacity
            style={styles.cartCountContainer}
            onPress={() => navigation.navigate('Cart')}>
            <View style={styles.cartListCount}>
              <Text style={styles.cartListCountText}>{cartList.length}</Text>
            </View>
            <AntIcon name="shoppingcart" size={32} color={Colors.black60} />
          </TouchableOpacity>
        </View>
        <Text style={[styles.detailsText, styles.detailsChoice]}>
          Thin Choise
        </Text>
        <Text style={[styles.detailsText, styles.detailsOrange]}>
          Top Orange
        </Text>
        {loading ? (
          <ActivityIndicator size={'large'} />
        ) : (
          <>
            <View style={styles.ratingContainer}>
              <Rating rating={productDetails?.rating || 0} />
              <Text style={styles.ratingReviewsText}>110 Review</Text>
            </View>
            <View style={styles.imageCarousel}>
              <Carousel data={productDetails?.images} />
            </View>
            <View style={styles.priceContainer}>
              <Text style={styles.priceText}>${productDetails?.price}/KG</Text>
              <View style={styles.priceLableContainer}>
                <Text style={styles.priceLable}>
                  ${productDetails?.discountPercentage} OFF
                </Text>
              </View>
            </View>
            <View style={styles.buttonContainer}>
              <PButton
                title="Add To Cart"
                type={'secondary'}
                mWidth={50}
                onPress={() => handleAddToCartProduct(productDetails)}
              />
              <PButton
                title="Buy Now"
                type={'primary'}
                mWidth={50}
                onPress={() => navigation.navigate('Cart')}
              />
            </View>
            <View style={styles.detailsContainer}>
              <Text style={styles.detailTitle}>Details</Text>
              <Text style={styles.detailSubtitle}>
                {productDetails?.description}
              </Text>
            </View>
          </>
        )}
      </ScrollView>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {backgroundColor: '#FFF', flex: 1},
  header: {
    paddingHorizontal: 20,
    paddingVertical: 30,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  headerBack: {
    borderRadius: 100,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: Colors.black20,
    height: 36,
    width: 36,
  },
  detailsText: {
    fontSize: 50,
    color: Colors.GreyScale_black,
    paddingHorizontal: 20,
  },
  detailsOrange: {
    fontWeight: '800',
    fontFamily: 'Manrope-Bold',
  },
  detailsChoice: {
    fontWeight: '300',
    fontFamily: 'Manrope-Regular',
  },
  ratingContainer: {
    paddingHorizontal: 20,
    paddingVertical: 20,
    flexDirection: 'row',
    alignItems: 'center',
  },
  ratingReviewsText: {
    marginLeft: 4,
    color: Colors.black20,
    ...Typography.Body2_Regular_14,
  },
  imageCarousel: {
    height: 207,
    backgroundColor: Colors.black1,
  },
  imageCarouselItem: {
    height: 207,
    width: 'auto',
    resizeMode: 'contain',
  },
  priceContainer: {
    paddingHorizontal: 20,
    paddingTop: 28,
    flexDirection: 'row',
    alignItems: 'center',
  },
  priceText: {
    ...Typography.H3_Bold_20px,
    color: Colors.primary,
  },
  priceLableContainer: {
    borderRadius: 100,
    backgroundColor: Colors.primary,
    paddingVertical: 6,
    paddingHorizontal: 10,
    marginLeft: 14,
  },
  priceLable: {
    ...Typography.Body1_Medium_16,
    color: Colors.black1,
  },
  buttonContainer: {
    paddingHorizontal: 20,
    paddingTop: 20,
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  detailsContainer: {
    padding: 28,
  },
  detailTitle: {
    color: Colors.black100,
    ...Typography.Body1_Medium_16,
    paddingBottom: 4,
  },
  detailSubtitle: {
    color: Colors.black45,
    ...Typography.Body1_Regular_16,
    lineHeight: 24,
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

export default DetailsScreen;
