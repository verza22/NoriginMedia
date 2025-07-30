import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import { useTheme } from '../../theme/ThemeContext';

function Detail({ detail, isLive, isFuture }: { detail: MovieDetail; isLive: boolean; isFuture: boolean }) {
  const { colors } = useTheme();

  return (
    <View style={styles.iconRow}>
      {(isLive || isFuture) && (
        <Icon style={styles.icon} name="television-classic" size={30} color={colors.text} />
      )}
      <View style={styles.titleBox}>
        <Text style={[styles.channel, { color: colors.text }]}>
          {detail.channelTitle}{' '}
          {!isLive && (
            <Text style={[styles.time, { color: colors.gray2 }]}>
              {detail.starTime} - {detail.endTime} • {detail.day}
            </Text>
          )}
        </Text>
        <Text style={[styles.mainTitle, { color: colors.text }]}>{detail.title}</Text>
        <Text style={[styles.subgenre, { color: colors.gray2 }]}>
          {detail.year} {detail.genres}
        </Text>
      </View>
      {isFuture && <Icon style={styles.icon} name="clock-outline" size={30} color={colors.text} />}
    </View>
  );
}

const styles = StyleSheet.create({
  icon: {
    paddingHorizontal: 12,
  },
  iconRow: {
    flexDirection: 'row',
    alignItems: 'center',
    padding: 16,
    gap: 10,
  },
  titleBox: {
    flex: 1,
    alignItems: 'flex-start',
  },
  channel: {
    fontSize: 14,
    fontWeight: '600',
  },
  time: {
    fontSize: 12,
  },
  mainTitle: {
    fontSize: 20,
    fontWeight: 'bold',
  },
  subgenre: {
    fontSize: 12,
    marginTop: 4,
  },
});

export default Detail;