import React from 'react';
import { Text, StyleSheet, View } from 'react-native';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import { useTheme } from '../theme/ThemeContext';
import RightGradient from './RightGradient';

function ChannelList({ channels }: { channels: any[] }) {
  const { colors } = useTheme();

  return (
    <View style={[styles.fixedColumn, { backgroundColor: colors.sidebarBackground, borderRightColor: colors.sidebarBorder }]}>
      <View style={[styles.channelHeader, { borderBottomColor: colors.sidebarBorder }]} />
      <RightGradient />
      {channels.map((channel, index) => (
        <View key={index} style={[styles.channelBox, { borderBottomColor: colors.sidebarBorder }]}>
          <Icon name={channel.icon} size={30} style={[styles.icon, { color: colors.text }]} />
          <Text style={[styles.channelName, { color: colors.text }]}>{channel.channel}</Text>
        </View>
      ))}
    </View>
  );
}

const styles = StyleSheet.create({
  fixedColumn: {
    width: 100,
    borderRightWidth: 1,
  },
  channelHeader: {
    height: 40,
    borderBottomWidth: 1,
  },
  channelBox: {
    height: 80,
    justifyContent: 'center',
    alignItems: 'center',
    borderBottomWidth: 1,
  },
  icon: {
    marginBottom: 4,
  },
  channelName: {
    fontSize: 12,
    textAlign: 'center',
  },
});

export default ChannelList;