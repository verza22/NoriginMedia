import React from 'react';
import { Text, StyleSheet, View } from 'react-native';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';

function ChannelList({ channels }: { channels: any[] }) {
  return (
    <View style={styles.fixedColumn}>
      <View style={styles.channelHeader} />
      {channels.map((channel, index) => (
        <View key={index} style={styles.channelBox}>
          <Icon name={channel.icon} size={30} style={styles.icon} />
          <Text style={styles.channelName}>{channel.channel}</Text>
        </View>
      ))}
    </View>
  );
}


const styles = StyleSheet.create({
    fixedColumn: {
      width: 100,
      backgroundColor: '#111',
      borderRightWidth: 1,
      borderRightColor: '#333',
    },
    channelHeader: {
      height: 40,
      borderBottomWidth: 1,
      borderBottomColor: '#333',
    },
    channelBox: {
      height: 80,
      justifyContent: 'center',
      alignItems: 'center',
      borderBottomWidth: 1,
      borderBottomColor: '#333',
    },
    icon: {
      color: 'white',
      marginBottom: 4,
    },
    channelName: {
      color: 'white',
      fontSize: 12,
      textAlign: 'center',
    }
  });
  
  export default ChannelList;