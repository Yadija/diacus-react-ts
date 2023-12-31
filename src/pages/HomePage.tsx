import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

import axios from '../api/axios';
import ThreadInput from '../components/ThreadInput';
import useAuth from '../hooks/useAuth';
import useAxiosPrivate from '../hooks/useAxiosPrivate';
import useLogout from '../hooks/useLogout';

interface Thread {
  id: string;
  content: string;
  owner: string;
}

function HomePage() {
  const [threads, setThreads] = useState([]);
  const { auth } = useAuth();
  const axiosPrivate = useAxiosPrivate();
  const logout = useLogout();

  const onLogout = async () => {
    await logout();
  };

  const onCreateThread = async (content: string) => {
    try {
      await axiosPrivate.post('/threads', JSON.stringify({ content }));
      await getThreads();
    } catch (error) {
      console.error(error);
    }
  };

  const getThreads = async () => {
    try {
      const {
        data: { data },
      } = await axios.get('/threads');
      setThreads(data.threads);
    } catch (error) {
      console.error(error);
    }
  };

  useEffect(() => {
    getThreads();
  }, []);

  return (
    <>
      <nav className='flex justify-between bg-[#213555] p-4 text-[#F0F0F0]'>
        <h1>Diacus App</h1>
        {auth ? (
          <button onClick={onLogout} className='text-[#E5D283]'>
            Logout
          </button>
        ) : (
          <Link to='/login' className='text-[#E5D283]'>
            Login
          </Link>
        )}
      </nav>
      {auth && <ThreadInput onCreateThread={onCreateThread} />}
      <ul className='m-4 flex flex-col gap-2'>
        {threads.map((thread: Thread) => (
          <li key={thread.id}>
            <section className='flex w-full gap-2 bg-[#E5D283] px-2 py-4'>
              <div className='relative h-12 w-12 rounded-full bg-[#213555]'>
                <img
                  src={`https://ui-avatars.com/api/?name=${thread.owner}&background=random`}
                  alt={thread.owner}
                  sizes='100%'
                  className='rounded-full object-cover'
                />
              </div>
              <article className='flex-1'>
                <h2 className='text-sm'>@{thread.owner}</h2>
                <p className='text-2xl'>{thread.content}</p>
              </article>
            </section>
          </li>
        ))}
      </ul>
    </>
  );
}

export default HomePage;
