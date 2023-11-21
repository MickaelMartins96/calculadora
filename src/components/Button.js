import React from "react";
import { Button,
        StyleSheet,
        Text,
        Dimensions,
        TouchableHighlight,
        SafeAreaView} from "react-native";

const styles = StyleSheet.create({
    button:{
        fontSize: 32,
        height: Dimensions.get('window').width / 4,
        width: Dimensions.get('window').width /4,
        borderWidth: 1,
        textAlign: "center",
        backgroundColor: "#000000",
        borderColor: "#000000",
        padding: 20,
        borderRadius: 100,
        color:'#fff',
        },
    operationButton:{
        color: "#DB5F17",
        backgroundColor: '#000000'
    },
    buttonDouble:{
        width: (Dimensions.get('window').width/4) *2,

    },
    buttonTriple:{
        width: (Dimensions.get('window').width/4) *3,
    }
})

export default props =>{

    const stylesButton = [styles.button]
    if (props.double) stylesButton.push(styles.buttonDouble)
    if (props.triple) stylesButton.push(styles.buttonTriple)
    if (props.operation) stylesButton.push(styles.operationButton)

    return(
        <SafeAreaView>
            <TouchableHighlight onPress={() => props.onClick(props.label)}>
                <Text style={stylesButton}>
                    {props.label}
                </Text>
            </TouchableHighlight>
        </SafeAreaView>
    )
}