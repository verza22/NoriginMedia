import React from 'react';
import { StyleSheet, View, Text } from 'react-native';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';

function IsLive() {
    return <View style={styles.container}>
        <Icon style={styles.icon} name="circle" size={20} color="white" />
        <Text style={styles.text}>LIVE</Text>
    </View>
}

const styles = StyleSheet.create({
    container: {
        flexDirection: "row",
        backgroundColor: "black",
        opacity: 0.75,
        paddingVertical: 6,
        paddingHorizontal: 20
    },
    icon: {
        color: "#abff99"
    },
    text: {
        color: "white",
        fontSize: 16,
        marginLeft: 8
    }
});

export default IsLive;