import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';

function Detail({detail, isLive, isFuture}: { detail: MovieDetail, isLive: boolean, isFuture: boolean}) {
    return <View style={styles.iconRow}>
      {
        (isLive || isFuture) &&
        <Icon style={styles.icon} name="television-classic" size={30} color="white" />
      }
      <View style={styles.titleBox}>
        <Text style={styles.channel}>{detail.channelTitle}    {
          !isLive && <Text style={styles.time}>{detail.starTime} - {detail.endTime}   •   {detail.day}</Text> 
        }</Text>
        <Text style={styles.mainTitle}>{detail.title}</Text>
        <Text style={styles.subgenre}>{detail.year}  {detail.genres}</Text>
      </View>
      {
        isFuture && <Icon style={styles.icon} name="clock-outline" size={30} color="white" />
      }
    </View>;
}

const styles = StyleSheet.create({
  icon: {
    paddingHorizontal: 12
  },
  iconRow: {
    flexDirection: 'row',
    alignItems: 'center',
    padding: 16,
    gap: 10,
  },
  titleBox: {
    flex: 1,
    alignItems: "flex-start"
  },
  channel: {
    fontSize: 14,
    fontWeight: '600',
    color: 'white',
  },
  time: {
    fontSize: 12,
    color: '#9e9e9e'
  },
  mainTitle: {
    fontSize: 20,
    fontWeight: 'bold',
    color: "white"
  },
  subgenre: {
    fontSize: 12,
    color: '#9e9e9e',
    marginTop: 4,
  }
});

export default Detail;