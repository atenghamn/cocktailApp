import {useState} from "react";
import {StyleSheet, Keyboard, Pressable, Text, TextInput, View} from "react-native";
import Coktail from "../entities/Coktail";
import {findAll, insert} from "../util/db";

const CocktailInput = ({ cocktailList, setCocktailList }) => {

    const [titleText, setTitleText] = useState("");
    const [glassText, setGlassText] = useState("");
    const [instructions, setInstructions] = useState("");
    const [ingredient1, setIngredient1] = useState("");
    const [ingredient2, setIngredient2] = useState("");
    const [ingredient3, setIngredient3] = useState("");
    const [ingredient4, setIngredient4] = useState("");
    const [ingredient5, setIngredient5] = useState("");
    const [ingredient6, setIngredient6] = useState("");
    const [ingredient7, setIngredient7] = useState("");
    const [ingredient8, setIngredient8] = useState("");
    const [ingredient9, setIngredient9] = useState("");
    const [ingredient10, setIngredient10] = useState("");
    const [measure1, setMeasure1] = useState("");
    const [measure2, setMeasure2] = useState("");
    const [measure3, setMeasure3] = useState("");
    const [measure4, setMeasure4] = useState("");
    const [measure5, setMeasure5] = useState("");
    const [measure6, setMeasure6] = useState("");
    const [measure7, setMeasure7] = useState("");
    const [measure8, setMeasure8] = useState("");
    const [measure9, setMeasure9] = useState("");
    const [measure10, setMeasure10] = useState("");

    const handleChangedTitle = text => setTitleText(text);
    const handleChangedGlass = text => setGlassText(text);
    const handleInstructions = text => setInstructions(text);
    const handleIngredient1 = text => setIngredient1(text);
    const handleIngredient2 = text => setIngredient2(text);
    const handleIngredient3 = text => setIngredient3(text);
    const handleIngredient4 = text => setIngredient4(text);
    const handleIngredient5 = text => setIngredient5(text);
    const handleIngredient6 = text => setIngredient6(text);
    const handleIngredient7 = text => setIngredient7(text);
    const handleIngredient8 = text => setIngredient8(text);
    const handleIngredient9 = text => setIngredient9(text);
    const handleIngredient10 = text => setIngredient10(text);
    const handleMeasure1 = text => setMeasure1(text);
    const handleMeasure2 = text => setMeasure2(text);
    const handleMeasure3 = text => setMeasure3(text);
    const handleMeasure4 = text => setMeasure4(text);
    const handleMeasure5 = text => setMeasure5(text);
    const handleMeasure6 = text => setMeasure6(text);
    const handleMeasure7 = text => setMeasure7(text);
    const handleMeasure8 = text => setMeasure8(text);
    const handleMeasure9 = text => setMeasure9(text);
    const handleMeasure10 = text => setMeasure10(text);

    const generateId = (prevarr) => {
        return prevarr.length ? Math.max(...prevarr.map(cockTail => cockTail.id)) + 1 : 1
    }

    const addItem = async () => {
        Keyboard.dismiss();
        const id = generateId(cocktailList)
        await insert(new Coktail(id, titleText, glassText, instructions, ingredient1, ingredient2, ingredient3, ingredient4,
            ingredient5, ingredient6, ingredient7, ingredient8, ingredient9, ingredient10, measure1, measure2, measure3, measure4,
            measure5, measure6, measure7, measure8, measure9, measure10));
        const res = await findAll();
        setCocktailList(res);

    }
    return(
        <View style={styles.container}>
            <TextInput
                style={styles.textInput}
                placeholder='Title'
                value={titleText}
                onChangeText={handleChangedTitle}
                />
          <TextInput
                style={styles.textInput}
                placeholder='Glass type'
                value={glassText}
                onChangeText={handleChangedGlass}
                />
          <TextInput
                style={styles.textInput}
                placeholder='Instructions'
                value={instructions}
                onChangeText={handleInstructions}
                />
          <TextInput
                style={styles.textInput}
                placeholder='Ingredient'
                value={ingredient1}
                onChangeText={handleIngredient1}
                />
          <TextInput
                style={styles.textInput}
                placeholder='Ingredient'
                value={ingredient2}
                onChangeText={handleIngredient2}
                />
          <TextInput
                style={styles.textInput}
                placeholder='Ingredient'
                value={ingredient3}
                onChangeText={handleIngredient3}
                />
          <TextInput
                style={styles.textInput}
                placeholder='Ingredient'
                value={ingredient4}
                onChangeText={handleIngredient4}
                />
          <TextInput
                style={styles.textInput}
                placeholder='Ingredient'
                value={ingredient5}
                onChangeText={handleIngredient5}
                />
          <TextInput
                style={styles.textInput}
                placeholder='Ingredient'
                value={ingredient6}
                onChangeText={handleIngredient6}
                />
          <TextInput
                style={styles.textInput}
                placeholder='Ingredient'
                value={ingredient7}
                onChangeText={handleIngredient7}
                />
          <TextInput
                style={styles.textInput}
                placeholder='Ingredient'
                value={ingredient8}
                onChangeText={handleIngredient8}
                />
          <TextInput
                style={styles.textInput}
                placeholder='Ingredient'
                value={ingredient9}
                onChangeText={handleIngredient9}
                />
          <TextInput
                style={styles.textInput}
                placeholder='Ingredient'
                value={ingredient10}
                onChangeText={handleIngredient10}
                />
          <TextInput
                style={styles.textInput}
                placeholder='Measure'
                value={measure1}
                onChangeText={handleMeasure1}
                />
          <TextInput
                style={styles.textInput}
                placeholder='Measure'
                value={measure2}
                onChangeText={handleMeasure2}
                />
          <TextInput
                style={styles.textInput}
                placeholder='Measure'
                value={measure3}
                onChangeText={handleMeasure3}
                />
          <TextInput
                style={styles.textInput}
                placeholder='Measure'
                value={measure4}
                onChangeText={handleMeasure4}
                />
          <TextInput
                style={styles.textInput}
                placeholder='Measure'
                value={measure5}
                onChangeText={handleMeasure5}
                />
          <TextInput
                style={styles.textInput}
                placeholder='Measure'
                value={measure6}
                onChangeText={handleMeasure6}
                />
          <TextInput
                style={styles.textInput}
                placeholder='Measure'
                value={measure7}
                onChangeText={handleMeasure7}
                />
          <TextInput
                style={styles.textInput}
                placeholder='Measure'
                value={measure8}
                onChangeText={handleMeasure8}
                />
          <TextInput
                style={styles.textInput}
                placeholder='Measure'
                value={measure9}
                onChangeText={handleMeasure9}
                />
          <TextInput
                style={styles.textInput}
                placeholder='Measure'
                value={measure10}
                onChangeText={handleMeasure10}
                />
            <Pressable
                style={({ pressed }) => [styles.addButton, { opacity: pressed ? 0.5 : 1.0 }]}
                onPress={addItem}
                >
                <Text style={styles.addButton}>Add</Text>
            </Pressable>

        </View>
    )
}


const styles = StyleSheet.create({
    container: {
        flexDirection: 'column',
        alignItems: 'center',
    },
    textInput: {
        backgroundColor: '#FFF',
        padding: 10,
        margin: 25,
        width: '60%',
        borderRadius: 5
    },
    addButton: {
        paddingHorizontal: 16,
        paddingVertical: 9,
        backgroundColor: 'gold',
        borderRadius: 5
    }
})

export default CocktailInput;