import { Injectable } from '@angular/core';
import { LanguageService } from './language.service';
import butterService from 'src/app/core/services/butter-cms.service';
import QueryParams from '../models/query-params.model';
import Developer from '../models/developer.model';
import Author from '../models/author.model';

@Injectable({
  providedIn: 'root'
})
export class ContentService {

  public developers: Developer[];

  constructor(private languageService: LanguageService) { }

  public async getAuthors(params: QueryParams = { locale: 'en' }): Promise<{}>  {
    let response: {} = butterService.content.retrieve(['author'], params);
    let data: {} = await response;
    return data;
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
