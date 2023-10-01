import { FormEvent } from 'react';

import useInput from '../hooks/useInput';

const ThreadInput = ({
  onCreateThread,
}: {
  onCreateThread: (content: string) => Promise<void>;
}) => {
  const [content, onContentChange, setContent] = useInput('');

  const handleSubmit = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    await onCreateThread(content);
    setContent('');
  };

  return (
    <form className='mx-2 my-4 flex w-full justify-center' onSubmit={handleSubmit}>
      <input
        type='text'
        placeholder='Write your message ...'
        onChange={onContentChange}
        value={content}
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
