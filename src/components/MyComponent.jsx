import React, { useEffect, useRef } from "react";
import Typed from "typed.js";
import { useTranslation } from "react-i18next";

const MyComponent = () => {
  const { t, i18n } = useTranslation();
  const el = useRef(null);
  const typedInstance = useRef(null);

  useEffect(() => {
    // Get the translated strings as an array
    const strings = t("typed.strings", { returnObjects: true });

    typedInstance.current = new Typed(el.current, {
      strings,
      typeSpeed: 70,
      backSpeed: 70,
      loop: true,
    });

    // Cleanup on unmount or language change
    return () => {
      typedInstance.current.destroy();
    };
  }, [i18n.language]); // re-run effect when language changes

  return <span className="text-hOne text-3xl" ref={el}></span>;
};

export default MyComponent;