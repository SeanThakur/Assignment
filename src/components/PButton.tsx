import React from 'react';
import {
  TouchableOpacity,
  Text,
  StyleSheet,
  TouchableOpacityProps,
  Dimensions,
} from 'react-native';
import Colors from '../styles/Colors';
import Typography from '../styles/Typography';

const {width} = Dimensions.get('window');
const WIDTH_50 = width / 2 - 30;
const WIDTH_100 = width - 30;

type ButtonProps = {
  type: 'primary' | 'secondary';
  title: string;
  mWidth: number;
} & TouchableOpacityProps;

const PButton: React.FC<ButtonProps> = ({type, mWidth, title, ...rest}) => {
  const buttonStyles =
    type === 'primary'
      ? styles.primaryButton
      : type === 'secondary'
      ? styles.secondaryButton
      : {};

  return (
    <TouchableOpacity
      style={[
        styles.button,
        buttonStyles,
        {width: mWidth === 50 ? WIDTH_50 : WIDTH_100},
      ]}
      {...rest}>
      <Text
        style={[
          styles.buttonText,
          {color: type === 'primary' ? '#FFF' : Colors.primary},
        ]}>
        {title}
      </Text>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  button: {
    padding: 10,
    borderRadius: 20,
    justifyContent: 'center',
    alignItems: 'center',
    height: 56,
  },
  primaryButton: {
    backgroundColor: Colors.primary,
  },
  secondaryButton: {
    backgroundColor: Colors.black1,
    borderWidth: 1.5,
    borderColor: Colors.primary,
  },
  buttonText: {
    ...Typography.Body1_Semibold_16,
  },
});

export default PButton;
