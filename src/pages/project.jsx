import React from 'react';
import { useTranslation } from 'react-i18next';
import Title from '../components/Title';
import images from '../assets/images';
import Button from '../components/Button';
import ButtonTwo from '../components/ButtonTwo';
import { FaExternalLinkAlt, FaGithub } from 'react-icons/fa';

const Project = () => {
  const { t } = useTranslation();

  const projects = [
    {
      id: 1,
      image: images.pThree,
      titleKey: 'projects.1.title',
      textKey: 'projects.1.description',
      featureKey: 'projects.1.features',
      bottomKey: 'projects.1.bottom',
      language: ['React', 'Tailwind CSS'],
      urlLive: 'https://diyarhaji.github.io/restaurant/',
      urlCode: 'https://github.com/Diyarhaji/restaurant',
    },
    {
      id: 2,
      image: images.pFour,
      titleKey: 'projects.2.title',
      textKey: 'projects.2.description',
      featureKey: 'projects.2.features',
      bottomKey: 'projects.2.bottom',
      language: ['React', 'CSS', 'HTML'],
      urlLive: 'https://diyarhaji.github.io/booking/',
      urlCode: 'https://github.com/Diyarhaji/booking',
    },
    {
      id: 3,
      image: images.pFive,
      titleKey: 'projects.3.title',
      textKey: 'projects.3.description',
      featureKey: 'projects.3.features',
      bottomKey: 'projects.3.bottom',
      language: ['HTML', 'CSS', 'JS'],
      urlLive: 'https://diyarhaji.github.io/furniture/',
      urlCode: 'https://github.com/Diyarhaji/furniture',
    },
    {
      id: 4,
      image: images.pSix,
      titleKey: 'projects.4.title',
      textKey: 'projects.4.description',
      featureKey: 'projects.4.features',
      bottomKey: 'projects.4.bottom',
      language: ['React', 'CSS', 'HTML'],
      urlLive: 'https://diyarhaji.github.io/restaurant-0/',
      urlCode: 'https://github.com/Diyarhaji/restaurant-0',
    },
    {
      id: 5,
      image: images.pNine,
      titleKey: 'projects.5.title',
      textKey: 'projects.5.description',
      featureKey: 'projects.5.features',
      bottomKey: 'projects.5.bottom',
      language: ['React', 'i18next', 'Tailwind CSS'],
      urlLive: 'https://diyarhaji.github.io/diyar',
      urlCode: 'https://github.com/Diyarhaji/diyar',
    },
    {
      id: 6,
      image: images.pSeven,
      titleKey: 'projects.6.title',
      textKey: 'projects.6.description',
      featureKey: 'projects.6.features',
      bottomKey: 'projects.6.bottom',
      language: ['React', 'Tailwind CSS'],
      urlLive: 'https://diyarhaji.github.io/nike/',
      urlCode: 'https://github.com/Diyarhaji/nike',
    },
    {
      id: 7,
      image: images.pTwo,
      titleKey: 'projects.7.title',
      textKey: 'projects.7.description',
      featureKey: 'projects.7.features',
      bottomKey: 'projects.7.bottom',
      language: ['React', 'Tailwind CSS', 'Framer Motion'],
      urlLive: 'https://diyarhaji.github.io/animateRestaurant/',
      urlCode: 'https://github.com/Diyarhaji/animateRestaurant',
    },
    {
      id: 8,
      image: images.pEight,
      titleKey: 'projects.8.title',
      textKey: 'projects.8.description',
      featureKey: 'projects.8.features',
      bottomKey: 'projects.8.bottom',
      language: ['React', 'Tailwind CSS', 'Framer Motion'],
      urlLive: 'https://diyarhaji.github.io/portfolio/',
      urlCode: 'https://github.com/Diyarhaji/portfolio',
    },
  ];

  return (
    <section id="project" className="py-20">
      <Title text={t('featuredProjects')} />
      <div className="py-10 grid grid-cols-3 max-sm:grid-cols-1 gap-4 px-[3%]">
        {projects.map((project) => {
          const features = t(project.featureKey, { returnObjects: true });
          return (
            <div
              data-aos="zoom-in"
              data-aos-duration="1000"
              className="shadow-md shadow-hFive bg-bgTwo rounded-lg"
              key={project.id}
            >
              <img
                src={project.image}
                alt={t(project.titleKey)}
                className="rounded-lg"
              />
              <div className="p-5">
                <h1 className="text-xl mb-2">{t(project.titleKey)}</h1>
                <p className="text-hFour text-md">{t(project.textKey)}</p>

                <ul className="flex flex-wrap gap-3 max-w-max mx-auto mt-5">
                  {project.language.map((lan, idx) => (
                    <li
                      className="list-none bg-hOne py-1 px-4 text-md rounded-full"
                      key={idx}
                    >
                      {lan}
                    </li>
                  ))}
                </ul>

                <h2 className="mt-5 text-lg">{t('keyFeatures')}</h2>
                {Array.isArray(features) &&
                  features.map((feature, idx) => (
                    <li
                      className="list-none flex gap-2 items-center mt-2"
                      key={idx}
                    >
                      <span className="border border-hOne w-2 h-2 rotate-45"></span>{' '}
                      {feature}
                    </li>
                  ))}
                <div className="mt-4 mb-7 bg-hOne max-w-max py-1 px-4 rounded-full">
                  {t(project.bottomKey)}
                </div>
                <div className="flex gap-4 max-w-max mx-auto">
                  <a href={project.urlLive} target="_blank" rel="noopener noreferrer">
                    <Button text={t('live')} icon={<FaExternalLinkAlt />} />
                  </a>
                  <a href={project.urlCode} target="_blank" rel="noopener noreferrer">
                    <ButtonTwo text={t('code')} icon={<FaGithub />} />
                  </a>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
};

export default Project;