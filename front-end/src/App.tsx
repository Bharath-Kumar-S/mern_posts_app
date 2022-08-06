import './App.css';
import { Route, Routes, BrowserRouter, Link } from 'react-router-dom';
import Login from './components/user/login';
import Register from './components/user/register';

function App() {
  return (
    <BrowserRouter>
    <nav className='nav'>
        <Link to="/login">Login</Link>
        <Link to="/register">Register</Link>
    </nav>
      <div className="App">
        <Routes>
            <Route path='login' element={<Login />} />
            <Route path='register' element={<Register />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
