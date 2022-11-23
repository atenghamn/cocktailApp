import {deleteById, findAll} from "../util/db";
import {StyleSheet, FlatList, Pressable, Text, View} from "react-native";


const CocktailList = ({cocktailList, setCocktailList}) => {

    const removeCocktail = async (id) => {
        await deleteById(id)
        const res = await findAll()
        setCocktailList(res);
    }

    const _renderCocktail = ({item : cocktail}) => {
        return (
            <View>
                <Text style={styles.text}>{cocktail.title}</Text>
                <Pressable
                    onPress={() => removeCocktail(cocktail.id)}
                >
                    <Text style={styles.text}>Remove</Text>
                </Pressable>
            </View>
        )
    }

    return (
        <View style={styles.container}>
            <FlatList data={cocktailList} renderItem={_renderCocktail} />
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        marginTop: 100
    },
    text: {
        backgroundColor: '#FFF',
        padding: 10,
        margin: 25,
        width: '60%',
        borderRadius: 5
    }
});

export default CocktailList;