import React from 'react';
import Title from '../components/Title';
import { useTranslation } from 'react-i18next';
import { FaLocationDot } from "react-icons/fa6";
import { RxComponentBoolean } from "react-icons/rx";
import { RiCalendarScheduleFill, RiMedalFill } from "react-icons/ri";
import { SiGoogletasks } from "react-icons/si";

const Experience = () => {
  const { t } = useTranslation();

  return (
    <section id='experience' className='bg-bgTwo py-20'>
      <Title text={t('experience.educationTitle')} />
      <p data-aos="zoom-in" data-aos-duration="900" className="text-lg max-w-xl text-center mx-auto mt-3">
        {t('experience.description')}
      </p>

      <div className="grid grid-cols-2 max-sm:grid-cols-1 gap-3 mt-20 px-[4%]">
        {/* Work Experience */}
        <div >
          <h1 data-aos="zoom-in-right" data-aos-duration="800" className="text-3xl flex items-center gap-4">
            <div className="text-hOne"><RiCalendarScheduleFill /></div> {t('experience.workExperience')}
          </h1>

          {/* Project Manager */}
          <div data-aos="zoom-in-left" data-aos-duration="1000" className="bg-bgOne max-w-max py-5 px-4 rounded-lg mt-6">
            <h1 className="text-xl mb-1">{t('experience.projectManager.title')}</h1>
            <p className="flex text-hOne items-center gap-3">
              {t('experience.freelance')} • <FaLocationDot /> {t('experience.remote')}
            </p>
            <p className="text-hFour mb-4">{t('experience.projectManager.period')}</p>
           <ul className="list-none">
              {t('experience.projectManager.responsibilities', { returnObjects: true }).map((item, idx) => (
                <li key={idx} className="flex gap-2 items-center mt-2 max-w-lg">
                  <div className="text-hOne"><RxComponentBoolean /></div> {item}
                </li>
              ))}
            </ul>
          </div>

          {/* Front End Developer & UI/UX Designer */}
          <div data-aos="zoom-in-right" data-aos-duration="1200" className="bg-bgOne max-w-max py-5 px-4 rounded-lg mt-6">
            <h1 className="text-xl mb-1">{t('experience.frontendDesigner.title')}</h1>
            <p className="flex text-hOne items-center gap-3">
              {t('experience.freelance')} • <FaLocationDot /> {t('experience.remote')}
            </p>
            <p className="text-hFour mb-4">{t('experience.frontendDesigner.period')}</p>
            <ul className="list-none">
              {t('experience.frontendDesigner.responsibilities', { returnObjects: true }).map((item, idx) => (
                <li key={idx} className="flex gap-2 items-center mt-2 max-w-lg">
                  <div className="text-hOne"><RxComponentBoolean /></div> {item}
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Education & Certifications */}
        <div>
          <h1 data-aos="zoom-in-left" data-aos-duration="1000" className="text-3xl max-sm:text-2xl max-sm:mt-10 flex gap-2 items-center">
            <div className="text-hOne"><RiMedalFill /></div> {t('experience.educationCertifications')}
          </h1>

          {/* Bachelor Degree */}
          <div data-aos="zoom-in-right" data-aos-duration="1200" className="bg-bgOne max-w-max py-5 px-4 rounded-lg mt-6">
            <h1 className="text-xl mb-1 max-w-lg">{t('experience.bachelor.title')}</h1>
            <p className="flex text-hOne items-center gap-3">{t('experience.bachelor.university')}</p>
            <p className="text-hFour mb-4">{t('experience.bachelor.period')}</p>
          </div>

          {/* Professional Certifications */}
          <div data-aos="zoom-in-left" data-aos-duration="1400" className="bg-bgOne max-w-max py-5 px-4 rounded-lg mt-6">
            <h1 className="text-xl mb-1">{t('experience.professionalCertifications.title')}</h1>
            <ul className="list-none">
              {t('experience.professionalCertifications.items', { returnObjects: true }).map((item, idx) => (
                <li key={idx} className="flex gap-2 items-center mt-2 max-w-lg">
                  <div className="text-hOne"><SiGoogletasks /></div> {item}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Experience;