import { useTranslation } from "react-i18next";

// Arrow pointing to the left
const ArrowLeft = ({ isBold }: { isBold: boolean }) => (
  <svg
    className={`inline ml-1 h-4 w-4 ${isBold ? "text-white" : "text-gray-500"}`}
    viewBox="0 0 24 24"
  >
    <path
      fill="currentColor"
      d="M14.828 4.172a.5.5 0 00-.707 0L7.05 11.243a.5.5 0 000 .707l7.07 7.07a.5.5 0 00.707-.707l-6.364-6.364l6.364-6.364a.5.5 0 000-.707z"
    />
  </svg>
);

// Arrow pointing to the right
const ArrowRight = ({ isBold }: { isBold: boolean }) => (
  <svg
    className={`inline mr-1 h-4 w-4 ${isBold ? "text-white" : "text-gray-500"}`}
    viewBox="0 0 24 24"
  >
    <path
      fill="currentColor"
      d="M9.172 4.172a.5.5 0 01.707 0l7.071 7.071a.5.5 0 010 .707l-7.07 7.071a.5.5 0 01-.707-.707l6.364-6.364l-6.364-6.364a.5.5 0 010-.707z"
    />
  </svg>
);

export function LanguageSwitcherCommon() {
  const { i18n } = useTranslation();

  const changeLanguage = (lng: string) => {
    i18n.changeLanguage(lng);
  };

  const isCurrentLanguage = (lng: string) => {
    return i18n.language === lng;
  };

  const hoverClass = "hover:text-deepBlue";

  return (
    <div className="flex items-center">
      <button
        className={`text-black border-none focus:outline-none mr-2 lg:text-xl  leading-tight rounded font-yourFontFamily
        ${isCurrentLanguage("en") ? "font-extrabold" : hoverClass}`}
        onClick={() => changeLanguage("en")}
      >
        <ArrowLeft isBold={isCurrentLanguage("en")} /> ENG
      </button>
      <button
        className={`text-black border-none focus:outline-none ml-2 lg:text-xl  leading-tight rounded font-yourFontFamily
        ${isCurrentLanguage("es") ? "font-extrabold" : hoverClass}`}
        onClick={() => changeLanguage("es")}
      >
        ESP <ArrowRight isBold={isCurrentLanguage("es")} />
      </button>
    </div>
  );
}
