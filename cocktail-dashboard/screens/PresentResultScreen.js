import {useRoute} from "@react-navigation/native";
import {Pressable, StyleSheet, Text, View} from "react-native";
import DrinkList from "../components/theCocktailDB/DrinkList";
import {useState} from "react";

const PresentResultScreen = ({navigation: {goBack}}) => {
    const route = useRoute();
    const [drinklist, setDrinklist] = useState(route.params.drinklist)

    console.log("Inne från presentResultScreen: ", drinklist)
    return (
        <View style={styles.container}>
           <Pressable
               style={styles.backButton}
            onPress={() => goBack()}>
               <Text>GO BACK</Text>
           </Pressable>
             {(route.params.drinklist !== null) ?
                 <DrinkList style={styles.drinklist} drinklist={drinklist}/> :
                 <Text>No Drinks Found</Text>
            }
        </View>
    )
}

const styles = StyleSheet.create({
 drinklist: {
        backgroundColor: "golden"
    },
    container: {
        flexDirection: 'column',
        alignItems: 'center',
        paddingVertical: 150,
        height: '100%',
    },
    backButton: {
        paddingHorizontal: 16,
        paddingVertical: 9,
        backgroundColor: 'gold',
        borderRadius: 5
    }
});

export default PresentResultScreen;