import React from 'react';
import { Text, View, StyleSheet, TouchableOpacity } from 'react-native';
import moment from 'moment';
import { PIXELS_PER_MINUTE } from '../config';

function MovieRow({
  movies,
  selectMovie
}: {
  movies: Movie[];
  selectMovie: (movie: Movie) => void
}) {
  return (
    <View style={styles.timelineRow}>
      {movies.map((movie, index) => {
        const startMinutes = movie.startMoment.diff(movie.startMoment.clone().startOf('day'), 'minutes');
        const left = startMinutes * PIXELS_PER_MINUTE;

        return (
          <TouchableOpacity
            key={index}
            onPress={()=> selectMovie(movie)}
            style={[
              styles.movieContainer,
              {
                width: movie.duration * PIXELS_PER_MINUTE,
                left,
                backgroundColor: movie.isLive ? '#cecece' : 'black',
              },
            ]}
          >
            <Text style={styles.movieTitle}>{movie.title}</Text>
            <Text style={styles.movieTime}>
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
    paddingVertical: 14,
    alignItems: 'center',
    justifyContent: 'center',
    borderRightWidth: 1,
    borderRightColor: '#333',
  },
  movieTitle: {
    color: 'white',
    fontSize: 14,
    textAlign: 'center',
  },
  movieTime: {
    color: 'gray',
    fontSize: 11,
    textAlign: 'center',
  },
});

export default MovieRow;