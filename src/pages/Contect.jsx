import React from 'react'
import Title from '../components/Title';
import { MdEmail } from "react-icons/md";  
import { FaLocationDot } from "react-icons/fa6";  
 
import { FaPhoneAlt } from "react-icons/fa";

import { IoLogoInstagram } from "react-icons/io5";
import { FaLinkedinIn } from "react-icons/fa";
import { FaThreads } from "react-icons/fa6";
import { SiRefinedgithub } from "react-icons/si";
import { useTranslation } from "react-i18next";
const contect = () => {
   const { t } = useTranslation();
  return (
    <section id='contect' className=" group py-20">
      <Title text={t("contect.title")} />
      <p data-aos="zoom-in" data-aos-duration="1200" className="text- max-w-xl text-center mx-auto mt-3">
       {t("contect.description")}
      </p>
        <div className="grid grid-cols-2 max-sm:grid-cols-1 max-sm:gap-5 max-sm:px-[3%] gap-20 px-[7%] mt-20">
           <div className="">
              <h1 data-aos="zoom-in-right" data-aos-duration="1300" className="text-xl">{t("contect.getInTouch")}</h1>
              <div  data-aos="zoom-in-left" data-aos-duration="1400" className="flex  gap-5 mt-5 bg-bgTwo  w-[400px] max-sm:max-w-max   py-2 px-4 items-center rounded-xl">
                <div className="bg-hOne p-3 rounded-full text-lg "><MdEmail /></div>
                <div className="">
                  <p className="text-lg mb-2">{t("contect.email")}</p>
                  <a href="mailto:diyargohdarhaji@gmail.com" className="tracking-widest text-lg">diyargohdarhaji@gmail.com</a>
                </div>
              </div>
              <div data-aos="zoom-in-right" data-aos-duration="1400" className="flex gap-5 mt-5 bg-bgTwo w-[400px]  max-sm:max-w-max  py-2 px-4 items-center rounded-xl">
                <div className="bg-hOne p-3 rounded-full text-lg"> <FaPhoneAlt /></div>
                <div className="">
                  <p className="text-lg mb-2">{t("contect.phone")}</p>
                  <a href="tel:+9647511968863" className="text-lg tracking-widest ">+9647511968863</a>
                </div>
              </div>
              <div data-aos="zoom-in-left" data-aos-duration="1400" className="flex gap-5 mt-5 bg-bgTwo w-[400px]  max-sm:max-w-max  py-2 px-4 items-center rounded-xl">
                <div className="bg-hOne p-3 rounded-full text-lg"> <FaLocationDot /></div>
                <div className="">
                  <p className="text-lg mb-2">{t("contect.location")}</p>
                  <a href="https://maps.app.goo.gl/b64UjrTzY8s9WR9k8" className="">{t("contect.locationValue")}</a>
                </div>
              </div>

              <div className=" mt-7">
                              <h3 data-aos="zoom-in-left" data-aos-duration="1400" className="text-lg">{t("contect.findMeIn")}</h3>
                              <div data-aos="zoom-in-right" data-aos-duration="1500" className="flex gap-1 mt-3 ">
              
                               <div className="bg-bgTwo group  p-3 rounded-full relative before:content-[''] before:bg-hOne z-10 before:-z-10  before:rounded-full before:scale-0 cursor-pointer before:transition-all before:duration-500 hover:before:scale-100  before:absolute before:inset-0 text-lg"> <a href="https://www.instagram.com/k.codestan/?next=%2F" className=""><IoLogoInstagram /></a>
                               </div>
                               <div className="bg-bgTwo group  p-3 rounded-full relative before:content-[''] before:bg-hOne z-10 before:-z-10  before:rounded-full before:scale-0 cursor-pointer before:transition-all before:duration-500 hover:before:scale-100  before:absolute before:inset-0 text-lg"> <a href="https://www.linkedin.com/in/diyar-gohdar-haji-7b1980281/" className=""><FaLinkedinIn /></a>
                               </div>
                               <div className="bg-bgTwo group  p-3 rounded-full relative before:content-[''] before:bg-hOne z-10 before:-z-10  before:rounded-full before:scale-0 cursor-pointer before:transition-all before:duration-500 hover:before:scale-100  before:absolute before:inset-0 text-lg"> <a href="https://www.threads.com/@k.codestan?xmt=AQF0oGtuLZAof5f6q-u3vX-FfMaecWVvBngrTB8DFqsboVo" className=""><FaThreads /></a>
                               </div>
                               <div className="bg-bgTwo group  p-3 rounded-full relative before:content-[''] before:bg-hOne z-10 before:-z-10  before:rounded-full before:scale-0 cursor-pointer before:transition-all before:duration-500 hover:before:scale-100  before:absolute before:inset-0 text-lg"> <a href="https://github.com/Diyarhaji" className=""><SiRefinedgithub /></a>
                               </div>
                              </div>
                            </div>
           </div>
           <div data-aos="zoom-in-left" data-aos-duration="1400" className="">
            <form action="https://api.web3forms.com/submit" method="POST" class="max-w-md mx-auto space-y-4  bg-bgTwo py-10 px-7 rounded-xl">
                <input type="hidden" name="access_key" value="88b12be7-ba71-4001-b950-78e6e4c3f9bb" />
                <div class="flex flex-col">
                  <label for="name" class="mb-1 text-sm font-medium">{t("contect.form.name")}</label>
                  <input type="text" id="name" placeholder={t("contect.form.namePlaceholder")}  name="name" required class="p-2 text-bgTwo rounded" />
                </div>
                <div class="flex flex-col">
                  <label for="email" class="mb-1 text-sm font-medium">{t("contect.form.email")}</label>
                  <input type="email" id="email" placeholder={t("contect.form.emailPlaceholder")} className='bg-bgOne text-bgTwo' name="email" required class="p-2 text-bgTwo rounded" />
                </div>
                <div class="flex flex-col">
                  <label for="message" class="mb-1 text-sm font-medium">{t("contect.form.message")}</label>
                  <textarea id="message" placeholder={t("contect.form.messagePlaceholder")} className='bg-bgOne text-bgTwo' name="message" required class="p-2 text-bgTwo rounded h-32 resize-none"></textarea>
                </div>
                <button type="submit" class="text-center w-full mx-auto mt-7 bg-hOne py-2  rounded-full text-lg">
                  {t("contect.form.submit")}
                </button>
              </form>
           </div>
        </div>
    </section>
  )
}

export default contect
