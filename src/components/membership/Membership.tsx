import Image from 'next/image';
import hero from 'public/images/home/hero.png';
import React from 'react';

import HeroCard from '@/components/home/hero-section/HeroCard';
import Form from '@/components/membership/Form';

export default function Membership() {
  return (
    <div className='relative w-full h-screen'>
      <Image
        alt='hero section'
        src={hero}
        layout='fill'
        objectFit='cover'
        className='w-full h-screen -z-10'
      />
      <div className='absolute inset-0 flex flex-col justify-center items-center'>
        <HeroCard />
      </div>
      <div className='absolute inset-0 flex flex-col justify-center items-center mx-auto sm:gap-4 gap-2'>
        <h1 className='text-white font-bold text-2xl'>Membership</h1>
        <Form />
      </div>
    </div>
  );
}
