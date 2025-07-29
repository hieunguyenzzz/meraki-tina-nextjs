export const languages = ['en', 'vi'] as const;
export type Language = (typeof languages)[number];

export const defaultLanguage: Language = 'en';

export const languageNames: Record<Language, string> = {
  en: 'English',
  vi: 'Tiếng Việt',
};

export function isValidLanguage(lang: string): lang is Language {
  return languages.includes(lang as Language);
}

export function getLanguageFromPath(pathname: string): Language {
  const segments = pathname.split('/').filter(Boolean);
  const lang = segments[0];
  return isValidLanguage(lang) ? lang : defaultLanguage;
}

export function removeLanguageFromPath(pathname: string): string {
  const segments = pathname.split('/').filter(Boolean);
  if (segments.length > 0 && isValidLanguage(segments[0])) {
    return '/' + segments.slice(1).join('/');
  }
  return pathname;
}

export function addLanguageToPath(pathname: string, language: Language): string {
  const cleanPath = removeLanguageFromPath(pathname);
  return `/${language}${cleanPath === '/' ? '' : cleanPath}`;
}