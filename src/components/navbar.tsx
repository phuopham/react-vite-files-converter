import { BsGithub } from 'react-icons/bs';

export default function Navbar({ }): any {
  return (
    <nav className="w-full backdrop-blur-md bg-white bg-opacity-30 z-50 fixed h-24 flex justify-between items-center py-10 px-4 md:px-8 lg:px-12 xl:px-16 2xl:px-24">
      <h1 className='text-lg font-bold uppercase text-emerald-600 tracking-widest'>Media <span className='text-gray-950'>converter</span></h1>
      <a className='rounded-full w-fit bg-emerald-300 gap-2 items-center flex p-2' href="https://github.com">
        <span className='hidden sm:inline'>Github Repo</span>
        <span className="text-xl">
          <BsGithub />
        </span>
      </a>
    </nav>
  );
}
