import { useState } from "react";
import { FaBars, FaTimes } from "react-icons/fa";
import { useTranslation } from "react-i18next";
import images from "../assets/images";
import LanguageSwitcher from '../components/LanguageSwitcher';
import ThemeToggle from "../components/ThemeToggle";
import {useEffect } from 'react'

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const { i18n } = useTranslation();
  const lang = i18n.language;
   const { t } = useTranslation();
    const [color, setColor] = useState(false);
  useEffect(() => {
    const changeColor = () => {
      if (window.scrollY >= 90) {
        setColor(true);
      } else {
        setColor(false);
      }
    };
    window.addEventListener('scroll', changeColor);
   
  }, []);

  const isRTL = lang === "ar" || lang === "kur";
  const toggleMenu = () => setIsOpen(!isOpen);

  return (
          <nav
            className={`fixed w-full top-0 right-0 z-50 transition-colors duration-300 ${
              color
                ? 'bg-hFive text-hThree bg-opacity-15'
                : 'bg-transparent'
            }`}
          >     
       <div className="mx-auto px-[2%] py-4 flex justify-between items-center">
        {/* Logo */}
        <div className="w-[200px]">
          <img src={images.logo} alt="logo" className="w-full h-full" />
        </div>

        {/* Desktop Menu */}
            <ul className="hidden md:flex text-lg text-center max-w-max mx-auto font gap-6 text-hThree">
      <li className="hover:text-hOne transition-all duration-500 cursor-pointer">
        <a href="#home">{t('nav.home')}</a>
      </li>
      <li className="hover:text-hOne transition-all duration-500 cursor-pointer">
        <a href="#about">{t('nav.about')}</a>
      </li>
      <li className="hover:text-hOne transition-all duration-500 cursor-pointer">
        <a href="#service">{t('nav.service')}</a>
      </li>
      <li className="hover:text-hOne transition-all duration-500 cursor-pointer">
        <a href="#project">{t('nav.project')}</a>
      </li>
      <li className="hover:text-hOne transition-all duration-500 cursor-pointer">
        <a href="#experience">{t('nav.experience')}</a>
      </li>
      <li className="hover:text-hOne transition-all duration-500 cursor-pointer">
        <a href="#contect">{t('nav.contact')}</a>
      </li>
    </ul>

        {/* Desktop Language & Theme Switchers */}
        <div className="flex gap-4 items-center max-sm:hidden">
          <LanguageSwitcher />
          <ThemeToggle />
        </div>
<div className=""></div>
        {/* Mobile Toggle */}
        <div  
          onClick={toggleMenu}
          className="text-2xl md:hidden cursor-pointer text-black dark:text-white"
        >
          {isOpen ? <FaTimes /> : <div className="bartab"></div>}
        </div>
      </div>

      {/* Slide-in Mobile Menu */}
      <div
        className={`fixed top-0 ${
          isRTL ? "left-0" : "right-0"
        } h-full w-64 bg-white dark:bg-gray-900 text-black dark:text-white shadow-lg transform transition-transform duration-300 ease-in-out z-40 ${
          isOpen ? "translate-x-0" : isRTL ? "-translate-x-full" : "translate-x-full"
        } md:hidden`}
      >
        <div className="mt-20 w-[215px] mx-auto">
          <img src={images.logo} alt="" className="w-full h-full" />
        </div>
        <div className="flex gap-4 mt-10 items-center flex-wrap max-sm:block">
          <div className="mx-auto max-w-max"><LanguageSwitcher /></div>
          <div className="mt-7"><ThemeToggle /></div>
        </div>
           <ul className="flex flex-col text-lg px-[7%] mt-6 font gap-6 text-hThree">
            <li onClick={toggleMenu} className="hover:text-hOne transition-all duration-500 cursor-pointer">
              <a href="#home">{t('nav.home')}</a>
            </li>
            <li onClick={toggleMenu} className="hover:text-hOne transition-all duration-500 cursor-pointer">
              <a href="#about">{t('nav.about')}</a>
            </li>
            <li onClick={toggleMenu} className="hover:text-hOne transition-all duration-500 cursor-pointer">
              <a href="#service">{t('nav.service')}</a>
            </li>
            <li onClick={toggleMenu} className="hover:text-hOne transition-all duration-500 cursor-pointer">
              <a href="#project">{t('nav.project')}</a>
            </li>
            <li onClick={toggleMenu} className="hover:text-hOne transition-all duration-500 cursor-pointer">
              <a href="#experience">{t('nav.experience')}</a>
            </li>
            <li onClick={toggleMenu} className="hover:text-hOne transition-all duration-500 cursor-pointer">
              <a href="#contect">{t('nav.contact')}</a>
            </li>
          </ul>
      </div>

      {/* Backdrop */}
      {isOpen && (
        <div
          onClick={toggleMenu}
          className="fixed inset-0 bg-hFive opacity-30 z-30 md:hidden"
        ></div>
      )}
    </nav>
  );
};

export default Navbar;