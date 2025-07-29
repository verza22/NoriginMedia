import React from 'react';
import { StyleSheet, TouchableOpacity } from 'react-native';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';

function PlayBtn() {
    return <TouchableOpacity style={styles.btn}>
        <Icon style={styles.icon} name="play-circle" size={80} color="white" />
    </TouchableOpacity>
}

const styles = StyleSheet.create({
    btn: {
        margin: "auto"
    },
    icon: {
        opacity: 0.75
    }
});

export default PlayBtn;