import { Route, Routes } from 'react-router-dom';

import useAuth from './hooks/useAuth';
import HomePage from './pages/HomePage';
import LoginPage from './pages/LoginPage';
import RegisterPage from './pages/RegisterPage';

function App() {
  const { auth } = useAuth();

  return (
    <main className='relative m-auto min-h-screen max-w-xl bg-[#F0F0F0]'>
      {auth === null ? (
        <Routes>
          <Route path='/' element={<HomePage />} />
          <Route path='/login' element={<LoginPage />} />
          <Route path='/register' element={<RegisterPage />} />
        </Routes>
      ) : (
        <Routes>
          <Route path='/' element={<HomePage />} />
        </Routes>
      )}
    </main>
  );
}

export default App;
