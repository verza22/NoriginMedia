import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

function MoreInfo({cast, creators}: {cast: string, creators: string}) {
    return <View style={styles.credits}>
        <Text style={styles.creditLine}>Cast: <Text style={styles.creditValue}>{cast}</Text></Text>
        <Text style={styles.creditLine}>Creators: <Text style={styles.creditValue}>{creators}</Text></Text>
    </View>
}

const styles = StyleSheet.create({
  credits: {
    marginHorizontal: 16,
    marginTop: 20,
    marginBottom: 30
  },
  creditLine: {
    fontSize: 14,
    fontWeight: '600',
    marginTop: 6,
    color: '#9e9e9e',
  },
  creditValue: {
    fontWeight: 'normal',
    color: '#9e9e9e',
  },
});

export default MoreInfo;