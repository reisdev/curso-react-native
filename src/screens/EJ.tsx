import React from 'react';
import { View, Text, Image, StyleSheet } from 'react-native';
import MapView, { Marker } from 'react-native-maps';
import { FontAwesome as Icon } from "@expo/vector-icons";
import { TouchableOpacity } from 'react-native-gesture-handler';

const EJ = ({ navigation }: { navigation: any }) => {
    return <View style={styles.container}>
        <View style={{
            alignItems: "center",
            paddingTop: 20
        }}>
            <View style={{ flexDirection: 'row' }}>
                <TouchableOpacity style={styles.goBackIcon} onPress={() => navigation.goBack()}>
                    <Icon name="arrow-left" size={18} />
                </TouchableOpacity>
                <Text style={styles.title}>Encautech</Text>
            </View>
            <Text style={styles.subtitle}>Leopoldina - MG</Text>
            <Image source={require("../static/img/logo.png")} />
        </View>
        <View style={styles.mapContainer}>
            <MapView
                style={styles.map}
                region={{
                    latitude: -21.531689,
                    longitude: -42.634029,
                    latitudeDelta: 0.03,
                    longitudeDelta: 0.01,
                }}
            >
                <Marker coordinate={{
                    latitude: -21.531689,
                    longitude: -42.634029
                }}
                    title={"Encautech"}
                    image={require("../static/img/logo.png")}
                />
                <Marker
                    coordinate={{
                        latitude: -21.53158,
                        longitude: -42.634029
                    }}
                    title={"Encautech 2"}
                    image={require("../static/img/logo.png")}
                />
            </MapView>
        </View>
    </View>
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: "center",
        justifyContent: "flex-start",
        backgroundColor: "#ec8135"
    },
    goBackIcon: {
        padding: 15
    },
    title: {
        fontSize: 30,
        fontWeight: "bold",
        flex: 2,
        textAlign: "center",
        paddingRight: 40
    },
    subtitle: {
        fontSize: 20,
        color: "#222222"
    },
    map: {
        width: "100%",
        height: "100%"
    },
    mapContainer: {
        flex: 1,
        width: "100%",
        borderRadius: 10,
        overflow: 'hidden',
        marginTop: 16,
    }
});

export default EJ;