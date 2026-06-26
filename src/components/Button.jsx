import React from 'react';
import { useTranslation } from 'react-i18next';

const Button = ({ text, icon }) => {
  const { i18n } = useTranslation();
  const currentLang = i18n.language;

  // Adjust translateY based on language
  const translateYClass =
    currentLang === 'ar' || currentLang === 'kur'
      ? 'hover:before:translate-y-[100%] before:translate-x-[30%]'
      : 'before:-translate-y-[120%]';

  return (
    <div
      className={`flex gap-2 items-center py-2 relative overflow-hidden
      before:content-[""] before:absolute before:inset-0 before:w-[200%] before:h-[200%] 
      before:bg-hTwo before:rounded-tr-full before:rounded-br-full before:-z-10 
      before:-translate-x-[30%] before:transition-all before:duration-500 
      hover:before:-translate-y-[50%] z-10 font-bold px-5 hover:scale-105 
      transition-all duration-500 bg-hOne max-w-max rounded-full text-md ${translateYClass}`}
    >
      {icon} {text}
    </div>
  );
};

export default Button;
