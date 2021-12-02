import './App.css';
import { Routes, Route } from 'react-router-dom';

import Header from './components/Header';
import LoginPage from './components/Login/LoginPage';
import RegisterPage from './components/Register/RegisterPage';
import MyListPage from './components/MyList/MyListPage';
import HomePage from './components/Home/HomePage';
import DetailsPage from './components/Details/DetailsPage';
import OverviewPage from "./components/Details/OverviewPage";
import CastPage from "./components/Details/CastPage";
import CreatePage from './components/Create/CreatePage';
import Page404 from './components/404/404';


function App() {
  return (
    <div className="App">
      <Header />

      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/login" element={<LoginPage />} />
        <Route path="/register" element={<RegisterPage />} />
        <Route path="/my-list" element={<MyListPage />} />
        <Route path="/details" element={<DetailsPage />} />
        <Route path="/details/cast" element={<CastPage />} />
        <Route path="/details/overview" element={<OverviewPage />} />
        <Route path="/create" element={<CreatePage />} />
        <Route path="/*" element={<Page404 />} />
      </Routes>

    </div>
  );
}

export default App;
