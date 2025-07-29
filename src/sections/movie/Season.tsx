import React, { useState } from 'react';
import {
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  ScrollView,
} from 'react-native';

function Season({ series }: { series: Season[] }) {
  const [selectedSeason, setSelectedSeason] = useState(0);

  return (
    <ScrollView contentContainerStyle={styles.container}>
      <View style={styles.seasonContainer}>
        {series.map((season, index) => (
          <TouchableOpacity
            key={index}
            onPress={() => setSelectedSeason(index)}
            style={[
              styles.seasonBox,
              selectedSeason === index && styles.selectedBox,
            ]}
          >
            <Text style={styles.text}>{season.title.toUpperCase()}</Text>
          </TouchableOpacity>
        ))}
      </View>

      <View style={styles.episodesContainer}>
        {series[selectedSeason].episodes.map((episode, idx) => (
          <TouchableOpacity key={idx} style={styles.episode}>
            <Text style={styles.text}>
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
    marginBottom: 30
  },
  seasonContainer: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    gap: 8,
  },
  seasonBox: {
    borderWidth: 1,
    borderColor: 'white',
    padding: 6,
    paddingHorizontal: 12
  },
  selectedBox: {
    backgroundColor: '#333',
  },
  episodesContainer: {
    marginTop: 20,
  },
  episode: {
    paddingVertical: 8,
  },
  text: {
    color: 'white',
  },
});

export default Season;