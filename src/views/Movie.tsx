import React, { useEffect, useState } from 'react';
import { StyleSheet, Text, View, ScrollView } from 'react-native';
import { RouteProp, useRoute } from '@react-navigation/native';
import axios from 'axios';
import moment from 'moment';

import { API_ROUTE } from '../config';

import ImageCover from '../sections/movie/ImageCover';
import Detail from '../sections/movie/Detail';
import Description from '../sections/movie/Description';
import MoreInfo from '../sections/movie/MoreInfo';
import { formatTimeDifference } from '../utils/util';
import Season from '../sections/movie/Season';

function Movie() {
    const route = useRoute<RouteProp<EgpStackParamList, 'Movie'>>();
    const { movieId, startMoment, endMoment } = route.params;

    const [detail, setDetail] = useState<MovieDetail|null>(null);

    useEffect(() => {
        const now = moment();
        //We calculate again using the current date just in case there was a delay in selecting the program.

        let route = 'program/'+movieId;//future
        //live
        if(now.isBetween(startMoment, endMoment))
            route = 'program/program_live_id';
        //past
        if(endMoment.isBefore(now))
            route = 'program/program_catchup_id';

        axios.get(API_ROUTE+route)
        .then(response => {
            const data = response.data;
            const start = moment(data.start);
            let end = moment(data.end);
            setDetail({
                title: data.title,
                description: data.description,
                cast: data.meta.cast.map((x: any)=> x.name).join(", "),
                creators: data.meta.creators.map((x: any)=> x.name).join(", "),
                genres: data.meta.genres.filter((x: any, i: number)=> i < 3).join("  "),
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
        .catch(error => {
            console.error('Error al obtener datos:', error);
        });
    }, []);

    if(detail === null){
        return <></>;
    }

    return (
        <ScrollView style={styles.container}>
            <ImageCover isLive={detail.isLive} isPast={detail.isPast} timeDiff={detail.timeDiff} />
            <Detail detail={detail} isLive={detail.isLive} isFuture={detail.isFuture} />
            <Description description={detail.description} />
            <MoreInfo cast={detail.cast} creators={detail.creators} />
            {
                detail.isPast &&
                <Season series={detail.series} />
            }
        </ScrollView>
    );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: 'black',
    flex: 1,
  }
});

export default Movie;