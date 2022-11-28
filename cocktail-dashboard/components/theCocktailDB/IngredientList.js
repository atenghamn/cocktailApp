import {FlatList, StyleSheet, Text, View} from "react-native";
import IngredientModal from "./IngredientModal";


const IngredientList = ({ ingredientlist }) => {

    const _renderIngredientList = ({ item : item}) => {
        return(
            <View style={styles.container}>
                <IngredientModal item={item}/>
            </View>
        )
    }

    return (
        <View style={styles.container}>
            <FlatList data={ingredientlist.ingredients} renderItem={_renderIngredientList} />
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        marginTop: 100
    }
})

export default IngredientList;