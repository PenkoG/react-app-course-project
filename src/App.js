import './App.css';

import Header from "./components/Header";
import LoginPage from "./components/Login/LoginPage";
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
      <RegisterPage />

    </div>
  );
}

export default App;
