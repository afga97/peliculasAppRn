import { useEffect, useState } from 'react';
import movieDB from '../api/movieDB';
import { MovieDBMoviesResponse, Movie } from '../interfaces/movieInterface';

interface MovieState {
    nowPlaying: Movie[];
    popular: Movie[];
    topRated: Movie[];
    upcoming: Movie[];
}

export const useMovies = () => {

    const [isLoading, setisLoading] = useState(true)
    const [movieState, setMovieState] = useState<MovieState>({
        nowPlaying: [],
        popular: [],
        topRated: [],
        upcoming: []
    });

    const getMovies = async () => {
        try {
            const resp = await Promise.all([
                await movieDB.get<MovieDBMoviesResponse>('/now_playing'),
                await movieDB.get<MovieDBMoviesResponse>('/popular'),
                await movieDB.get<MovieDBMoviesResponse>('/top_rated'),
                await movieDB.get<MovieDBMoviesResponse>('/upcoming')
            ])
            setMovieState({
                nowPlaying: resp[0].data.results,
                popular: resp[1].data.results,
                topRated: resp[2].data.results,
                upcoming: resp[3].data.results
            });
        } catch (error) {
            console.log(error);
        }
        setisLoading(false)
    }

    useEffect(() => {
        getMovies();
    }, [])


    return {
        ...movieState,
        isLoading,
    }

}
