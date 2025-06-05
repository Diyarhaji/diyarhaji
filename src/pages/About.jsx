import React from 'react'
import images from "../assets/images"
import Title from '../components/Title'
import "../App.css"
import { useTranslation } from "react-i18next";

const About = () => {
  const { t } = useTranslation();

  return (
    <section id='about' className="py-20 px-6 md:px-4 bg-bgTwo">
      <h2 data-aos="zoom-in" data-aos-duration="800" className="text-4xl font-extrabold mb-12 text-center tracking-tight">
        <Title text={t("about.title")} />
      </h2>

      <div className="grid max-sm:grid-cols-1 grid-cols-[490px_1fr] md:flex-row items-center gap-10 mb-16">
        <div className="relative z-10">
          <img data-aos="fade-right" data-aos-duration="800"
            src={images.diyar} 
            alt={t("about.alt")}
            className="w-[340px] rounded-full object-cover shadow-lg max-w-max mx-auto"
          />
          <div data-aos="fade-left" data-aos-duration="900" className="inset-0 absolute reduis animate-blob mx-auto mt-10 max-sm:w-[370px] max-sm:h-[370px] w-[450px] -z-10 h-[450px] bg-hOne"></div>
        </div>

        <div className="max-w-3xl">
          <p data-aos="fade-left" data-aos-duration="800" className="text-lg max-sm:text-xl leading-relaxed mb-6">
            {t("about.description")}
          </p>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
            <div data-aos="fade-right" data-aos-duration="900" className="bg-bgOne rounded-xl shadow-md p-6">
              <h3 className="text-xl font-bold mb-3">{t("about.whatDrivesMe.title")}</h3>
              <ul className="list-disc list-inside space-y-2 text-hThree">
                <li><strong>{t("about.whatDrivesMe.performance.title")}: </strong>{t("about.whatDrivesMe.performance.desc")}</li>
                <li><strong>{t("about.whatDrivesMe.execution.title")}: </strong>{t("about.whatDrivesMe.execution.desc")}</li>
                <li><strong>{t("about.whatDrivesMe.team.title")}: </strong>{t("about.whatDrivesMe.team.desc")}</li>
                <li><strong>{t("about.whatDrivesMe.certified.title")}: </strong>{t("about.whatDrivesMe.certified.desc")}</li>
              </ul>
            </div>

            <div data-aos="fade-left" data-aos-duration="1000" className="bg-bgOne rounded-xl shadow-md p-6">
              <h3 className="text-xl font-bold mb-3">{t("about.myJourney.title")}</h3>
              <p className="text-hThree mb-3">{t("about.myJourney.paragraph1")}</p>
              <p className="text-hThree">{t("about.myJourney.paragraph2")}</p>
            </div>
          </div>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-6 text-center">
        <div data-aos="zoom-in" data-aos-duration="1200" className="bg-bgOne p-6 rounded-2xl shadow-lg hover:scale-105 transition-all duration-500">
          <h4 className="text-xl font-semibold mb-2 text-hOne">{t("about.languages.title")}</h4>
          <p className='text-lg'>{t("about.languages.english")} – <span className="text-hOne">{t("about.languages.fluent")}</span></p>
          <p className='text-lg'>{t("about.languages.arabic")} – <span className="text-hOne">{t("about.languages.native")}</span></p>
          <p className='text-lg'>{t("about.languages.kurdish")} – <span className="text-hOne">{t("about.languages.native")}</span></p>
        </div>

        <div data-aos="zoom-in" data-aos-duration="1400" className="bg-bgOne p-6 rounded-2xl shadow-lg hover:scale-105 transition-all duration-500">
          <h4 className="text-xl font-semibold mb-2 text-hOne">{t("about.additionalSkills.title")}</h4>
          <p className='text-lg mt-2'>{t("about.additionalSkills.typingSpeed")}</p>
          <p className='text-lg mt-2'>{t("about.additionalSkills.openSource")}</p>
        </div>
        
        <div data-aos="zoom-in" data-aos-duration="1600" className="bg-bgOne p-6 rounded-2xl shadow-lg hover:scale-105 transition-all duration-500">
          <h4 className="text-xl font-semibold mb-2 text-hOne">{t("about.personalStrengths.title")}</h4>
          <p className='text-lg mt-1'>{t("about.personalStrengths.strongCommunicator")}</p>
          <p className='text-lg mt-1'>{t("about.personalStrengths.detailOriented")}</p>
          <p className='text-lg mt-1'>{t("about.personalStrengths.fastLearner")}</p>
        </div>

        <div data-aos="zoom-in" data-aos-duration="1800" className="bg-bgOne p-6 rounded-2xl shadow-lg hover:scale-105 transition-all duration-500">
          <h4 className="text-xl font-semibold mb-2 text-hOne">{t("about.mindset.title")}</h4>
          <p className='text-lg mt-1'>{t("about.mindset.growthOriented")}</p>
          <p className='text-lg mt-1'>{t("about.mindset.resilient")}</p>
          <p className='text-lg mt-1'>{t("about.mindset.accountable")}</p>
        </div>
      </div>
    </section>
  )
}

export default About