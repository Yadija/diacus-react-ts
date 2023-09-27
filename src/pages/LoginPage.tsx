import { AxiosError } from 'axios';
import { FormEvent, useContext, useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';

import axios from '../api/axios';
import { AuthContext } from '../context/AuthProvider';
import useInput from '../hooks/useInput';

function LoginPage() {
  const { setAuth } = useContext(AuthContext);
  const navigate = useNavigate();

  const [username, onUsernameChange] = useInput('');
  const [password, onPasswordChange] = useInput('');
  const [errorMessage, setErrorMessage] = useState('');

  const handleSubmit = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    try {
      const {
        data: { data },
      } = await axios.post('/auth', JSON.stringify({ username, password }), {
        headers: { 'Content-Type': 'application/json' },
      });
      setAuth(data);
      navigate('/');
    } catch (err) {
      const error = err as AxiosError;

      if (error?.response?.status === 401) {
        setErrorMessage('Invalid username or password');
      } else {
        console.log('Login Failed');
      }
    }
  };

  return (
    <div className='flex min-h-screen items-center justify-center'>
      <form
        className='flex w-[400px] flex-col gap-4 bg-[#213555] p-4'
        onSubmit={handleSubmit}
      >
        <h1 className='text-center text-2xl font-bold text-[#F0F0F0]'>Login</h1>
        {errorMessage && (
          <p className='translate-y-3 text-sm text-red-500 shadow-md'>*{errorMessage}</p>
        )}
        <input
          className='px-2 py-1'
          type='text'
          placeholder='username'
          onChange={onUsernameChange}
          required
        />
        <input
          className='px-2 py-1'
          type='password'
          placeholder='password'
          onChange={onPasswordChange}
          required
        />
        <button type='submit' className='mt-8 bg-[#E5D283] p-2 font-bold'>
          Login
        </button>
        <p className='text-center font-light text-[#F0F0F0]'>
          {`Don't have an account? `}
          <Link to='/register' className='text-[#E5D283]'>
            Register
          </Link>
        </p>
      </form>
    </div>
  );
}

export default LoginPage;
