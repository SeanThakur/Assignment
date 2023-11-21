import React from 'react';
import {View, StyleSheet} from 'react-native';
import Icon from 'react-native-vector-icons/AntDesign';
import FontAwesomIcon from 'react-native-vector-icons/FontAwesome';
import Colors from '../styles/Colors';

type StarRatingProps = {
  rating: number;
};

const Rating: React.FC<StarRatingProps> = ({rating}) => {
  const renderStars = () => {
    const stars = [];
    const numberOfFullStars = Math.floor(rating);
    const hasHalfStar = rating % 1 !== 0;

    // Render full stars
    for (let i = 0; i < numberOfFullStars; i++) {
      stars.push(
        <Icon key={i} name="star" size={24} color={Colors.highlight} />,
      );
    }

    // Render half star if necessary
    if (hasHalfStar) {
      stars.push(
        <FontAwesomIcon
          key="half"
          name="star-half-full"
          size={24}
          color={Colors.highlight}
        />,
      );
    }

    // Fill remaining stars if not a whole number
    const remainingStars = 5 - stars.length;
    for (let i = 0; i < remainingStars; i++) {
      stars.push(
        <Icon
          key={i + numberOfFullStars + 1}
          name="staro"
          size={24}
          color={Colors.highlight}
        />,
      );
    }

    return stars;
  };

  return <View style={styles.container}>{renderStars()}</View>;
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'center',
  },
});

export default Rating;
