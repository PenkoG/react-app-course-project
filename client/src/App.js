import { Routes, Route } from 'react-router-dom';
import { useState, useEffect } from 'react';

import './App.css';
import Header from './components/Header';
import LoginPage from './components/Login/LoginPage';
import RegisterPage from './components/Register/RegisterPage';
import MyListPage from './components/MyList/MyListPage';
import HomePage from './components/Home/HomePage';
import DetailsPage from './components/Details/DetailsPage';
import OverviewPage from "./components/Details/OverviewPage";
import CreatePage from './components/Create/CreatePage';
import UpdatePage from './components/Update/UpdatePage';
import Page404 from './components/404/404';
import Logout from './components/Logout/Logout';
import { UserContext } from './contexts/UserContext';
import { MovieContext } from './contexts/MovieContext';

function App() {
  const [user, setUser] = useState({
    isAuthenticated: false,
    accessToken: '',
    username: '',
    name: '',
    _id: ''
  });

  const [movie, setMovie] = useState({
    _id: '',
    title: '',
    description: '',
    imgUrl: '',
    videoUrl: '',
    year: '',
    genre: '',
    duration: '',
    ownerId: ''
  });

  const login = (userData) => {
    setUser({ ...userData, isAuthenticated: true })
  }

  const onLogout = () => {
    setUser({
      isAuthenticated: false,
      accessToken: '',
      username: '',
      name: '',
      _id: ''
    })
  }

  const onMovieDetail = (movieData) => {
    setMovie(movieData)
  }

  return (
    <UserContext.Provider value={{ user, login }}>
      <MovieContext.Provider value={{ movie, onMovieDetail }}>
        <div className="App">
          <Header username={user.username} isAuthenticated={user.isAuthenticated} />

          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/login" element={<LoginPage />} />
            <Route path="/logout" element={<Logout onLogout={onLogout} />} />
            <Route path="/register" element={<RegisterPage />} />
            <Route path="/my-list" element={<MyListPage />} />
            <Route path="/details/:id" element={<DetailsPage />} />
            <Route path="/details/:id/overview" element={<OverviewPage />} />
            <Route path="/create" element={<CreatePage />} />
            <Route path="/update/:id" element={<UpdatePage />} />
            <Route path="/*" element={<Page404 />} />

          </Routes>
        </div>
      </MovieContext.Provider>
    </UserContext.Provider>
  );
}

export default App;
