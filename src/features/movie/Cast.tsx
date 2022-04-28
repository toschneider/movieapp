import React from 'react';
import { Routes, Route, Link, useNavigate   } from "react-router-dom";
import { useGetMovieByIdQuery, useGetMovieCreditsByIdQuery } from '../../services/movies';
import {Cast as cast} from './CreditsInterface';

type Props = {
    cast: cast;
}

const Cast = ({cast}: Props) => {
    const navigate = useNavigate();
    return (
    <div onClick={()=>navigate("/person/"+cast.id)}>
      <h1>{cast.name}</h1>
      <h2>{cast.character}</h2>
      { cast.profile_path &&
      <img width="100" height="150"src={"https://image.tmdb.org/t/p/w300_and_h450_bestv2" + cast.profile_path}/>
}
    </div>);
}

export default Cast;