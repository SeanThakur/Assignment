import {StackNavigationProp} from '@react-navigation/stack';
import {RootStackParamList} from './RootStackParamList';

export type NavigationProps<T extends keyof RootStackParamList> = {
  navigation: StackNavigationProp<RootStackParamList, T>;
};
