import React, { useState } from 'react'

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
import { RecipeProvider } from './src/context/RecipeContext'
import Favorites from './src/screens/Favorites'
import FollowersScreen from './src/screens/FollowersScreen'
import EditRecipe from './src/screens/EditRecipe'
LogBox.ignoreLogs(['Setting a timer for a long period of time'])
LogBox.ignoreLogs(['AsyncStorage has'])

const navigator = createStackNavigator(
  {
    SingUpScreen: SingUpScreen,
    LogInScreen: LogInScreen,
    Home: HomeScreen,
    FoodCategory: FoodCategory,
    ProfileScreen: ProfileScreen,
    CreateRecipe: CreateRecipe,
    Favorites: Favorites,
    FollowersScreen: FollowersScreen,
    EditRecipe: EditRecipe
  },
  {
    initialRouteName: 'LogInScreen',
    defaultNavigationOptions: {
      title: 'Recipe App'
    }
  }
)

const App = createAppContainer(navigator)
export default () => {
  return (
    <RecipeProvider>
      <App />
    </RecipeProvider>
  )
}
