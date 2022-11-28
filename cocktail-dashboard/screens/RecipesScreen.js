import {View, Text, StyleSheet} from "react-native"
import {useState} from "react";
import FindDrinkByName from "../components/theCocktailDB/FindDrinkByName";
import FindByIngridient from "../components/theCocktailDB/FindByIngridient";
import DrinkList from "../components/theCocktailDB/DrinkList";
import GetRandomDrink from "../components/theCocktailDB/GetRandomDrink";
import IngredientList from "../components/theCocktailDB/IngredientList";

const RecipesScreen = () => {
    const [drinklist, setDrinklist] = useState([]);
    const [ingredientlist, setIngredientlist] = useState([]);

    return (
        <View style={styles.container}>
{/*            <FindDrinkByName setDrinklist={setDrinklist}  />
            <FindByIngridient setIngredientlist={setIngredientlist}  />
            <GetRandomDrink setDrinkList={setDrinklist}  />*/}
            {drinklist !== undefined &&
                <DrinkList style={styles.drinklist} drinklist={drinklist}/>
            }
           {/* {ingredientlist !== undefined &&
                <IngredientList style={styles.drinklist} ingredientlist={ingredientlist} />
            }*/}
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

export default RecipesScreen;