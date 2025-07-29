import React, { useState, useEffect } from 'react';
import { StyleSheet, View, ScrollView } from 'react-native';
import moment from 'moment';
import axios from "./../../utils/axios"
import { useNavigation } from '@react-navigation/native';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';

import { MINUTES_TOTAL, PIXELS_PER_MINUTE } from '../../config';

import HourBar from '../../components/HourBar';
import ChannelList from '../../components/ChannelList';
import MovieRow from '../../components/MovieRow';
import Loading from '../../components/Loading';

const timelineWidth = MINUTES_TOTAL * PIXELS_PER_MINUTE;

function TVGuide() {
  const [channels, setChannels] = useState<Channel[]>([]);
  const [loading, setLoading] = useState<boolean>(false);
  const navigation = useNavigation<NativeStackNavigationProp<EgpStackParamList>>();

  useEffect(() => {
    const now = moment();

    setLoading(true);
    axios.get('epg')
    .then(response => {
      const apiData = response.data;

      const processed: Channel[] = apiData.channels.map((channel: any):Channel => ({
        channel: channel.title,
        icon: 'television-classic',
        movies: channel.schedules.map((movie: any): Movie => {
          const start = moment(movie.start);
          let end = moment(movie.end);
          if (end.isBefore(start)) {
            end = end.add(1, 'day');
          }
          const duration = end.diff(start, 'minutes');
          return {
            id: movie.id,
            title: movie.title,
            start: start.format('HH:mm'),
            end: end.format('HH:mm'),
            startMoment: start,
            endMoment: end,
            duration,
            isLive: now.isBetween(start, end)
          };
        }),
      }));

      setChannels(processed);
    })
    .finally(()=>{
      setLoading(false);
    })
  }, []);

  const selectMovie = (movie: Movie) => {
    navigation.navigate("Movie", { movieId: movie.id, startMoment: movie.startMoment, endMoment: movie.endMoment });
  }

  return (
    <View style={styles.container}>
      {
        loading ? 
          <Loading/>
        : 
          <ScrollView style={{ flex: 1 }}>
            <View style={{ flexDirection: 'row' }}>
              {
                channels.length > 0 &&
                <ChannelList channels={channels} />
              }
              <ScrollView horizontal showsHorizontalScrollIndicator style={{ flex: 1 }}>
                <View style={{ width: timelineWidth }}>
                  {
                    channels.length > 0 &&
                    <HourBar />
                  }
                  {channels.map((channel, idx) => (
                    <MovieRow key={idx} movies={channel.movies} selectMovie={selectMovie} />
                  ))}
                </View>
              </ScrollView>
            </View>
          </ScrollView>
      }
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: 'black',
    flex: 1,
  }
});

export default TVGuide;