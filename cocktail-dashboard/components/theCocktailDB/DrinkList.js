import {FlatList, Text, View, StyleSheet} from "react-native";

const DrinkList = ({ drinkList }) => {
 const _renderDrinkList = ({item: item}) => {
    return (
        <View style={styles.container}>
            <Text style={styles.text}>{item.title}</Text>
        </View>
    )
 }
    return (
        <View style={styles.container}>
            <FlatList data={drinkList} renderItem={_renderDrinkList} />
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
})

export default DrinkList;