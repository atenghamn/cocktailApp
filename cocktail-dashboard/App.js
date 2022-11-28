import {NavigationContainer} from "@react-navigation/native";
import {createBottomTabNavigator} from "@react-navigation/bottom-tabs";
import RecipesScreen from "./screens/RecipesScreen";
import MyRecipes from "./screens/MyRecipes";

import { FontAwesome5 } from '@expo/vector-icons';

export default function App() {

  const Tab = createBottomTabNavigator();

  return (
      <NavigationContainer>
        <Tab.Navigator
            screenOptions={({ route }) => ({
                headerShown: false,
                tabBarIcon: ({ color, size }) => {
                    let iconName;

                    if (route.name === 'Find Recipes') {
                        iconName = 'cocktail';
                    } else if (route.name === 'My Recipes') {
                        iconName = 'bookmark';
                    }
                    return <FontAwesome5 name={iconName} size={size} color={color} />;
                },
                tabBarActiveTintColor: 'tomato',
                tabBarInactiveTintColor: 'gray',
            })}
        >
          <Tab.Screen name="Find Recipes" component={RecipesScreen} />
          <Tab.Screen name="My Recipes" component={MyRecipes} />
        </Tab.Navigator>
      </NavigationContainer>
  );
}