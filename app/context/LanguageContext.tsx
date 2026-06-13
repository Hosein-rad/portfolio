"use client";

import { createContext, useState, ReactNode, useEffect } from "react";
import en from "@/app/locales/en.json";
import fa from "@/app/locales/fa.json";

// Map language codes to their translation objects
const translations: Record<string, Record<string, any>> = { en, fa };

// The context shape
interface LanguageContextType {
  language: string;
  setLanguage: (lang: string) => void;
  t: (key: string) => string;
}

export const LanguageContext = createContext<LanguageContextType | undefined>(
  undefined
);

export const LanguageProvider = ({ children }: { children: ReactNode }) => {
  const [language, setLanguage] = useState(() => {
    if (typeof window === "undefined") return "en";
    const saved = localStorage.getItem("lang");
    return saved || (navigator.language.startsWith("fa") ? "fa" : "en");
  });

  // Persist language changes
  const changeLanguage = (lang: string) => {
    setLanguage(lang);
    localStorage.setItem("lang", lang);
  };

  useEffect(() => {
    document.documentElement.dir = language === "fa" ? "rtl" : "ltr";
  }, [language]);

  // Translation function: key like "hero.greeting"
  const t = (key: string): string => {
    const langTranslations = translations[language] || translations.en;
    const keys = key.split(".");
    let result: any = langTranslations;
    for (const k of keys) {
      if (result && typeof result === "object" && k in result) {
        result = result[k];
      } else {
        return key; // fallback to key name if missing
      }
    }
    return typeof result === "string" ? result : key;
  };

  return (
    <LanguageContext.Provider
      value={{ language, setLanguage: changeLanguage, t }}
    >
      {children}
    </LanguageContext.Provider>
  );
};
