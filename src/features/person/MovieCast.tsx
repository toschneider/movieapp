import React from 'react';
import { useNavigate   } from "react-router-dom";
// import { useGetMovieByIdQuery, useGetMovieCreditsByIdQuery } from '../../services/movies';
import {MovieCast as cast} from './MovieCreditsInterface';

type Props = {
    movieCast: cast;
}

const MovieCast = ({movieCast}: Props) => {
    const navigate = useNavigate();
    return (
    <div onClick={()=>navigate("/person/"+movieCast.id)}>
      <h1>{movieCast.character}</h1>
      <h1>{movieCast.title}</h1>
      { movieCast.poster_path &&
      <img alt={"moviecast-img-"+movieCast.id} width="100" height="150"src={"https://image.tmdb.org/t/p/w300_and_h450_bestv2" + movieCast.poster_path}/>
}
    </div>);
}

export default MovieCast;