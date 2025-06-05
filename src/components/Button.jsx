import React from 'react'

const Button = ({ text, icon }) => {
  return (
    <div className='flex gap-2 items-center  py-2  relative before:content-[""] overflow-hidden before:absolute before:inset-0 before:w-[200%] before:h-[200%] before:bg-hTwo before:rounded-tr-full before:rounded-br-full z-10 before:-z-10 before:-translate-x-[30%] before:transition-all before:duration-500 before:-translate-y-[120%] hover:before:-translate-y-[50%] font-bold px-5 hover:scale-105 transition-all duration-500 bg-hOne max-w-max rounded-full text-md'>
      {icon} {text}
    </div>
  );
};

export default Button
