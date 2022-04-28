import React from 'react';
import { useParams } from "react-router-dom";
// import styled from 'styled-components';
// import { useGetMovieByIdQuery, useGetMovieCreditsByIdQuery } from '../../services/movies';
import {useGetPersonByIdQuery, useGetMovieCreditsByPersonIdQuery} from '../../services/persons';
import {HorizontalList} from '../../components/lists/HorizontalList';
// import Cast from '../movie/Cast';
import MovieCast from './MovieCast';
import MovieCrew from './MovieCrew';


const Person = () => {
  const { id } = useParams()
  const person = useGetPersonByIdQuery(""+id);
  const movieCredits = useGetMovieCreditsByPersonIdQuery(""+id);
    // const movie = useGetMovieByIdQuery(Id);
    // const credits = useGetMovieCreditsByIdQuery(Id);

    // if (movie.isLoading) {
    //     return <div>Loading</div>;
    //   }

    // if (movie.isError || !movie.data) {
    //     return <div>Something went wrong</div>;
    //   }
    return (
    <div>
      <h1>{person.data?.name}</h1>
      <img alt={"person-img-"+person.data?.id} width="100" height="150"src={"https://image.tmdb.org/t/p/w300_and_h450_bestv2" + person.data?.profile_path}/>
      <h2>{person.data?.biography}</h2>

      <HorizontalList>
        {movieCredits.data?.cast.map((c, index) => <MovieCast key={"movieCast-"+index} movieCast={c}></MovieCast> )}
      </HorizontalList>
      <HorizontalList>
        {movieCredits.data?.crew.map((c, index) => <MovieCrew key={"movieCrew-"+index} movieCrew={c}></MovieCrew> )}
      </HorizontalList>

      {/* <h2>{movie.data.title}</h2>
      { movie.data.poster_path &&
      
}
      <h2>Credits</h2>
      <h3><HorizontalList>
        {credits.data?.cast?.map((c, id) => 
          // <li key={"cred-"+id} >
        //{/* <div>{c.character}</div><div>{c.name}</div> */}
        {/* <Cast key={"cast-"+id} cast={c} />
          // </li>
        )}
      </HorizontalList></h3> */} 
    </div>);
}

export default Person;