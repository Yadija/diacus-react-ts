import { Route, Routes } from 'react-router-dom';

import HomePage from './pages/HomePage';

function App() {
  return (
    <main className='relative m-auto min-h-screen max-w-xl bg-[#F0F0F0]'>
      <Routes>
        <Route path='/' element={<HomePage />} />
      </Routes>
    </main>
  );
}

export default App;
