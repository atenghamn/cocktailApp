import {useRoute} from "@react-navigation/native";
import {useState} from "react";
import {View, StyleSheet, Pressable, Text} from "react-native";
import IngredientList from "../components/theCocktailDB/IngredientList";

const PresentIngredientScreen = ({navigation: {goBack}}) => {
    const route = useRoute();
    const [ingridientlist, setIngridientlist] = useState(route.params.ingridientlist);
    console.log("Inne från present ingredient screen", ingridientlist)
    return (
        <View style={styles.container}>
            <Pressable
                style={styles.backButton}
                onPress={() => goBack()}
            >
                <Text>Go BACK</Text>

            </Pressable>
 {ingridientlist !== null ?
                <IngredientList ingredientlist={ingridientlist} style={styles.ingredientlist} /> :
                    <Text> No ingredient matched your search </Text>
                }
        </View>
    )
}

const styles = StyleSheet.create({
    ingredientlist: {
        backgroundColor: "golden"
    },
    container: {
        flexDirection: 'column',
        alignItems: 'center',
        paddingVertical: 150,
        height: '100%',
    },
    backButton: {
        paddingHorizontal: 16,
        paddingVertical: 9,
        backgroundColor: 'gold',
        borderRadius: 5
    }
});

export default PresentIngredientScreen;