import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
import { Credits } from '../features/movie/CreditsInterface';
import { Movie } from '../features/movie/MovieInterface';
import {Cast} from '../features/movie/CreditsInterface';
import {Person} from '../features/person/PersonInterface';
import {MovieCredits} from '../features/person/MovieCreditsInterface';

// https://developers.themoviedb.org/3/movies/get-movie-credits

export const personsApi = createApi({
    reducerPath: 'api/person',
    baseQuery: fetchBaseQuery({
    baseUrl: "https://api.themoviedb.org/3/",
        
    }),
    endpoints: (builder) => ({
    //   getMovies: builder.query<Movie[], void>({
    //     query: () => 'photos',
    //   }),
      getPersonById: builder.query<Person, string>({
        query: (personId: string) => `person/${personId}?api_key=c768e7308be543456c95aca82d106fcb`,
      }),
      getMovieCreditsByPersonId: builder.query<MovieCredits, string>({
        query: (personId: string) => ({url: `person/${personId}/movie_credits?api_key=c768e7308be543456c95aca82d106fcb`}),
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
    useGetPersonByIdQuery,
    useGetMovieCreditsByPersonIdQuery,
    // useUpdatePhotoMutation,
  } = personsApi;