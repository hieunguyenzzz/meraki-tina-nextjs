"use client";

import React from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useLayout } from "../layout-context";
import { Menu, X, Globe } from "lucide-react";
import { languages, languageNames, addLanguageToPath, removeLanguageFromPath } from "@/lib/i18n";

export const MerakiHeader = () => {
  const { lang } = useLayout();
  const pathname = usePathname();
  const [menuState, setMenuState] = React.useState(false);
  const [langMenuState, setLangMenuState] = React.useState(false);

  const navigation = [
    {
      label: lang === 'vi' ? 'Trang Chủ' : 'HOME',
      href: `/${lang}`,
    },
    {
      label: lang === 'vi' ? 'Về Chúng Tôi' : 'ABOUT US',
      href: `/${lang}/about`,
    },
    {
      label: lang === 'vi' ? 'Nhật Ký' : 'JOURNAL',
      href: `/${lang}/journal`,
    },
    {
      label: lang === 'vi' ? 'Dịch Vụ' : 'SERVICE',
      href: `/${lang}/service`,
    },
    {
      label: 'BLOG',
      href: `/${lang}/blog`,
    },
    {
      label: lang === 'vi' ? 'Lời Khen Ngợi' : 'KIND WORDS',
      href: `/${lang}/testimonials`,
    },
    {
      label: lang === 'vi' ? 'Liên Hệ' : 'CONTACT',
      href: `/${lang}/contact`,
    },
  ];

  const handleLanguageSwitch = (newLang: string) => {
    const cleanPath = removeLanguageFromPath(pathname);
    const newPath = addLanguageToPath(cleanPath, newLang as any);
    window.location.href = newPath;
  };

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-white/95 backdrop-blur-sm border-b border-gray-100">
      <nav className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <Link
            href={`/${lang}`}
            className="flex items-center space-x-2 text-2xl font-bold text-gray-900"
          >
            <span className="text-3xl">ℋ</span>
            <span className="tracking-wider">MERAKI</span>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center space-x-8">
            {navigation.map((item, index) => (
              <Link
                key={index}
                href={item.href}
                className="text-sm font-medium text-gray-700 hover:text-gray-900 transition-colors duration-200 tracking-wider"
              >
                {item.label}
              </Link>
            ))}
            
            {/* Language Switcher */}
            <div className="relative">
              <button
                onClick={() => setLangMenuState(!langMenuState)}
                className="flex items-center space-x-1 px-3 py-2 text-sm font-medium text-gray-700 hover:text-gray-900 border border-gray-200 rounded-md transition-colors duration-200"
              >
                <Globe className="w-4 h-4" />
                <span>{lang.toUpperCase()}</span>
                <span className="text-gray-400">|</span>
                <span>{lang === 'en' ? 'VIE' : 'ENG'}</span>
              </button>

              {langMenuState && (
                <div className="absolute right-0 mt-2 w-40 bg-white rounded-md shadow-lg border border-gray-200 py-1 z-50">
                  {languages.map((language) => (
                    <button
                      key={language}
                      onClick={() => {
                        handleLanguageSwitch(language);
                        setLangMenuState(false);
                      }}
                      className={`block w-full text-left px-4 py-2 text-sm hover:bg-gray-50 transition-colors duration-200 ${
                        lang === language ? 'bg-gray-50 text-gray-900 font-medium' : 'text-gray-600'
                      }`}
                    >
                      {languageNames[language]}
                    </button>
                  ))}
                </div>
              )}
            </div>
          </div>

          {/* Mobile menu button */}
          <button
            onClick={() => setMenuState(!menuState)}
            aria-label={menuState ? 'Close Menu' : 'Open Menu'}
            className="lg:hidden relative z-20 p-2"
          >
            <Menu className={`w-6 h-6 transition-all duration-200 ${menuState ? 'rotate-180 scale-0 opacity-0' : 'rotate-0 scale-100 opacity-100'}`} />
            <X className={`absolute inset-2 w-6 h-6 transition-all duration-200 ${menuState ? 'rotate-0 scale-100 opacity-100' : '-rotate-180 scale-0 opacity-0'}`} />
          </button>
        </div>

        {/* Mobile Navigation */}
        {menuState && (
          <div className="lg:hidden absolute top-20 left-0 right-0 bg-white border-b border-gray-200 shadow-lg">
            <div className="px-4 py-6 space-y-4">
              {navigation.map((item, index) => (
                <Link
                  key={index}
                  href={item.href}
                  onClick={() => setMenuState(false)}
                  className="block text-base font-medium text-gray-700 hover:text-gray-900 transition-colors duration-200 tracking-wider"
                >
                  {item.label}
                </Link>
              ))}
              
              {/* Mobile Language Switcher */}
              <div className="pt-4 border-t border-gray-200">
                <p className="text-sm font-medium text-gray-500 mb-2">
                  {lang === 'vi' ? 'Ngôn ngữ' : 'Language'}
                </p>
                <div className="flex space-x-2">
                  {languages.map((language) => (
                    <button
                      key={language}
                      onClick={() => {
                        handleLanguageSwitch(language);
                        setMenuState(false);
                      }}
                      className={`px-3 py-1 text-sm rounded-md transition-colors duration-200 ${
                        lang === language 
                          ? 'bg-gray-900 text-white' 
                          : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                      }`}
                    >
                      {languageNames[language]}
                    </button>
                  ))}
                </div>
              </div>
            </div>
          </div>
        )}
      </nav>

      {/* Click outside to close language menu */}
      {langMenuState && (
        <div
          className="fixed inset-0 z-40"
          onClick={() => setLangMenuState(false)}
        />
      )}
    </header>
  );
};