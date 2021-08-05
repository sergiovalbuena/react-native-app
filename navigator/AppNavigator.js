import { createAppContainer } from 'react-navigation-stack';
import { createStackNavigator } from 'react-navigation-stack';
import { ScrollView as GHScrollView } from 'react-native-gesture-handler';
import HomeScreen from '../screens/HomeScreen';
import SectionScreen from '../screens/SectionScreen';

const AppNavigator = createStackNavigator({
    Home: HomeScreen,
    Section: SectionScreen
});

export default createAppContainer(AppNavigator);