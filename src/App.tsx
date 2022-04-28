import React from 'react';
import { Routes, Route, Link } from "react-router-dom";

import logo from './logo.svg';
import './App.css';

import Movie from './features/movie/Movie';
import Person from './features/person/Person';

function App() {
  return (
    <div className="App">
      <Routes>
      <Route path="/" element={<Movie Id={"120"}></Movie>} />
      <Route path="/movie" element={<Movie Id={"120"}></Movie>} />
      <Route path="/movie/:id" element={<Movie Id={"120"}></Movie>} />
      <Route path="/person/:id" element={<Person Id={"120"}></Person>} />
      </Routes>
    </div>
  );
}

export default App;
