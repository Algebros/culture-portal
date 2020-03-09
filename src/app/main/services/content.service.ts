import { Injectable } from '@angular/core';
import butterService from 'src/app/core/services/butter-cms.service';
import QueryParams from '../models/query-params.model';
import Author from '../models/author.model';

@Injectable({
  providedIn: 'root'
})
export class ContentService {

  public async getAuthors(params: QueryParams = { locale: 'en' }): Promise<{}>  {
    let response: {} = butterService.content.retrieve(['author'], params);
    let data: {} = await response;
    return data;
  }

  public async getDevelopers(): Promise<{}> {
    let response: {} = butterService.content.retrieve(['developer']);
    let data: {} = await response;
    return data;
  }

  public filterAuthorsById(data: { data: { data: { author: Author[]}}}): Author[] {
    return data.data.data.author.filter(item => item.id);
  }

}
