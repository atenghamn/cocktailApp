import {useNavigation} from "@react-navigation/native";
import {Pressable, StyleSheet, View} from "react-native";
import DrinkList from "../components/theCocktailDB/DrinkList";
import IngredientList from "../components/theCocktailDB/IngredientList";

const PresentResultScreen = ({drinklist}) => {
    const nav = useNavigation()
    const goBack = () => {
        nav.navigate('RecipesScreen', {})
    }
    return (
        <View>
            <Pressable
            onPress={goBack}>GO BACK</Pressable>
             {drinklist !== undefined &&
                <DrinkList style={styles.drinklist} drinklist={drinklist}/>
            }
        </View>
    )
}

const styles = StyleSheet.create({
 drinklist: {
        backgroundColor: "golden"
    }
});

export default PresentResultScreen;