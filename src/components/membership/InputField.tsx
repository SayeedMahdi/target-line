import React from 'react';

interface InputFieldProps {
  id: string;
  label: string;
  type?: string;
  placeholder?: string;
}

export default function InputField({
  id,
  label,
  placeholder,
  type,
}: InputFieldProps) {
  return (
    <div className='sm:mb-4'>
      <label
        htmlFor={id}
        className='block text-sm font-medium text-[#C8C8C8] mb-2'
      >
        {label}
      </label>
      <input
        id={id}
        type={type}
        placeholder={placeholder}
        className='border border-[#919191] bg-[#919191] outline-none p-1 placeholder:text-xs placeholder:text-[#C8C8C8] rounded-lg w-full'
      />
    </div>
  );
}
