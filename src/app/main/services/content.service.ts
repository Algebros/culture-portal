import { Injectable } from '@angular/core';
import { LanguageService } from './language.service';
import butterService from 'src/app/core/services/butter-cms.service';
import Developer from '../models/developer.model';
import Author from '../models/author.model';

@Injectable({
  providedIn: 'root'
})
export class ContentService {

  public authorOfTheDay: Author;
  public authors: { [key: string]: Author[] } = { en: null, ru: null, be: null };
  public developers: { [key: string]: Developer[] } = { en: null, ru: null, be: null };

  constructor(private languageService: LanguageService) {}

  public random(min: number, max: number): number {
    return  Math.floor(min + Math.random() * (max + 1 - min));
  }

  public getAuthors(): Author[] | void  {
    const locale: string = this.languageService.language;
    const authors: Author[] = this.authors[locale];

    if (authors) {
      return authors;
    }

    butterService.content
      .retrieve(['author'], { locale })
      .then(response => {
        this.authors[locale] = response.data.data.author.filter(author => author.id);
        this.authorOfTheDay = this.authors[locale][this.random(0, this.authors[locale].length - 1)];
      }).catch(error => console.log(error));
  }

  public getDevelopers(): Developer[] | void {
    const locale: string = this.languageService.language;
    const developers: Developer[] = this.developers[locale];

    if (developers) {
      return developers;
    }

    butterService.content
      .retrieve(['developer'], { locale })
      .then(response => this.developers[locale] = response.data.data.developer)
      .catch(error => console.error(error));
  }

}
