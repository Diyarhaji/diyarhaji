import React, { useRef } from 'react';

const SkillCard = ({ title, items }) => {
  const cardRef = useRef(null);

  const handleMouseMove = (e) => {
    const card = cardRef.current;
    const rect = card.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    card.style.setProperty('--x', `${x}px`);
    card.style.setProperty('--y', `${y}px`);
  };

  return (
    <div data-aos="zoom-in" data-aos-duration="800"
      ref={cardRef}
      onMouseMove={handleMouseMove}
      className="bg-bgTwo py-6 px-5 rounded-xl relative group overflow-hidden"
    >
      {/* Hover border effect */}
      <div data-aos="zoom-in" data-aos-duration="1000" className="pointer-events-none absolute inset-0 before:content-[''] before:absolute before:inset-0 before:rounded-xl before:border-2 before:border-transparent before:transition-all before:duration-300 group-hover:before:border-hFive before:bg-[radial-gradient(circle_at_var(--x)_var(--y),rgba(67,31,31,0.3),transparent)]" />
      
      <h1 className="text-xl relative z-10">{title}</h1>
      <div className="mt-5 flex flex-wrap gap-3 relative z-10">
        {items.map((item, index) => (
          <p key={index} className="bg-bgOne max-w-max py-2 px-4 rounded-full">{item}</p>
        ))}
      </div>
    </div>
  );
};

export default SkillCard;