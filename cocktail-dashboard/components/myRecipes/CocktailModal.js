import {useState} from "react";
import {Modal, View, StyleSheet} from "react-native";

const CocktailModal = ({ item }) => {
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
                    <View style={styles.modalView}>
                        <Text>{item.title}</Text>
                         <Text>{item.glass}</Text>
                         <Text>{item.instructions}</Text>
                         <Text>{item.measure1} {item.ingredient1}</Text>
                         <Text>{item.measure2} {item.ingredient2}</Text>
                         <Text>{item.measure3} {item.ingredient3}</Text>
                         <Text>{item.measure4} {item.ingredient4}</Text>
                         <Text>{item.measure5} {item.ingredient5}</Text>
                         <Text>{item.measure6} {item.ingredient6}</Text>
                         <Text>{item.measure7} {item.ingredient7}</Text>
                         <Text>{item.measure8} {item.ingredient8}</Text>
                         <Text>{item.measure9} {item.ingredient9}</Text>
                         <Text>{item.measure10} {item.ingredient10}</Text>
                    </View>
                </View>

            </Modal>
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
    }
});

export default CocktailModal;