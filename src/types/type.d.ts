type Movie = {
    id: string;
    title: string;
    start: string;
    end: string;
    duration: number;
    startMoment: moment.Moment;
    endMoment: moment.Moment;
    isLive: boolean;
};
  
type Channel = {
    channel: string;
    icon: string;
    movies: Movie[];
};

type tabNavigatorParamList = {
    Home: undefined;
    Play: undefined;
    EGP: undefined;
    Reset: undefined;
    Settings: undefined;
}

type EgpStackParamList = {
    Principal: undefined;
    Movie: { movieId: string, startMoment: moment.Moment, endMoment: moment.Moment };
};

type Episode = {
    id: string;
    title: string;
};

type Season = {
    title: string;
    episodes: Episode[];
};

type MovieDetail = {
    title: string;
    description: string;
    cast: string;
    creators: string;
    year: string;
    genres: string;
    channelTitle: string;
    starTime: string;
    endTime: string;
    day: string;
    isLive: boolean;
    isPast: boolean;
    isFuture: boolean;
    timeDiff: string;
    series: Season[];
}