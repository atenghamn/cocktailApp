import {deleteById, findAll} from "../../util/db";
import {StyleSheet, FlatList, Pressable, Text, ScrollView, View} from "react-native";


const CocktailList = ({cocktailList, setCocktailList}) => {

    const removeCocktail = async (id) => {
        await deleteById(id)
        const res = await findAll()
        setCocktailList(res);
    }
    const _renderCocktail = ({item : item}) => {
        return (
            <View>
                <Text style={item.text}>{item.title}</Text>
                <Pressable
                    onPress={() => removeCocktail(item.id)}
                >
                    <Text style={styles.text}>Remove</Text>
                </Pressable>
            </View>
        )
    }

    return (
            <View style={styles.container}>
                <FlatList
                    style={styles.list}
                    data={cocktailList}
                    renderItem={_renderCocktail}
                />
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
        borderRadius: 5,
    },
    list: {
        flex: 1,
    }
});

export default CocktailList;