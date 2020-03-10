import { Injectable } from '@angular/core';
import { LanguageService } from './language.service';
import butterService from 'src/app/core/services/butter-cms.service';
import Developer from '../models/developer.model';
import Author from '../models/author.model';

@Injectable({
  providedIn: 'root'
})
export class ContentService {

  private randomInt: number;
  public developers: Developer[];
  public authors: Author[];
  public authorOfTheDay: Author;

  constructor(private languageService: LanguageService) { }

  private randomInteger(min: number, max: number): number {
    let rand: number = min + Math.random() * (max + 1 - min);
    return Math.floor(rand);
  }

  private filterAuthorsById(data: Author[]): Author[] {
    return data.filter(item => item.id);
  }

  public getAuthors(): void  {
    butterService.content
      .retrieve(['author'], { locale: this.languageService.language })
      .then(response => {

        this.authors = this.filterAuthorsById(response.data.data.author);

        if (!this.randomInt) {
          this.randomInt = this.randomInteger(0, 8);
          this.authorOfTheDay = this.authors[this.randomInt];
        } else {
          this.authorOfTheDay = this.authors[this.randomInt];
        }

      })
      .catch(error => console.log(error));
  }

  public getDevelopers(): void {
    butterService.content
      .retrieve(['developer'], { locale: this.languageService.language })
      .then(response => this.developers = response.data.data.developer)
      .catch(error => console.error(error));
  }

}
