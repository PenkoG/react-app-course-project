import './App.css';
import { Routes, Route } from 'react-router-dom';

import Header from './components/Header';
import LoginPage from './components/Login/LoginPage';
import RegisterPage from './components/Register/RegisterPage';
import MyListPage from './components/MyList/MyListPage';
import HomePage from './components/Home/HomePage';
import DetailsTrailer from './components/Details/DetailsTrailer';
import CreatePage from './components/Create/CreatePage';
import Page404 from './components/404/404';


function App() {
  return (
    <div className="App">
      <Header />

      <Routes>
        <Route path="/login" element={<LoginPage />} />
        <Route path="/register" element={<RegisterPage />} />
        <Route path="/my-list" element={<MyListPage />} />
        <Route path="/home" element={<HomePage />} />
        <Route path="/details" element={<DetailsTrailer />} />
        <Route path="/create" element={<CreatePage />} />
        <Route path="/*" element={<Page404 />} />
      </Routes>

    </div>
  );
}

export default App;
