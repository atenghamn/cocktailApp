import {Pressable, StyleSheet, Text} from "react-native";

const GetRandomDrink = ({ setDrinkList, getRandomDrink }) => {

    const findRandomDrink = async () => {
        const res = await getRandomDrink();
        setDrinkList(res);
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
        backgroundColor: 'gold',
        borderRadius: 5
    }
})

export default GetRandomDrink;