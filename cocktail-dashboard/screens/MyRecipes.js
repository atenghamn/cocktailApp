import {View, Text, StyleSheet} from "react-native";
import {useEffect, useState} from "react";
import {findAll, getTableInfo, initDB} from "../util/db";
import CocktailFinder from "../components/myRecipes/CocktailFinder";
import CocktailInput from "../components/myRecipes/CocktailInput";
import CocktailList from "../components/myRecipes/CocktailList";

const MyRecipes = () => {

    const [dbInited, setDbInited] = useState(false);
    const [cocktailList, setCocktailList] = useState([]);

    useEffect(() => {
        initDB()
            .then(res => {
                return getTableInfo()
            })
            .then(res => {
                setDbInited(true)
            })
    }, [])

    useEffect(() => {
        findAll()
            .then(res => setCocktailList(res))
    }, [])

    if(!dbInited){
        return(
        <View>
            <Text>Loading</Text>
        </View>
        );
    }
    return (
        <View style={styles.container}>
            <CocktailFinder setCocktailList={setCocktailList} />
            <CocktailList setCocktailList={setCocktailList} cocktailList={cocktailList} />
            <CocktailInput setCocktailList={setCocktailList} cocktailList={cocktailList} />

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

export default MyRecipes;