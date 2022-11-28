import {FlatList, StyleSheet, Text, View} from "react-native";


const IngredientList = ({ ingredientlist }) => {

    const _renderIngredientList = ({ item : item}) => {
        return(
            <View style={styles.container}>
                <Text>{item.strIngredient}</Text>
            </View>
        )
    }

    return (
        <View style={styles.container}>
        <Text>Ingredient list</Text>
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