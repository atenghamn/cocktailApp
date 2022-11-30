import {StyleSheet, Pressable, Text, TextInput, View} from "react-native";
import {useState} from "react";
import {findAll, findById} from "../../util/db";


const CocktailFinder = ({ setCocktailList }) => {

    const [id, setId] = useState(0)
    const handleChangedId = text => setId(text);
    const searchWithId = async () => {
        const res = !id ? await findAll() :  await findById(id)
        setCocktailList(res)
    }

    return (
        <View style={styles.container}>
            <TextInput
                style={styles.textInput}
                placeholder="Find by id"
                value={id}
                onChangeText={handleChangedId}
            />
            <Pressable
                style={styles.searchButton}
                onPress={searchWithId}
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
        marginTop: 40
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

export default CocktailFinder;