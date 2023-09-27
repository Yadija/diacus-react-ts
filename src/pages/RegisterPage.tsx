import { AxiosError } from 'axios';
import { FormEvent, useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';

import axios from '../api/axios';
import useInput from '../hooks/useInput';

function RegisterPage() {
  const navigate = useNavigate();

  const [username, onUsernameChange] = useInput('');
  const [fullname, onFullnameChange] = useInput('');
  const [password, onPasswordChange] = useInput('');
  const [errorMessage, setErrorMessage] = useState('');

  const handleSubmit = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    try {
      await axios.post('/users', JSON.stringify({ username, fullname, password }), {
        headers: { 'Content-Type': 'application/json' },
      });
      navigate('/login');
    } catch (err) {
      const error = err as AxiosError;
      console.log(error.response);

      if (error?.response?.status === 400) {
        // eslint-disable-next-line @typescript-eslint/no-explicit-any
        const data: any = error?.response?.data;
        setErrorMessage(data?.message[0]);
      } else {
        console.log('Register Failed');
      }
    }
  };

  return (
    <div className='flex min-h-screen items-center justify-center'>
      <form
        className='flex w-[400px] flex-col gap-4 bg-[#213555] p-4'
        onSubmit={handleSubmit}
      >
        <h1 className='text-center text-2xl font-bold text-[#F0F0F0]'>Register</h1>
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
          type='text'
          placeholder='fullname'
          onChange={onFullnameChange}
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
          Register
        </button>
        <p className='text-center font-light text-[#F0F0F0]'>
          {`Already have an account? `}
          <Link to='/login' className='text-[#E5D283]'>
            Login
          </Link>
        </p>
      </form>
    </div>
  );
}

export default RegisterPage;
