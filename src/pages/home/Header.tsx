/* eslint-disable jsx-a11y/anchor-is-valid */

import { NavBar } from './Navbar';

export const Header = () => {
  return (
    <header className='relative'>
      <NavBar />

      <div
        style={{ backgroundColor: '#333336' }}
        className='md:flex flex-col md:flex-row justify-center items-center md:h-12 px-1 py-1 md:px-0 md:py-0 text-center md:text-left text-xs md:text-sm text-gray-100 border-t border-gray-500'
      >
        <p>
          Aspernatur dolorem corporis eius neque facere quae quibusdam,
          excepturi, sint, eaque.
        </p>
        <a href='#' className='text-blue-500 hover:underline ml-2'>
          Learn More &#8250;
        </a>
      </div>
    </header>
  );
};
