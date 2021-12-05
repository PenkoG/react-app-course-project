import { Routes, Route } from 'react-router-dom';

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

function App() {
  return (
    <div className="App">
      <Header />

      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/login" element={<LoginPage />} />
        <Route path="/register" element={<RegisterPage />} />
        <Route path="/my-list" element={<MyListPage />} />
        <Route path="/details/:id" element={<DetailsPage />} />
        <Route path="/details/:id/overview" element={<OverviewPage />} />
        <Route path="/create" element={<CreatePage />} />
        <Route path="/update/:id" element={<UpdatePage />} />
        <Route path="/*" element={<Page404 />} />

      </Routes>
    </div>
  );
}

export default App;
