import {FlatList, Text, View, StyleSheet} from "react-native";
import DrinkModal from "./DrinkModal";

const DrinkList = ({ drinklist }) => {
 const _renderDrinkList = ({item : item}) => {
    return (
        <View style={styles.container}>
            <DrinkModal item={item}/>
        </View>
    )
 }
    return (
        <View style={styles.container}>
            <FlatList data={drinklist.drinks} renderItem={_renderDrinkList} />
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'space-around',
        marginTop: 100,
    },
    text: {
        backgroundColor: '#FFFF',
        padding: 10,
        margin: 25,
        width: '60%',
        borderRadius: 5,
    },
})

export default DrinkList;