import { Routes, Route } from 'react-router-dom';

// import './App.css';
import Header from './components/Header/Header';
import LoginPage from './components/Login/LoginPage';
import RegisterPage from './components/Register/RegisterPage';
import MyListPage from './components/MyCollection/MyCollectionPage';
import HomePage from './components/Home/HomePage';
import DetailsPage from './components/Details/DetailsPage';
import OverviewPage from "./components/Details/OverviewPage";
import CreatePage from './components/Create/CreatePage';
import UpdatePage from './components/Update/UpdatePage';
import Page404 from './components/404/404';
import Logout from './components/Logout/Logout';
import Footer from './components/Footer/Footer';
import { UserProvider } from './contexts/UserContext';
import { MovieProvider } from './contexts/MovieContext';
import { GenreProvider } from './contexts/GenreContext';

function App() {
  return (
    <UserProvider>
      <MovieProvider>
        <GenreProvider>
          <div className="App">

            <Header />

            <Routes>
              <Route path="/" element={<HomePage />} />
              <Route path="/login" element={<LoginPage />} />
              <Route path="/logout" element={<Logout />} />
              <Route path="/register" element={<RegisterPage />} />
              <Route path="/my-list" element={<MyListPage />} />
              <Route path="/details/:id" element={<DetailsPage />} />
              <Route path="/details/:id/overview" element={<OverviewPage />} />
              <Route path="/create" element={<CreatePage />} />
              <Route path="/update/:id" element={<UpdatePage />} />
              <Route path="/*" element={<Page404 />} />
            </Routes>

            <Footer />
          </div>
        </GenreProvider>
      </MovieProvider>
    </UserProvider>
  );
}

export default App;
