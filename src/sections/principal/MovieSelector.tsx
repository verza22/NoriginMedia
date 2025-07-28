import React, { useState, useEffect } from 'react';
import { Text, StyleSheet, View, ScrollView } from 'react-native';
import moment from 'moment';
import axios from 'axios';

import { MINUTES_TOTAL, PIXELS_PER_MINUTE } from '../../config';

import HourBar from '../../components/HourBar';
import ChannelList from '../../components/ChannelList';
import MovieRow from '../../components/MovieRow';

const timelineWidth = MINUTES_TOTAL * PIXELS_PER_MINUTE;

function TVGuide() {
  const [channels, setChannels] = useState<any[]>([]);
  const [now, setNow] = useState(moment());

  useEffect(() => {
    setNow(moment());

    axios.get('http://192.168.1.136:1337/epg')
      .then(response => {
        const apiData = response.data;

        const processed = apiData.channels.map((channel: any) => ({
          channel: channel.title,
          icon: 'television-classic',
          movies: channel.schedules.map((movie: any) => {
            const start = moment(movie.start);
            let end = moment(movie.end);
            if (end.isBefore(start)) {
              end = end.add(1, 'day');
            }
            const duration = end.diff(start, 'minutes');
            return {
              title: movie.title,
              start: start.format('HH:mm'),
              end: end.format('HH:mm'),
              startMoment: start,
              endMoment: end,
              duration
            };
          }),
        }));

        console.log(processed)

        setChannels(processed);
      })
      .catch(error => {
        console.error('Error al obtener datos:', error);
      });
  }, []);

  return (
    <View style={styles.container}>
      <ScrollView style={{ flex: 1 }}>
        <View style={{ flexDirection: 'row' }}>
          <ChannelList channels={channels} />
          <ScrollView horizontal showsHorizontalScrollIndicator style={{ flex: 1 }}>
            <View style={{ width: timelineWidth }}>
              <HourBar />
              {channels.map((channel, idx) => (
                <MovieRow key={idx} movies={channel.movies} now={now} />
              ))}
            </View>
          </ScrollView>
        </View>
      </ScrollView>
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