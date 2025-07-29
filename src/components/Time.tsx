import React from 'react';
import { StyleSheet, View, Text } from 'react-native';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';

function Time({ timeDiff } : { timeDiff: string }) {
    return <View style={styles.container}>
        <Text style={styles.text}>{timeDiff}</Text>
    </View>
}

const styles = StyleSheet.create({
    container: {
        flexDirection: "row",
        backgroundColor: "black",
        opacity: 0.75,
        paddingVertical: 6,
        paddingHorizontal: 14
    },
    icon: {
        color: "#abff99"
    },
    text: {
        color: "white",
        fontSize: 14,
        marginLeft: 8
    }
});

export default Time;