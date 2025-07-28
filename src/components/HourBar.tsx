import React from 'react';
import { Text, View, StyleSheet } from 'react-native';
import { HOURS_TOTAL, PIXELS_PER_MINUTE } from '../config';

function HourBar() {
  const hoursArray = [];
  for (let i = 0; i < HOURS_TOTAL; i++) {
    const label = i.toString().padStart(2, '0') + ':00';
    hoursArray.push(
      <View key={i} style={styles.hourBlock}>
        <Text style={styles.hourText}>{label}</Text>
      </View>
    );
  }
  return <View style={[styles.timelineRow, styles.hourRow]}>{hoursArray}</View>;
}


const styles = StyleSheet.create({
    timelineRow: {
      flexDirection: 'row',
      alignItems: 'center',
      borderBottomWidth: 1,
      borderBottomColor: '#333',
      height: 80,
    },
    hourRow: {
      height: 40,
      borderBottomWidth: 1,
      borderBottomColor: '#333',
    },
    hourBlock: {
      width: PIXELS_PER_MINUTE * 60,
      justifyContent: 'center',
      alignItems: 'center',
      borderRightWidth: 1,
      borderRightColor: '#333',
      height: '100%',
    },
    hourText: {
      color: 'white',
      fontSize: 12,
    }
  });

  export default HourBar;