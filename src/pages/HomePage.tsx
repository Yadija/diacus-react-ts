function HomePage() {
  return (
    <>
      <nav className='bg-[#213555] p-4 text-[#F0F0F0]'>
        <h1>Diacus App</h1>
      </nav>
      <ul className='m-4 flex flex-col gap-2'>
        <li>
          <section className='flex w-full gap-2 bg-[#E5D283] px-2 py-4'>
            <div className='relative h-12 w-12 rounded-full bg-[#213555]'>
              <img
                src='https://ui-avatars.com/api/?name=johndoe&background=random'
                alt='johndoe'
                sizes='100%'
                className='rounded-full object-cover'
              />
            </div>
            <article className='flex-1'>
              <h2 className='text-sm'>@johndoe</h2>
              <p className='text-2xl'>Content</p>
            </article>
          </section>
        </li>
        <li>
          <section className='flex w-full gap-2 bg-[#E5D283] px-2 py-4'>
            <div className='relative h-12 w-12 rounded-full bg-[#213555]'>
              <img
                src='https://ui-avatars.com/api/?name=janedoe&background=random'
                alt='janedoe'
                sizes='100%'
                className='rounded-full object-cover'
              />
            </div>
            <article className='flex-1'>
              <h2 className='text-sm'>@janedoe</h2>
              <p className='text-2xl'>Threads!!!</p>
            </article>
          </section>
        </li>
      </ul>
    </>
  );
}

export default HomePage;
