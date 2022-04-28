import React from 'react';
import { BrowserRouter, Routes, Route } from "react-router-dom";

import './App.css';

import Movie from './features/movie/Movie';
import Person from './features/person/Person';

function App() {
  return (
    <div className="App">
    <BrowserRouter>
      <Routes>
      <Route path="/" element={<Movie Id={"120"}></Movie>} />
      <Route path="/movie" element={<Movie Id={"120"}></Movie>} />
      <Route path="/movie/:id" element={<Movie Id={"120"}></Movie>} />
      <Route path="/person/:id" element={<Person Id={"120"}></Person>} />
      </Routes>
    </BrowserRouter>
    </div>
  );
}

export default App;
