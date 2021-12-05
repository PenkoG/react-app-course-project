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

function App() {
  const [user, setUser] = useState({
    isAuthorized: false,
    accessToken: '',
    username: '',
    name: '',
    _id: ''
  });

  const onLogin = (userData) => {
    setUser({ ...userData, isAuthorized: true })
  }

  const onLogout = () => {

  }


  return (
    <UserContext.Provider value={true}>
      <div className="App">
        <Header username={user.username} isAuthorized={user.isAuthorized} />

        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/login" element={<LoginPage onLogin={onLogin} />} />
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
    </UserContext.Provider>
  );
}

export default App;
