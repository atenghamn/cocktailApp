import {useState} from "react";
import {Modal, Pressable, ScrollView, StyleSheet, Text, View} from "react-native";

const IngredientModal = ({ item }) => {
    const [modalVisible, setModalVisible] = useState(false);

    return (
        <View style={styles.centeredView}>
            <Modal
                animationType="slide"
                transparent={true}
                visible={modalVisible}
                onRequestClose={() => {setModalVisible(!modalVisible)}}
            >
                <View style={styles.centeredView}>
                    <ScrollView style={styles.modalView}>
                        <Text style={styles.modalHeader}>{item.strIngredient}</Text>
                        <Text>{item.strDescription}</Text>
                        <Text>Type: {item.strType}</Text>
                        <Text>"Contains alcohol: {item.strAlcohol}</Text>
                        <Pressable
                            style={[styles.buttonClose, styles.button]}
                            onPress={() => setModalVisible(!modalVisible)}
                        >
                            <Text style={styles.textStyle}>CLOSE</Text>
                        </Pressable>
                    </ScrollView>
                </View>
            </Modal>
            <Pressable
                style={[styles.button, styles.buttonOpen]}
                onPress={() => setModalVisible(true)}
            >
                <Text style={styles.textStyle}>{item.strIngredient}</Text>
            </Pressable>
        </View>
    )
}

const styles = StyleSheet.create({
    centeredView: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
        marginTop: 22,
    },
    modalView: {
        margin: 20,
        backgroundColor: "white",
        borderRadius: 20,
        padding: 35,
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 2
        },
        shadowOpacity: 0.25,
        shadowRadius: 4,
        elevation: 5,
    },
    button: {
        borderRadius: 10,
        padding: 10,
        elevation: 2
    },
    buttonOpen: {
        backgroundColor: "#F194FF",
    },
    buttonClose: {
        backgroundColor: "#2196F3",
        marginBottom: 40,
    },
    textStyle: {
        color: "white",
        fontWeight: "bold",
        textAlign: "center",
        marginBottom: 5
    },
    modalText: {
        marginBottom: 15,
        textAlign: "center",
    },
    modalHeader:{
        color:'red',
        fontWeight: "bold",
        fontSize: 17,
        marginBottom: 5,
    }
});

export default IngredientModal;