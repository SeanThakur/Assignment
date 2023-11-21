import React, {useRef, useEffect, useState} from 'react';
import {
  View,
  FlatList,
  Dimensions,
  Image,
  ListRenderItem,
  StyleSheet,
} from 'react-native';

type CarouselProps = {
  data?: string[];
};

const Carousel: React.FC<CarouselProps> = ({data = []}) => {
  const flatListRef = useRef<FlatList | null>(null);
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      if (currentIndex < data.length - 1) {
        flatListRef.current?.scrollToIndex({
          animated: true,
          index: currentIndex + 1,
        });
        setCurrentIndex(currentIndex + 1);
      } else {
        flatListRef.current?.scrollToIndex({animated: true, index: 0});
        setCurrentIndex(0);
      }
    }, 8000);

    return () => clearInterval(interval);
  }, [currentIndex, data.length]);

  const renderItem: ListRenderItem<string> = ({item}) => {
    return (
      <View style={styles.container}>
        <Image source={{uri: item}} style={styles.image} />
      </View>
    );
  };

  return (
    <FlatList
      ref={flatListRef}
      data={data}
      renderItem={renderItem}
      horizontal
      pagingEnabled
      showsHorizontalScrollIndicator={false}
      keyExtractor={(item, index) => index.toString()}
    />
  );
};

const styles = StyleSheet.create({
  container: {
    width: Dimensions.get('window').width,
    height: 200,
  },
  image: {
    width: '100%',
    height: '100%',
  },
});

export default Carousel;
