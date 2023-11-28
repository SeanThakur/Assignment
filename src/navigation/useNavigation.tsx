import {useNavigation as useReactNavigation} from '@react-navigation/native';
import {StackNavigationProp} from '@react-navigation/stack';
import {RootStackParamList} from './RootStackParamList';

type MyNavigationProps = StackNavigationProp<RootStackParamList, 'Home'>;

type NavigationHook = () => MyNavigationProps;

const useNavigation: NavigationHook = () => {
  const navigation = useReactNavigation<MyNavigationProps>();
  return navigation;
};

export default useNavigation;
