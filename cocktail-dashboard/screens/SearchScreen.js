import {View, StyleSheet} from "react-native";
import {useState} from "react";
import FindByIngridient from "../components/theCocktailDB/FindByIngridient";
import GetRandomDrink from "../components/theCocktailDB/GetRandomDrink";
import FindDrinkByName from "../components/theCocktailDB/FindDrinkByName";

const SearchScreen = () => {
    const [drinklist, setDrinklist] = useState([]);
    const [ingredientlist, setIngredientlist] = useState([]);

    return(
        <View style={styles.container}>
            <FindDrinkByName setDrinklist={setDrinklist} drinklist={drinklist} />
            <FindByIngridient setIngredientlist={setIngredientlist} ingridientlist={ingredientlist}  />
            <GetRandomDrink setDrinkList={setDrinklist}  />
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center',
    },
    drinklist: {
        backgroundColor: "golden"
    }
});
export default SearchScreen;
