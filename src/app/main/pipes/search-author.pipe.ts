import { Pipe, PipeTransform } from '@angular/core';
import Author from '../models/author.model';

@Pipe({
  name: 'searchAuthor'
})
export class SearchAuthorPipe implements PipeTransform {

  public transform(authors: Author[], criteria: string, searchValue: string): Author[] {
    if (!searchValue.trim()) {
      return authors;
    }

    switch (criteria) {
      case 'name':
        return authors
          .filter(author => author.firstname.toLowerCase().includes(searchValue.trim().toLowerCase()) ||
            author.lastname.toLowerCase().includes(searchValue.trim().toLowerCase()));

      case 'works':
        return authors
          .filter(author => author.works
            .filter(work => work.description.toLowerCase()
              .includes(searchValue.trim().toLowerCase())).length > 0);
      default: return authors;
    }
  }

}
