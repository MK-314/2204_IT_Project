import { createAppContainer } from "react-navigation";
import { createStackNavigator } from "react-navigation-stack";
import FoodCategory from "./src/screens/FoodCategory";
import HomeScreen from "./src/screens/HomeScreen";

const navigator = createStackNavigator(
  {
    Home: HomeScreen,
    FoodCategory: FoodCategory
  },
  {
    initialRouteName: "Home",
    defaultNavigationOptions: {
      title: "Recipe App",
    },
  }
);

export default createAppContainer(navigator);
