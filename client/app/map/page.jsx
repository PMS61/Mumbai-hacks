"use client";

// pages/index.js
import Map from './components/Map';
import Image from 'next/image';
import dynamic from 'next/dynamic';

function Home() {
  return (
  
    <div className=' flex justify-center items-center h-screen w-full bg-white'>
    <div>
      <Map v={30} color="blue" />
    </div>
    <img src="/MumbaiMap3.png" alt="Map" style={{position:"fixed",left:601}} className='absolute top-13  h-fit'/>
    </div>
  );
}

export default dynamic(() => Promise.resolve(Home), {
  ssr: false,
});