import React from 'react';
import Title from '../components/Title';
import SkillCard from '../components/SkillCard'; // adjust path as needed
import { useTranslation } from 'react-i18next';

const Skill = () => {
  const { t } = useTranslation();

  return (
    <section className="bg-bgOnte py-20">
      <Title data-aos="zoom-in" data-aos-duration="800" text={t('skill.title')} />
      <p  data-aos="zoom-in" data-aos-duration="900" className="text-lg max-w-xl text-center mx-auto mt-3">
         {t('skill.description')}
      </p>

      <div className="grid grid-cols-2 max-sm:grid-cols-1 px-[1%] py-10 gap-4">
        <SkillCard
          title={t('skill.cards.uiux.title')}
          items={[
            'User Interface Design',
            'User Experience Design',
            'Prototyping',
            'Wireframing',
            'Design Systems',
            'Accessibility',
          ]}
        />
        <SkillCard
          title={t('skill.cards.frontend.title')}
          items={[
            'HTML5',
            'CSS3',
            'JavaScript',
            'React.js',
            'Tailwind CSS',
            'Next.js',
          ]}
        />
        <SkillCard
          title={t('skill.cards.projectManagement.title')}
          items={[
            'Agile Methodology',
            'Scrum',
            'Team Leadership',
            'Resource Planning',
            'Risk Management',
            'Stakeholder Communication',
          ]}
        />
        <SkillCard
          title={t('skill.cards.tools.title')}
          items={[
            'Git',
            'GitHub',
            'VS Code',
            'Figma',
            'Adobe Creative Suite',
          ]}
        />
      </div>
    </section>
  );
};

export default Skill;