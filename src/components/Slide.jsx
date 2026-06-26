import React from "react";
import "../App.css";
import { useTranslation } from "react-i18next";

const Slide = () => {
  const { t, i18n } = useTranslation();
  const items = t("slide.items", { returnObjects: true });

  // Determine animation direction
  const isRTL = i18n.language === "ar" || i18n.language === "kur";
  const marqueeClass = isRTL ? "animate-marquee-rtl" : "animate-marquee";

  return (
    <div className="w-full overflow-hidden bg-bgOne p-4">
      <div className="relative mask h-12">
        <div className={`flex whitespace-nowrap w-max ${marqueeClass}`}>
          {[...items, ...items].map((text, idx) => (
            <div
              key={idx}
              className="min-w-[200px] h-12 text-3xl gap-5 text-hThree flex items-center justify-center mx-4"
            >
              {text}
              <div className="loaderUto ml-2" />
            </div>
          ))}
        </div>
        <div className="absolute top-2 left-0 -z-20 -rotate-90 w-full h-full bg-second pointer-events-none" />
      </div>
    </div>
  );
};

export default Slide;
