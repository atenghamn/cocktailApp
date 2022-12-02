import {Pressable, StyleSheet, Text, View} from "react-native";
import DrinklistService from "../../services/drinklist-service";

import {useNavigation} from "@react-navigation/native";

const GetRandomDrink = ({ setDrinkList, drinklist }) => {
    const nav = useNavigation();
    const findRandomDrink = () => {
        DrinklistService.getRandom().then(fetchedData => {
            setDrinkList(fetchedData)
            nav.navigate('presentResultScreen', { drinklist, })
        })
    }

    return (
        <View>
            <Pressable
                style={styles.searchButton}
                onPress={findRandomDrink}
            >
                <Text>FIND ME A DRINK</Text>
            </Pressable>

        </View>
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