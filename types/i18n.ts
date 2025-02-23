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

export type TranslationKey = 
  | 'common.error'
  | 'common.tryAgain'
  | 'common.getStarted'
  | 'common.next'
  | 'common.nextStep'
  | 'common.back'
  | 'common.processing'
  | 'common.optional'
  | 'common.success'
  | 'recommendations.results.title'
  | 'recommendations.results.description'
  | 'recommendations.results.disclaimer'
  | 'recommendations.results.coverage.title'
  | 'recommendations.results.coverage.description'
  | 'recommendations.results.benefits.title'
  | 'recommendations.results.benefits.description'
  | 'recommendations.results.price.title'
  | 'recommendations.results.price.description'
  | 'recommendations.results.company.title'
  | 'recommendations.results.company.description'
  | Path<typeof en>;
