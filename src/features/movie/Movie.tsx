import React from 'react';
import { useGetMovieByIdQuery, useGetMovieCreditsByIdQuery } from '../../services/movies';
import {HorizontalList} from '../../components/lists/HorizontalList';

type Props = {
    Id: number;
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
    return (<div><h1>Movie</h1><h2>{movie.data.title}</h2><h2>Credits</h2><h3><HorizontalList>{credits.data?.cast?.map((c, id) => <li key={"cred-"+id} ><div>{c.character}</div><div>{c.name}</div></li>)}</HorizontalList></h3></div>);
}

export default Movie;