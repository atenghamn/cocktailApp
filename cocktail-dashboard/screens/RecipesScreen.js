import {View, Text, StyleSheet} from "react-native"
import {useState} from "react";
import DrinklistService from "../services/drinklist-service";
import FindDrinkByName from "../components/theCocktailDB/FindDrinkByName";
import FindByIngridient from "../components/theCocktailDB/FindByIngridient";
import DrinkList from "../components/theCocktailDB/DrinkList";
import GetRandomDrink from "../components/theCocktailDB/GetRandomDrink";

const RecipesScreen = () => {
    const [drinklist, setDrinklist] = useState([]);

  const getByName = (name) => {
      DrinklistService.getByName(name)
          .then(newDrinkList => {
              setDrinklist(newDrinkList)
          })
  }

  const getByIngridient = (name) => {
      DrinklistService.getByIngridient(name)
          .then(newDrinkList => {
              setDrinklist(newDrinkList)
          })
  }

  const getRandom = () => {
      DrinklistService.getRandom()
          .then(newDrinkList => {
              setDrinklist(newDrinkList)
          })
  }

    return (
        <View style={styles.container}>
            <Text> RecipeScreen</Text>
            <FindDrinkByName setDrinklist={setDrinklist} findByName={getByName} />
            <FindByIngridient setDrinklist={setDrinklist} findByIngridient={getByIngridient} />
            <GetRandomDrink setDrinkList={setDrinklist} getRandomDrink={getRandom} />
            <DrinkList drinkList={drinklist}/>

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
});

export default RecipesScreen;