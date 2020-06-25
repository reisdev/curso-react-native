import React from 'react';
import { StyleSheet, View, Text, TouchableOpacity } from "react-native";
import { FontAwesome as Icon } from "@expo/vector-icons";

const Home = ({ navigation }: { navigation: any }) => {
    return <View style={styles.container}>
        <TouchableOpacity
            style={styles.button}
            onPress={() => { navigation.navigate("ej") }}
        >
            <Icon
                name="home"
                size={32}
                color={"#ec8135"}
                style={styles.buttonIcon}
            />
            <Text style={styles.buttonText}>
                Ir para EJ
            </Text>
        </TouchableOpacity>
        <TouchableOpacity
            style={styles.button}
            onPress={() => { navigation.navigate("github") }}
        >
            <Icon
                name="home"
                size={32}
                color={"#ec8135"}
                style={styles.buttonIcon}
            />
            <Text style={styles.buttonText}>
                Ir para o GitHub
            </Text>
        </TouchableOpacity>
    </View>
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: "center",
        justifyContent: "center",
        backgroundColor: "#ec8135"
    },
    button: {
        backgroundColor: "#fff",
        padding: 20,
        borderRadius: 15,
        flexDirection: "row"
    },
    buttonText: {
        fontSize: 25
    },
    buttonIcon: {
        paddingRight: 10
    }
});

export default Home;