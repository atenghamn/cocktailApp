import {useState} from "react";
import {Modal, View, StyleSheet, Text, Pressable, Alert, Image} from "react-native";

const DrinkModal = ({ item }) => {
    const [modalVisible, setModalVisible] = useState(false)

    return (
        <View style={styles.centeredView}>
            <Modal
            animationType="slide"
            transparent={true}
            visible={modalVisible}
            onRequestClose={() => {setModalVisible(!modalVisible)}}
            >
                <View style={styles.centeredView}>
                    <View style={styles.modalView}>
                        <Image
                            styles={styles.thumbNail}
                            source={{
                                uri: 'https://www.thecocktaildb.com/images/media/drink/709s6m1613655124.jpg',
                            }}
                        />
                        <Text>{item.strDrink}</Text>
                        <Text>{item.strCategory}</Text>
                        <Text>{item.strGlass}</Text>
                        <Text>{item.strMeasure1}{item.strIngredient1}</Text>
                        <Text>{item.strMeasure2}{item.strIngredient2}</Text>
                        <Text>{item.strMeasure3}{item.strIngredient3}</Text>
                        <Text>{item.strMeasure4}{item.strIngredient4}</Text>
                        <Text>{item.strMeasure5}{item.strIngredient5}</Text>
                        <Text>{item.strMeasure6}{item.strIngredient6}</Text>
                        <Text>{item.strMeasure7}{item.strIngredient7}</Text>
                        <Text>{item.strInstructions}</Text>
                        <Pressable
                            style={[styles.button, styles.buttonClose]}
                            onPress={() => setModalVisible(!modalVisible)}
                            >
                            <Text style={styles.textStyle}>CLOSE</Text>
                        </Pressable>
                    </View>
                </View>
            </Modal>
            <Pressable
                style={[styles.buttonOpen, styles.button]}
                onPress={() => setModalVisible(true)}
                >
                <Text style={styles.textStyle}>{item.strDrink}</Text>
            </Pressable>
        </View>
    )
}

const styles = StyleSheet.create({
    centeredView: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
        marginTop: 22
    },
    modalView: {
        margin: 20,
        backgroundColor: "white",
        borderRadius: 20,
        padding: 35,
        alignItems: "center",
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 2
        },
        shadowOpacity: 0.25,
        shadowRadius: 4,
        elevation: 5
    },
    button: {
        borderRadius: 20,
        padding: 10,
        elevation: 2
    },
    buttonOpen: {
        backgroundColor: "#F194FF",
    },
    buttonClose: {
        backgroundColor: "#2196F3",
    },
    textStyle: {
        color: "white",
        fontWeight: "bold",
        textAlign: "center"
    },
    modalText: {
        marginBottom: 15,
        textAlign: "center"
    },
    thumbNail:{
        width: 40,
        height: 40
    }
});

export default DrinkModal;