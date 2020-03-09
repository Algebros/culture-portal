export interface Header {
  en: HeaderLocale;
  ru: HeaderLocale;
  be: HeaderLocale;
  languages: Array<string>;
}

export interface HeaderLocale {
  home: string;
  writers: string;
  team: string;
  worklog: string;
}
