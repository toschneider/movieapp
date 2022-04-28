import React from 'react';
// import styled from 'styled-components';
import { useGetMovieByIdQuery, useGetMovieCreditsByIdQuery } from '../../services/movies';
import {HorizontalList} from '../../components/lists/HorizontalList';
import Cast from './Cast';

type Props = {
    Id: string;
}

const Movie = ({Id}: Props) => {
    const movie = useGetMovieByIdQuery(Id);
    const credits = useGetMovieCreditsByIdQuery(Id);

    if (movie.isLoading) {
        return <div>Loading</div>;
      }

    if (movie.isError || !movie.data) {
        return <div>Something went wrong</div>;
      }
    return (
    <div>
      <h1>Movie</h1>
      <h2>{movie.data.title}</h2>
      { movie.data.poster_path &&
      <img alt={"movie-img-"+movie.data.id} width="100" height="150"src={"https://image.tmdb.org/t/p/w300_and_h450_bestv2" + movie.data.poster_path}/>
}
      <h2>Credits</h2>
      <h3><HorizontalList>
        {credits.data?.cast?.map((c, id) => 
          // <li key={"cred-"+id} >
        //{/* <div>{c.character}</div><div>{c.name}</div> */}
        <Cast key={"cast-"+id} cast={c} />
          // </li>
        )}
      </HorizontalList></h3>
    </div>);
}

export default Movie;