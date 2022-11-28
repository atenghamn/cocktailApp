import {Pressable, Text, TextInput, View, StyleSheet} from "react-native";
import {useState} from "react";
import DrinklistService from "../../services/drinklist-service";

const FindDrinkByName = ({ setDrinklist }) => {
    const [drinkName, setDrinkName] = useState("");
    const handleChangedName = text => setDrinkName(text);
    const searchWithName = () => {

        DrinklistService.getByName(drinkName).then(fetchedData => {
            setDrinklist(fetchedData)
        })
    }

    return (
        <View>
            <TextInput
                style={styles.textInput}
                placeholder = "Find drink by name"
                value = {drinkName}
                onChangeText={handleChangedName}
                />
            <Pressable
                style={styles.searchButton}
                onPress={searchWithName}
            >
                <Text>SEARCH</Text>
            </Pressable>
        </View>
    )
}

const styles = StyleSheet.create({
     container: {
        flexDirection: 'row',
        alignItems: 'center',
    },
    textInput: {
        backgroundColor: '#FFF',
        padding: 10,
        margin: 25,
        width: '60%',
        borderRadius: 5
    },
    searchButton: {
        paddingHorizontal: 16,
        paddingVertical: 9,
        backgroundColor: 'gold',
        borderRadius: 5
    }
})
export default FindDrinkByName;