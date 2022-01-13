import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import MainPage from './pages/MainPage';
import MovieDetail from './pages/MovieDetail';
import TvDetail from './pages/TvDetail';
import TvPage from './pages/TvPage';


function App() {
  return (
    <Router> 
      <Routes>
        <Route path="/*" element={<MainPage/>}/>
        <Route path="/tv" element={<TvPage/>} />
        <Route path="/movie/:id" element={<MovieDetail/>} />
        <Route path="/tv/:id" element={<TvDetail/>} />
      </Routes> 
    </Router>
  );
}

export default App;
