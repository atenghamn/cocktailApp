import {Pressable, StyleSheet, Text} from "react-native";
import DrinklistService from "../../services/drinklist-service";

const GetRandomDrink = ({ setDrinkList, getRandomDrink }) => {

    const findRandomDrink = () => {
        DrinklistService.getRandom().then(fetchedData => {
            setDrinkList(fetchedData)
        })
    }

    return (
        <Pressable
            style={styles.searchButton}
            onPress={findRandomDrink}
        >
            <Text>FIND ME A DRINK</Text>
        </Pressable>
    )
}

const styles = StyleSheet.create({
     searchButton: {
        paddingHorizontal: 16,
        paddingVertical: 9,
        backgroundColor: "gold",
        borderRadius: 5,
        margin: 15
    }
})

export default GetRandomDrink;