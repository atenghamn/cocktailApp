import {Pressable, Text, TextInput, View, StyleSheet} from "react-native";
import {useState} from "react";
import DrinklistService from "../../services/drinklist-service";

const FindByIngridient = ({ setIngredientlist }) => {

    const [ingridient, setIngridient] = useState("");
    const handleChangedIngridient = text => setIngridient(text);
    const searchWithIngridient = async () => {

        DrinklistService.getByIngridient(ingridient).then(fetchedData => {
            console.log(fetchedData)
            setIngredientlist(fetchedData);
        })
    }

    return (
        <View>
            <TextInput
                style={styles.textInput}
                placeholder = "Find drink by ingridient"
                value = {ingridient}
                onChangeText={handleChangedIngridient}
                />
            <Pressable
                style={styles.searchButton}
                onPress={searchWithIngridient}
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

export default FindByIngridient;