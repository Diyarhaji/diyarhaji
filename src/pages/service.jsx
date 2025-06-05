import React from 'react';
import { useTranslation } from 'react-i18next';
import Title from '../components/Title';
import { FaArrowRight } from "react-icons/fa";
import ButtonTwo from '../components/ButtonTwo';

const Service = () => {
  const { t } = useTranslation();

  const services = t('services', { returnObjects: true });

  return (
    <section id="service" className="bg-bgTwo py-20">
      <Title text={t('myServices')} />
      <p data-aos="zoom-in" data-aos-duration="900" className="text-lg max-w-xl text-center mx-auto mt-3">
        {t('servicesIntro')}
      </p>
      <div className="grid max-sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mt-10 px-5">
        {Array.isArray(services) && services.map((service) => (
          <div data-aos="zoom-in" data-aos-duration="1200" className="bg-bgOne py-5 px-5 rounded-b-xl rounded-t-3xl" key={service.id}>
            <h3 className="text-md bg-gradient-to-tr from-hOne to-hTwo max-w-max py-1 px-4 rounded-full font-semibold">
              {service.pf}
            </h3>
            <h3 className="text-2xl mt-5 mb-2">{service.title}</h3>
            <p className="text-md">{service.description}</p>

            <div className="mt-9">
              <h3 className="text-lg">{t('keyFeatures')}</h3>
              <ul className="list-none">
                {Array.isArray(service.features) && service.features.map((feature, idx) => (
                  <li className="flex items-center gap-2 mt-2 text-md" key={idx}>
                    <div className="border rotate-45 border-hOne w-2 h-2"></div> {feature}
                  </li>
                ))}
              </ul>

              <div className="mt-10">
                <ButtonTwo text={t('learnMore')} icon={<FaArrowRight />} />
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Service;
