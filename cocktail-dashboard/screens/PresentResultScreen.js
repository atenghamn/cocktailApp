import {useNavigation, useRoute} from "@react-navigation/native";
import {Pressable, StyleSheet, Text, View} from "react-native";
import DrinkList from "../components/theCocktailDB/DrinkList";

const PresentResultScreen = ({navigation: {goBack}}) => {
    const route = useRoute();

    console.log("Inne från presentResultScreen: ", route.params.drinklist)
    return (
        <View style={styles.container}>
           <Pressable
               style={styles.backButton}
            onPress={() => goBack()}>
               <Text>GO BACK</Text>
           </Pressable>
             {route.params.drinklist !== undefined &&
                <DrinkList style={styles.drinklist} drinklist={route.params.drinklist}/>
            }
        </View>
    )
}

const styles = StyleSheet.create({
 drinklist: {
        backgroundColor: "golden"
    },
    container: {
        flexDirection: 'row',
        alignItems: 'center',
        paddingVertical: 50
    },
    backButton: {
        paddingHorizontal: 16,
        paddingVertical: 9,
        backgroundColor: 'gold',
        borderRadius: 5
    }
});

export default PresentResultScreen;