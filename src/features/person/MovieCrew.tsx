import React from 'react';
import { Routes, Route, Link, useNavigate   } from "react-router-dom";
import { useGetMovieByIdQuery, useGetMovieCreditsByIdQuery } from '../../services/movies';
import {MovieCrew as crew} from './MovieCreditsInterface';

type Props = {
    movieCrew: crew;
}

const MovieCrew = ({ movieCrew}: Props) => {
    const navigate = useNavigate();
    return (
    <div onClick={()=>navigate("/person/"+movieCrew.id)}>
      <h1>{movieCrew.job}</h1>
      <h2>{movieCrew.title}</h2>
      {/* { movieCredit.cast.poster_path &&
      <img width="100" height="150"src={"https://image.tmdb.org/t/p/w300_and_h450_bestv2" + cast.profile_path}/>
} */}
    </div>);
}

export default MovieCrew;