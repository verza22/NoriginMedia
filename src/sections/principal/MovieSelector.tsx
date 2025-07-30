import React, { useState, useEffect, useRef } from 'react';
import { StyleSheet, View, ScrollView, RefreshControl } from 'react-native';
import moment from 'moment';
import axios from './../../utils/axios';
import { useNavigation } from '@react-navigation/native';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import { useTheme } from '../../theme/ThemeContext';

import { MINUTES_TOTAL, PIXELS_PER_MINUTE } from '../../config';

import HourBar from '../../components/HourBar';
import ChannelList from '../../components/ChannelList';
import MovieRow from '../../components/MovieRow';
import Loading from '../../components/Loading';
import NowBtn from '../../components/NowBtn';
import NowIndicator from '../../components/NowIndicator';

const timelineWidth = MINUTES_TOTAL * PIXELS_PER_MINUTE;

function TVGuide() {
  const { colors } = useTheme();
  const [channels, setChannels] = useState<Channel[]>([]);
  const [loading, setLoading] = useState<boolean>(false);
  const [refreshing, setRefreshing] = useState<boolean>(false);
  const scrollRef = useRef<ScrollView>(null);
  const navigation = useNavigation<NativeStackNavigationProp<EgpStackParamList>>();

  const fetchData = () => {
    const now = moment();

    setLoading(true);
    axios.get('epg')
      .then(response => {
        const apiData = response.data;

        const processed: Channel[] = apiData.channels.map((channel: any): Channel => ({
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
      .finally(() => {
        setLoading(false);
        setRefreshing(false);
      });
  };

  useEffect(() => {
    fetchData();
  }, []);

  const selectMovie = (movie: Movie) => {
    navigation.navigate("Movie", { movieId: movie.id, startMoment: movie.startMoment.toISOString(), endMoment: movie.endMoment.toISOString() });
  }

  const now = () => {
    const currentMinutes = moment().hours() * 60 + moment().minutes();
    const x = (currentMinutes * PIXELS_PER_MINUTE) - 120;

    scrollRef.current?.scrollTo({ x, animated: true });
  }

  return (
    <View style={[styles.container, { backgroundColor: colors.background }]}>
      {
        loading ?
          <Loading />
          :
          <ScrollView
            style={styles.container}
            refreshControl={
              <RefreshControl
                refreshing={refreshing}
                onRefresh={() => {
                  setRefreshing(true);
                  fetchData();
                }}
                tintColor={colors.primary}
              />
            }
          >
            <View style={styles.viewContainer}>
              {
                channels.length > 0 &&
                <ChannelList channels={channels} />
              }
              <ScrollView
                ref={scrollRef}
                horizontal
                showsHorizontalScrollIndicator
                style={styles.container}
              >
                <View style={[styles.view, { width: timelineWidth }]}>
                  <NowIndicator />
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
      <NowBtn now={now} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  viewContainer: {
    flexDirection: 'row'
  },
  view: {
    position: 'relative'
  }
});

export default TVGuide;