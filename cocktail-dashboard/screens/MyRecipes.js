import {View, Text} from "react-native";
import {useEffect, useState} from "react";
import {findAll, getTableInfo, initDB} from "../util/db";
import CocktailFinder from "../components/CocktailFinder";
import CocktailInput from "../components/CocktailInput";
import CocktailList from "../components/CocktailList";

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

    return (
        <View>
            <Text>My Reciepes</Text>
            <CocktailFinder setCocktailList={setCocktailList} />
            <CocktailInput setCocktailList={setCocktailList} cocktailList={cocktailList} />
            <CocktailList setCocktailList={setCocktailList} cocktailList={cocktailList}/>
        </View>
    )
}

export default MyRecipes;