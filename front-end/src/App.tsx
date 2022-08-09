import './App.css';
import { Route, Routes, BrowserRouter, Link } from 'react-router-dom';
import Login from './components/user/login';
import Register from './components/user/register';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';

const queryClient = new QueryClient();

function App() {
  return (
    <QueryClientProvider client={queryClient}>
    <BrowserRouter>
      <section className='app-container'>
        <ul>
          <li> <Link to="/">Login</Link> </li>
          <li> <Link to="/register">Register</Link> </li>
        </ul>
        <div className="App">
          <Routes>
            <Route path='/' element={<Login />} />
            <Route path='register' element={<Register />} />
          </Routes>
        </div>
      </section>
    </BrowserRouter>
    </QueryClientProvider>
  );
}

export default App;
