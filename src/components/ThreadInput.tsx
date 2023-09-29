import { FormEvent } from 'react';

import useAxiosPrivate from '../hooks/useAxiosPrivate';
import useInput from '../hooks/useInput';

const ThreadInput = () => {
  const [content, onContentChange] = useInput('');
  const axiosPrivate = useAxiosPrivate();

  const onCreateThread = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    try {
      const {
        data: { data },
      } = await axiosPrivate.post('/threads', JSON.stringify({ content }));
      console.log(data);
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <form className='mx-2 my-4 flex w-full justify-center' onSubmit={onCreateThread}>
      <input
        type='text'
        placeholder='Write your message ...'
        onChange={onContentChange}
        className='mx-2 w-96 rounded-xl px-3 py-1 shadow-sm'
      />
      <button
        type='submit'
        className='rounded-xl bg-[#213555] px-3 py-1 text-[#F0F0F0] shadow-sm'
      >
        Send
      </button>
    </form>
  );
};

export default ThreadInput;
