import { Link } from 'react-router-dom';

function LoginPage() {
  return (
    <div className='flex min-h-screen items-center justify-center'>
      <form
        className='flex w-[400px] flex-col gap-4 bg-[#213555] p-4'
        onSubmit={(event) => console.log(event)}
      >
        <h1 className='text-center text-2xl font-bold text-[#F0F0F0]'>Login</h1>
        <input
          className='px-2 py-1'
          type='text'
          placeholder='username'
          onChange={(event) => console.log(event)}
          required
        />
        <input
          className='px-2 py-1'
          type='password'
          placeholder='password'
          onChange={(event) => console.log(event)}
          required
        />
        <button type='submit' className='mt-8 bg-[#E5D283] p-2 font-bold'>
          Login
        </button>
        <p className='text-center font-light text-[#F0F0F0]'>
          {`Don't have an account? `}
          <Link to='/' className='text-[#E5D283]'>
            Register
          </Link>
        </p>
      </form>
    </div>
  );
}

export default LoginPage;
