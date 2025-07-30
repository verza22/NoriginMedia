import React, { useEffect, useState } from 'react';
import { StyleSheet, ScrollView } from 'react-native';
import { RouteProp, useRoute } from '@react-navigation/native';
import axios from './../utils/axios';
import moment from 'moment';
import { useTheme } from '../theme/ThemeContext';

import ImageCover from '../sections/movie/ImageCover';
import Detail from '../sections/movie/Detail';
import Description from '../sections/movie/Description';
import MoreInfo from '../sections/movie/MoreInfo';
import { formatTimeDifference } from '../utils/util';
import Season from '../sections/movie/Season';
import Loading from '../components/Loading';

function Movie() {
  const { colors } = useTheme();
  const route = useRoute<RouteProp<EgpStackParamList, 'Movie'>>();
  const { movieId, startMoment, endMoment } = route.params;

  const [loading, setLoading] = useState<boolean>(false);
  const [detail, setDetail] = useState<MovieDetail | null>(null);

  useEffect(() => {
    const now = moment();
    const start = moment(startMoment); 
    const end = moment(endMoment); 
    // We calculate again using the current date just in case there was a delay in selecting the program.

    let routeUrl = 'program/' + movieId; // future
    // live
    if (now.isBetween(start, end))
      routeUrl = 'program/program_live_id';
    // past
    if (end.isBefore(now))
      routeUrl = 'program/program_catchup_id';

    setLoading(true);
    axios.get(routeUrl)
      .then(response => {
        const data = response.data;
        const start = moment(data.start);
        let end = moment(data.end);
        setDetail({
          title: data.title,
          description: data.description,
          cast: data.meta.cast.map((x: any) => x.name).join(", "),
          creators: data.meta.creators.map((x: any) => x.name).join(", "),
          genres: data.meta.genres.filter((x: any, i: number) => i < 3).join("  "),
          channelTitle: data.channelTitle,
          year: data.meta.year,
          starTime: start.format('HH:mm'),
          endTime: end.format('HH:mm'),
          day: start.format('D MMM'),
          isLive: now.isBetween(start, end),
          isPast: end.isBefore(now),
          isFuture: start.isAfter(now),
          timeDiff: formatTimeDifference(end, now),
          series: data.series
        });
      })
      .finally(() => {
        setLoading(false);
      });
  }, []);

  if (detail === null) {
    return <></>;
  }

  return <>
    {
      loading ?
        <Loading />
        :
        <ScrollView style={[styles.container, { backgroundColor: colors.background }]}>
          <ImageCover isLive={detail.isLive} isPast={detail.isPast} timeDiff={detail.timeDiff} />
          <Detail detail={detail} isLive={detail.isLive} isFuture={detail.isFuture} />
          <Description description={detail.description} />
          <MoreInfo cast={detail.cast} creators={detail.creators} />
          {
            detail.isPast &&
            <Season series={detail.series} />
          }
        </ScrollView>
    }
  </>;
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  }
});

export default Movie;