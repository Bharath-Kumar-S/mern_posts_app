import './App.css';
import { Route, Routes, BrowserRouter, Link } from 'react-router-dom';
import Login from './components/user/login';
import Register from './components/user/register';

function App() {
  return (
    <BrowserRouter>
      <section className='app-container'>
        <ul>
          <li> <Link to="/login">Login</Link> </li>
          <li> <Link to="/register">Register</Link> </li>
        </ul>
        <div className="App">
          <Routes>
            <Route path='login' element={<Login />} />
            <Route path='register' element={<Register />} />
          </Routes>
        </div>
      </section>
    </BrowserRouter>
  );
}

export default App;
