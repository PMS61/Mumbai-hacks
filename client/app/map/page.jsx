"use client";

// pages/index.js
import Map from './components/Map';
import Image from 'next/image';
import dynamic from 'next/dynamic';

function Home() {
  return (
    <div className='h-5/6'>
    <div>
      <Map v={20} color="blue" />
    </div>
    <img src="/MumbaiMap3.png" alt="Map" className='absolute top-0 h-fit'/>
    </div>
  );
}

export default dynamic(() => Promise.resolve(Home), {
  ssr: false,
});