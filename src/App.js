import logo from './logo.svg';
import './App.css';
import { BrowserRouter ,Route,Routes } from 'react-router-dom';
import Signup from './auth/Signup';
import Login from './auth/Login';
import Home from './components/Home';
import View from './components/view';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path={'/'} element={<Signup/>} />
        <Route path={'/login'} element={<Login/>} />
        <Route path={'/home'} element={<Home/>} />
        <Route path={'/view'} element={<View/>} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
