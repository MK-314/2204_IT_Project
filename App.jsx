import { createAppContainer } from 'react-navigation'
import { createStackNavigator } from 'react-navigation-stack'
import FoodCategory from './src/screens/FoodCategory'
import HomeScreen from './src/screens/HomeScreen'
import LogInScreen from './src/screens/LogInScreen'
// warning:
import { LogBox } from 'react-native'
import ProfileScreen from './src/screens/ProfileScreen'
import SingUpScreen from './src/screens/SingUpScreen'
import CreateRecipe from './src/screens/CreateRecipe'
LogBox.ignoreLogs(['Setting a timer for a long period of time'])
LogBox.ignoreLogs(['AsyncStorage has been extracted from react-native core'])

const navigator = createStackNavigator(
  {
    SingUpScreen: SingUpScreen,
    LogInScreen: LogInScreen,
    Home: HomeScreen,
    FoodCategory: FoodCategory,
    ProfileScreen: ProfileScreen,
    CreateRecipe: CreateRecipe
  },
  {
    initialRouteName: 'SingUpScreen',
    defaultNavigationOptions: {
      title: 'Recipe App'
    }
  }
)

export default createAppContainer(navigator)
