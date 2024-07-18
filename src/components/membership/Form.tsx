import Image from 'next/image';
import logo from 'public/images/targetline logo.png';
import React from 'react';

import InputField from './InputField';

export default function Form() {
  return (
    <div className='z-50 bg-[#070707]/70 text-[#C8C8C8] sm:p-8 p-2 rounded-3xl'>
      <div className='flex justify-center mb-6'>
        <Image alt='logo' src={logo} className='sm:w-[108px] sm:h-[94px]' />
      </div>
      <h2 className='text-sm font-bold mb-6 text-center'>
        To become part of the extensive Targetline family, simply complete the
        following four fields:
      </h2>
      <div className='grid grid-cols-1 sm:grid-cols-2 gap-4'>
        <InputField
          id='name'
          label='First and last name'
          placeholder='First and last name'
        />
        <InputField
          id='phone'
          label='Phone number'
          placeholder='Phone number'
          type='tel'
        />
        <InputField
          id='password'
          label='Password'
          placeholder='Password'
          type='password'
        />
        <InputField
          id='position'
          label='Position/Company field of business'
          placeholder='Position'
        />
      </div>
      <div className='mt-6 flex justify-center'>
        <button className='bg-green-500 text-white py-2 px-6 w-44 rounded-full hover:bg-green-600'>
          Register
        </button>
      </div>
    </div>
  );
}
