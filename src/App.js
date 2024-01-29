import './App.css';

import {BrowserRouter, Routes, Route} from 'react-router-dom'
import LoginPage from './pages/LoginPage';
import Netflix from './pages/Netflix';
import SignUpPage from './pages/SignUpPage';
import Player from './pages/Player';
import MoviePage from './pages/MoviePage';
import TvShow from './pages/TvShow';
import Header from './components/Header';
import BackgroundImage from './components/BackgroundImage';
function App() {
  return (
    <div className="App">
      <BrowserRouter>
      <Routes>
        <Route exact path='/login' element={<LoginPage/>}/>
        <Route exact path='/signup' element={<SignUpPage/>}/>
        <Route exact path='/player' element={<Player/>}/>
        <Route exact path='/tv' element={<TvShow/>}/>
        <Route exact path='/' element={<Netflix/>}/>
        <Route exact path='/movie' element={<MoviePage/>}/>
      </Routes>

      </BrowserRouter>
    </div>
  );
}

export default App;
