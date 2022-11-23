import {View, Text} from "react-native";
import {useEffect, useState} from "react";
import {findAll, getTableInfo, initDB} from "../util/db";

const MyRecipes = () => {

    const [dbInited, setDbInited] = useState(false);
    const [itemList, setItemList] = useState([]);

    useEffect(() => {
        initDB()
            .then(res => {
                return getTableInfo()
            })
            .then(res => {
                setDbInited(true)
            })git
    }, [])

    useEffect(() => {
        findAll()
            .then(res => setItemList(res))
    }, [])

    return (
        <View>
            <Text>My Reciepes</Text>
        </View>
    )
}

export default MyRecipes;