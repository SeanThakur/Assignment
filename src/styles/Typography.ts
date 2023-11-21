import {TextStyle} from 'react-native';

type TypographyWeights =
  | 'normal'
  | 'bold'
  | '100'
  | '200'
  | '300'
  | '400'
  | '500'
  | '600'
  | '700'
  | '800'
  | '900';

type TypographyStyles = {
  [key: string]: TextStyle & {fontWeight: TypographyWeights};
};

const Typography: TypographyStyles = {
  H1_Bold_30px: {
    fontSize: 30,
    fontWeight: '700',
    fontFamily: 'Manrope-Bold',
  },
  H1_Semibold_30px: {
    fontSize: 30,
    fontWeight: '600',
    fontFamily: 'Manrope-SemiBold',
  },
  H1_Medium_30px: {
    fontSize: 30,
    fontWeight: '500',
    fontFamily: 'Manrope-Medium',
  },
  H1_Regular_30px: {
    fontSize: 30,
    fontWeight: '400',
    fontFamily: 'Manrope-Regular',
  },
  H2_Bold_26px: {
    fontSize: 26,
    fontWeight: '700',
    fontFamily: 'Manrope-Bold',
  },
  H2_Semibold_26px: {
    fontSize: 26,
    fontWeight: '600',
    fontFamily: 'Manrope-SemiBold',
  },
  H2_Medium_26px: {
    fontSize: 26,
    fontWeight: '500',
    fontFamily: 'Manrope-Medium',
  },
  H2_Regular_26px: {
    fontSize: 26,
    fontWeight: '400',
    fontFamily: 'Manrope-Regular',
  },
  H3_Bold_20px: {
    fontSize: 20,
    fontWeight: '700',
    fontFamily: 'Manrope-Bold',
  },
  H3_Semibold_20px: {
    fontSize: 20,
    fontWeight: '600',
    fontFamily: 'Manrope-SemiBold',
  },
  H3_Medium_20px: {
    fontSize: 20,
    fontWeight: '500',
    fontFamily: 'Manrope-Medium',
  },
  H3_Regular_20px: {
    fontSize: 20,
    fontWeight: '400',
    fontFamily: 'Manrope-Regular',
  },
  H4_Bold_18px: {
    fontSize: 18,
    fontWeight: '700',
    fontFamily: 'Manrope-Bold',
  },
  H4_Semibold_18px: {
    fontSize: 18,
    fontWeight: '600',
    fontFamily: 'Manrope-SemiBold',
  },
  H4_Medium_18px: {
    fontSize: 18,
    fontWeight: '500',
    fontFamily: 'Manrope-Medium',
  },
  H4_Regular_18px: {
    fontSize: 18,
    fontWeight: '400',
    fontFamily: 'Manrope-Regular',
  },
  Body1_Semibold_16: {
    fontSize: 16,
    fontWeight: '600',
    fontFamily: 'Manrope-SemiBold',
  },
  Body1_Medium_16: {
    fontSize: 16,
    fontWeight: '500',
    fontFamily: 'Manrope-Medium',
  },
  Body1_Regular_16: {
    fontSize: 16,
    fontWeight: '400',
    fontFamily: 'Manrope-Regular',
  },
  Body2_Semibold_14: {
    fontSize: 14,
    fontWeight: '600',
    fontFamily: 'Manrope-SemiBold',
  },
  Body2_Medium_14: {
    fontSize: 14,
    fontWeight: '500',
    fontFamily: 'Manrope-Medium',
  },
  Body2_Regular_14: {
    fontSize: 14,
    fontWeight: '400',
    fontFamily: 'Manrope-Regular',
  },
  Label_Medium_12: {
    fontSize: 12,
    fontWeight: '500',
    fontFamily: 'Manrope-Medium',
  },
  Label_Regular_12: {
    fontSize: 12,
    fontWeight: '400',
    fontFamily: 'Manrope-Regular',
  },
  Button1_14: {
    fontSize: 14,
    fontWeight: '500',
    fontFamily: 'Manrope-Medium',
  },
  Button2_12: {
    fontSize: 12,
    fontWeight: '500',
    fontFamily: 'Manrope-Medium',
  },
};

export default Typography;
