import { useTranslation } from 'react-i18next';

function LanguageSwitcher() {
  const { i18n } = useTranslation();
  const currentLang = i18n.language;

  const changeLanguage = (lng) => {
    i18n.changeLanguage(lng);
    document.documentElement.dir = lng === 'ar' || lng === 'kur' ? 'rtl' : 'ltr';
  };

  const languages = ['en', 'ar', 'kur'];

  return (
    <div className="flex gap-2 rtl:flex-row-reverse">
      {languages.map((lang) => (
        <button
          key={lang}
          onClick={() => changeLanguage(lang)}
          className={`px-2 py-1 text-sm rounded transition duration-300 ${
            currentLang === lang
              ? 'bg-[var(--hOne)] text-[var(--hThree)]'
              : 'border border-[var(--hOne)] text-[var(--hThree)] bg-transparent'
          }`}
        >
          {lang.toUpperCase()}
        </button>
      ))}
    </div>
  );
}

export default LanguageSwitcher;
