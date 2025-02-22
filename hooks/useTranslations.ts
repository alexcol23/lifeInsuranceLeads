import { useLanguage } from '@/contexts/LanguageContext';
import en from '@/locales/en.json';

type PathImpl<T, Key extends keyof T> =
  Key extends string
  ? T[Key] extends Record<string, any>
    ? | `${Key}.${PathImpl<T[Key], Exclude<keyof T[Key], keyof any[]>> & string}`
      | `${Key}`
    : `${Key}`
  : never;

type Path<T> = PathImpl<T, keyof T> | keyof T;
type PathValue<T, P extends Path<T>> =
  P extends `${infer Key}.${infer Rest}`
  ? Key extends keyof T
    ? Rest extends Path<T[Key]>
      ? PathValue<T[Key], Rest>
      : never
    : never
  : P extends keyof T
    ? T[P]
    : never;

export type TranslationKey = Path<typeof en>;

export function useTranslations() {
  const { language } = useLanguage();
  const translations = language === 'es' ? require('@/locales/es.json') : require('@/locales/en.json');

  const t = (key: TranslationKey): string => {
    const keys = key.split('.');
    let current: any = translations;
    
    for (const k of keys) {
      if (current[k] === undefined) {
        console.warn(`Translation key not found: ${key}`);
        return key;
      }
      current = current[k];
    }
    
    if (typeof current !== 'string') {
      console.warn(`Translation key "${key}" does not point to a string`);
      return key;
    }
    
    return current;
  };

  return { t };
}
