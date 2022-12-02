import {createNativeStackNavigator} from "@react-navigation/native-stack";
import SearchScreen from "./SearchScreen";
import PresentResultScreen from "./PresentResultScreen";
import PresentIngredientScreen from "./PresentIngredientScreen";

const RecipesScreen = () => {
    const Stack = createNativeStackNavigator();

    return (

        <Stack.Navigator
        screenOptions={{headerShown: false}}>
            <Stack.Screen name='searchScreen' component={SearchScreen} />
            <Stack.Screen name='presentResultScreen' component={PresentResultScreen} />
            <Stack.Screen name={'presentIngredientScreen'} component={PresentIngredientScreen} />
        </Stack.Navigator>

    )
}

export default RecipesScreen;