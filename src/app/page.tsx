'use client';

import { useState } from 'react';
import { Snowfall } from 'react-snowfall';

export default function Home() {
  const [isSnowFalling, setIsSnowFalling] = useState<boolean>(false);

  return (
    <div className="relative h-screen font-['Playfair'] text-text bg-gradient-to-b from-[#0A355A] to-[rgba(10,53,90,0.5)]">
      {isSnowFalling ? <Snowfall rotationSpeed={[0.5, 4]} wind={[-0.5, 4]} radius={[0.5, 2.5]} /> : <></>}
      <main className='flex justify-center items-center' style={{ height: 'calc(100vh - 120px)' }}>
        <div className='flex flex-col items-center'>
          <div
            className='font-ralewayDots text-5xl'
            style={{
              textShadow: '0 0 5px #FFFFFF, 0 0 10px #FFFFFF, 0 0 20px #FFFFFF, 0 0 30px #87CEEB, 0 0 40px #87CEEB, 0 0 50px #0F4C81',
            }}
          >
            Winter Wonderland
          </div>
          <div className='text-2xl pt-4 text-text-70'>Where winter whispers magic.</div>
          <button
            className='px-8 py-3 mt-20 rounded-lg text-lg italic bg-[#0F4C81] shadow-[0_2px_24px_rgba(15,76,129,0.7)] transition-all 
            hover:shadow-[0_4px_18px_rgba(15,76,129,0.5)] active:shadow-[0_4px_18px_rgba(15,76,129,0.5)] active:scale-[0.98]'
            onClick={() => setIsSnowFalling(true)}
            disabled={isSnowFalling}
          >
            Let it snow!
          </button>
        </div>
      </main>
      <footer className='absolute bottom-0 w-full py-5 flex justify-center items-center text-sm bg-gradient-to-b from-[rgba(10,53,90,0.01)] to-[#0F4C81]'>
        Made with love in the heart of winter ❄
      </footer>
    </div>
  );
}
