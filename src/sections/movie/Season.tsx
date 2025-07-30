import React, { useState } from 'react';
import { StyleSheet, Text, View, TouchableOpacity, ScrollView } from 'react-native';
import { useTheme } from '../../theme/ThemeContext';

function Season({ series }: { series: Season[] }) {
  const [selectedSeason, setSelectedSeason] = useState(0);
  const { colors } = useTheme();

  return (
    <ScrollView contentContainerStyle={styles.container}>
      <View style={styles.seasonContainer}>
        {series.map((season, index) => (
          <TouchableOpacity
            key={index}
            onPress={() => setSelectedSeason(index)}
            style={[
              styles.seasonBox,
              { borderColor: colors.text },
              selectedSeason === index && { backgroundColor: colors.sidebarBorder },
            ]}
          >
            <Text style={{ color: colors.text }}>
              {season.title.toUpperCase()}
            </Text>
          </TouchableOpacity>
        ))}
      </View>

      <View style={styles.episodesContainer}>
        {series[selectedSeason].episodes.map((episode, idx) => (
          <TouchableOpacity key={idx} style={styles.episode}>
            <Text style={{ color: colors.text }}>
              Episode {idx + 1} {episode.title}
            </Text>
          </TouchableOpacity>
        ))}
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    paddingHorizontal: 16,
    marginBottom: 30,
  },
  seasonContainer: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    gap: 8,
  },
  seasonBox: {
    borderWidth: 1,
    padding: 6,
    paddingHorizontal: 12,
  },
  episodesContainer: {
    marginTop: 20,
  },
  episode: {
    paddingVertical: 8,
  },
});

export default Season;