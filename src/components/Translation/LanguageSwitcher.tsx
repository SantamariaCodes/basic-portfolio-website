import React, { useState, useRef, useEffect } from 'react';
import { useTranslation } from 'react-i18next';

const LanguageSwitcher = () => {
  const { i18n } = useTranslation();
  const [showDropdown, setShowDropdown] = useState(false);
  const wrapperRef = useRef<HTMLDivElement | null>(null);

  const changeLanguage = (lng: 'en' | 'es') => {
    i18n.changeLanguage(lng);
    setShowDropdown(false);
  };

  const handleClickOutside = (event: MouseEvent) => {
    if (wrapperRef.current && !wrapperRef.current.contains(event.target as Node)) {
      setShowDropdown(false);
    }
  };

  useEffect(() => {
    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, []);

  return (
    <div ref={wrapperRef} className="relative cursor-pointer rounded-sm">
      <div onClick={() => setShowDropdown(!showDropdown)}>
        {i18n.language === 'en' ? 'ENG' : 'ESP'}
        <span className="ml-1"></span>
        <span className="">▼</span>
      </div>

      {showDropdown && (
        <div className="absolute right-0 mt-2 w-auto rounded-sm shadow-lg bg-white ring-1 ring-black ring-opacity-5 focus:outline-none z-10">
          <div className="" role="none">
            {i18n.language === 'en' && (
              <button
                onClick={() => changeLanguage('es')}
                className="text-gray-700 block w-full text-left px-4 py-2 text-sm hover:text-deepBlue"
              >
                ESP
              </button>
            )}
            {i18n.language === 'es' && (
              <button
                onClick={() => changeLanguage('en')}
                className="text-gray-700 block w-full text-left px-4 py-2 text-sm hover:text-deepBlue"
              >
                ENG
              </button>
            )}
          </div>
        </div>
      )}
    </div>
  );
};

export default LanguageSwitcher;
