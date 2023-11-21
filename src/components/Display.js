import React from "react";
import { StyleSheet,
         Text,
         SafeAreaView, } from "react-native";

const styles = StyleSheet.create({
    display:{
        paddingTop:100, 
        borderBottomColor:'#8A8888',
        borderBottomWidth: StyleSheet.hairlineWidth,
        justifyContent: 'flex-end',
        flex: 1,
        backgroundColor: "#000000",
        alignItems: 'flex-end',
    },
    displayValue:{
        fontSize:50,
        color: "#fff",
        textAlignVertical:'bottom',
        textAlign:'right',
    }
})

export default props => {

    return(
    <SafeAreaView style={styles.display}>
        <Text style={styles.displayValue}
                numberOfLines={1}>
            {props.value}
        </Text>

    </SafeAreaView>
    )
}
