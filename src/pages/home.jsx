import React from 'react';
import images from "../assets/images";
import MyComponent from '../components/MyComponent';
import Button from '../components/Button';
import ButtonTwo from '../components/ButtonTwo';
import { IoMdMail, IoMdDownload } from "react-icons/io";
import { IoLogoInstagram } from "react-icons/io5";
import { FaLinkedinIn } from "react-icons/fa";
import { FaThreads } from "react-icons/fa6";
import { SiRefinedgithub } from "react-icons/si";
import Slide from '../components/Slide';
import { useTranslation } from 'react-i18next';
import "../App.css";

const Home = () => {
 const { t, i18n } = useTranslation();
  const lang = i18n.language;
  const isRTL = lang === 'ar' || lang === 'kur';


  return (
    <section id='home' className='bag'>
      <div className="grid grid-cols-2 max-sm:grid-cols-1 px-[3%] gap-6 py-20">
        <div className="mt-[90px] max-sm:mt-[50px] max-sm:px-[2%] max-sm:order-2">
          <p  data-aos="fade-right" data-aos-duration="800" className="text-lg">{t('home.greeting')}</p>
          <h1 data-aos="fade-left" data-aos-duration="900" className="text-7xl mt-2 mb-2">
            {t('home.name')} <span className="text-hOne">{t('home.namet')}</span>
          </h1>
          <div data-aos="fade-right" data-aos-duration="1000" className="mt-4"><MyComponent /></div>
          <p data-aos="fade-left" data-aos-duration="1100" className="max-w-sm text-lg mt-4">{t('home.description')}</p>
          <div className="mt-7">
            <h3 data-aos="fade-right" data-aos-duration="1200" className="text-lg ">{t('home.findMe')}</h3>
            <div data-aos="fade-left" data-aos-duration="1300" className="flex gap-1 mt-3">
              <SocialIcon href="https://www.instagram.com/k.codestan/?next=%2F" icon={<IoLogoInstagram />} />
              <SocialIcon href="https://www.linkedin.com/in/diyar-gohdar-haji-7b1980281/" icon={<FaLinkedinIn />} />
              <SocialIcon href="https://www.threads.com/@k.codestan?xmt=AQF0oGtuLZAof5f6q-u3vX-FfMaecWVvBngrTB8DFqsboVo" icon={<FaThreads />} />
              <SocialIcon href="https://github.com/Diyarhaji" icon={<SiRefinedgithub />} />
            </div>
          </div>

          <div data-aos="fade-right" data-aos-duration="1400"  className="mt-5 flex max-sm:flex-col max-sm:gap-7 gap-3">
            <a href="#contact"><Button text={t('home.contact')} icon={<IoMdMail />} /></a>
            <a href={images.diyarhaji} target="_blank"><ButtonTwo text={t('home.downloadCV')} icon={<IoMdDownload />} /></a>
          </div>
        </div>

        <div className="relative max-sm:order-1 z-10">
          <div>
            <img src={images.diyar} data-aos="zoom-in-up" data-aos-duration="900" alt="" className='w-[380px] max-sm:max-w-max max-sm:mx-auto max-sm:mt-10 max-sm:w-[330px] max-sm:rounded-lg z-50 h-full' />
          </div>
          <div className={`top-0 left-0 absolute flex gap-2 -z-10 ${isRTL ? 'flex-row-reverse  gap-1' : ''}`}>
            <img src={images.bgTop} data-aos="zoom-in-right" data-aos-duration="800" alt="" className='w-[280px] max-sm:h-[560px] max-sm:w-[600px] h-[590px] ml-0 rotate-180 -z-10' />
            <img src={images.bgBottom} alt="" data-aos="zoom-in-left" data-aos-duration="800" className='w-[280px] max-sm:w-[600px] max-sm:h-[590px] h-[660px] -mt-20 rotate-180 relative -z-10' />
            <div   className={`absolute max-sm:hidden top-20 max-sm:-right-2 ${isRTL ? 'left-20 ' : 'right-10'}`}>
              <div className={`flex gap-3 items-center ${isRTL ? 'flex-row-reverse gap-1  text-right' : 'text-left'}`}>
                <h1 className="text-9xl max-sm:text-6xl">3</h1>
                <p className={`max-w-[100px]   ${isRTL ? 'text-xl -ml-10' : 'text-lg'}`}>{t('home.experience')}</p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="-mt-20 max-sm:-mt-10 "><Slide /></div>
    </section>
  );
};

const SocialIcon = ({ href, icon }) => (
  <div className="bg-bgTwo group p-3 rounded-full relative before:content-[''] before:bg-hOne z-10 before:-z-10 before:rounded-full before:scale-0 cursor-pointer before:transition-all before:duration-500 hover:before:scale-100 before:absolute before:inset-0 text-lg">
    <a href={href} target="_blank" rel="noopener noreferrer">{icon}</a>
  </div>
);

export default Home;