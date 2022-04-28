import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
import { Credits } from '../features/movie/CreditsInterface';
import { Movie } from '../features/movie/MovieInterface';
// import {Cast} from '../features/movie/CreditsInterface';

// https://developers.themoviedb.org/3/movies/get-movie-credits

export const moviesApi = createApi({
    reducerPath: 'api/movie',
    baseQuery: fetchBaseQuery({
    baseUrl: "https://api.themoviedb.org/3/",
        
    }),
    endpoints: (builder) => ({
    //   getMovies: builder.query<Movie[], void>({
    //     query: () => 'photos',
    //   }),
      getMovieById: builder.query<Movie, string>({
        query: (movieId: string) => `movie/${movieId}?api_key=c768e7308be543456c95aca82d106fcb`,
      }),
      getMovieCreditsById: builder.query<Credits, string>({
        query: (movieId: string) => ({url: `movie/${movieId}/credits?api_key=c768e7308be543456c95aca82d106fcb`}),
      }),
      // getMoviePoster: builder.query<Cast, number>({
      //   query: (movieId: number) => ({url: `movie/${movieId}/credits?api_key=c768e7308be543456c95aca82d106fcb`})
      // })

    //   updatePhoto: builder.mutation<Movie, { id: number; data: Partial<Movie> }>({
    //     query: ({ id, data }) => ({
    //       url: `movie/${id}`,
    //       method: 'PATCH',
    //       body: data,
    //     }),
    //   }),
    }),
  });

  export const {
    // useGetMoviesQuery,
    useGetMovieByIdQuery,
    useGetMovieCreditsByIdQuery,
    // useUpdatePhotoMutation,
  } = moviesApi;