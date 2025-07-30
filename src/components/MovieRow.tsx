import React from 'react';
import { Text, View, StyleSheet, TouchableOpacity } from 'react-native';
import { PIXELS_PER_MINUTE } from '../config';
import { useTheme } from '../theme/ThemeContext';

function MovieRow({
  movies,
  selectMovie,
}: {
  movies: Movie[];
  selectMovie: (movie: Movie) => void;
}) {
  const { colors } = useTheme();

  return (
    <View style={styles.timelineRow}>
      {movies.map((movie, index) => {
        const startMinutes = movie.startMoment.diff(
          movie.startMoment.clone().startOf('day'),
          'minutes'
        );
        const left = startMinutes * PIXELS_PER_MINUTE;

        return (
          <TouchableOpacity
            key={index}
            onPress={() => selectMovie(movie)}
            style={[
              styles.movieContainer,
              {
                width: movie.duration * PIXELS_PER_MINUTE,
                left,
                backgroundColor: movie.isLive ? colors.liveBackground : colors.background,
                borderRightColor: colors.liveBackground,
                borderBottomColor: colors.liveBackground
              },
            ]}
          >
            <Text style={[styles.movieTitle, { color: colors.text }]}>
              {movie.title}
            </Text>
            <Text style={[styles.movieTime, { color: colors.gray }]}>
              {movie.start} - {movie.end}
            </Text>
          </TouchableOpacity>
        );
      })}
    </View>
  );
}

const styles = StyleSheet.create({
  timelineRow: {
    height: 80,
    position: 'relative',
  },
  movieContainer: {
    position: 'absolute',
    top: 0,
    bottom: 0,
    paddingHorizontal: 12,
    paddingVertical: 8,
    borderRightWidth: 1,
    borderBottomWidth: 1
  },
  movieTitle: {
    fontSize: 14,
  },
  movieTime: {
    fontSize: 11,
  },
});

export default MovieRow;