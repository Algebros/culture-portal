import {Injectable} from '@angular/core';
import {LanguageService} from './language.service';
import butterService from 'src/app/core/services/butter-cms.service';
import Developer from '../models/developer.model';
import Author from '../models/author.model';

@Injectable({
  providedIn: 'root'
})
export class ContentService {

  public developers: Developer[];

  public authors: Author[];

  constructor(private languageService: LanguageService) {}

  public getAuthors(): void {
    butterService.content
      .retrieve(['author'], { locale: this.languageService.language })
      .then(authors => {
        this.authors = authors.data.data.author.filter(author => author.firstname);
      })
      .catch(error => console.error(error));
  }

  public getDevelopers(): void {
    butterService.content
      .retrieve(['developer'], { locale: this.languageService.language })
      .then(response => this.developers = response.data.data.developer)
      .catch(error => console.error(error));
  }

  public filterAuthorsById(data: { data: { data: { author: Author[]}}}): Author[] {
    return data.data.data.author.filter(item => item.id);
  }

}
