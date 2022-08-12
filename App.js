import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import SearchScreen from './src/screens/SearchScreen';
import SearchDetailScreen from './src/screens/SearchDetailScreen';

const navigator = createStackNavigator({
   Search: SearchScreen,
   SearchDetail: SearchDetailScreen
}, {
  initialRouteName: 'Search',
  defaultNavigationOptions: {
    title: 'BusinessSearch',
  }
});

export default createAppContainer(navigator);