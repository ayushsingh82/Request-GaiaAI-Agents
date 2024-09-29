import React from 'react'
import { ConnectButton } from '@rainbow-me/rainbowkit';

function Navbar() {
    return (
      <nav className=''>
        <div className='flex flex-row mx-auto px-[40px] py-[25px] justify-between items-center mt-[0px] bg-black'>
          <div className='font-semibold text-2xl text-purple-400'>
            <a href='/'>Expanding-Gaia</a>
          </div>
          <div className='flex justify-center flex-1 space-x-8 text-center'>
            <h1 className='font-medium text-xl text-white'>
              <a href='/form'>Agents</a>
            </h1>
            <h1 className='font-medium text-xl text-white'>
              <a href='/bounties'>Bounties</a>
            </h1>
          </div>
          <div className='text-white'>
           <ConnectButton/>
          </div>
        </div>
        <hr className='border-t-2 border-purple-600' />
      </nav>
    );
  }
  

export default Navbar