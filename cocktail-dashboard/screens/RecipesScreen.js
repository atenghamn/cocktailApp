import {createNativeStackNavigator} from "@react-navigation/native-stack";
import SearchScreen from "./SearchScreen";
import PresentResultScreen from "./PresentResultScreen";

const RecipesScreen = () => {
    const Stack = createNativeStackNavigator();

    return (

        <Stack.Navigator
        screenOptions={{headerShown: false}}>
            <Stack.Screen name='searchScreen' component={SearchScreen} />
            <Stack.Screen name='presentResultScreen' component={PresentResultScreen} />
        </Stack.Navigator>

    )
}

export default RecipesScreen;