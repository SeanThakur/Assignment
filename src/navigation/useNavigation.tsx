import {useNavigation as useReactNavigation} from '@react-navigation/native';
import {StackNavigationProp} from '@react-navigation/stack'; // Import your navigation prop types
import {RootStackParamList} from './RootStackParamList';

type MyNavigationProps = StackNavigationProp<RootStackParamList, 'Home'>; // Replace 'Home' with your main screen

type NavigationHook = () => MyNavigationProps;

const useNavigation: NavigationHook = () => {
  const navigation = useReactNavigation<MyNavigationProps>();
  return navigation;
};

export default useNavigation;
