import React from "react";
import { StyleSheet,Dimensions} from "react-native";

export default StyleSheet.create({
    container:{
        margin: 10,
        marginTop: 3,
        backgroundColor: "#fff",
        borderRadius: 5,
    },
    image:{
        height: Dimensions.get('window').height/4,
        borderTopLeftRadius: 10,
        borderTopRightRadius: 10,
    },
    title: {
        fontSize: 20,
        fontWeight: "bold",
        marginTop: 5,
        marginBottom: 5,
        paddingLeft: 10,
    },
    description: {
        paddingLeft: 10,
        paddingRight: 10,
        fontSize: 15,
        marginBottom: 5,
        padding:3,
    },
    author: {
        fontSize: 12,
        color: "#888",
        marginBottom: 5,
        textAlign: "right",
        fontStyle: "italic",
        marginRight: 10,
    },
});