import {Component, Input} from '@angular/core';
import Author from '../../models/author.model';

@Component({
  selector: 'app-author-card',
  templateUrl: './author-card.component.html',
  styleUrls: ['./author-card.component.scss']
})
export class AuthorCardComponent {
  @Input() public author: Author;

  constructor() {
    console.log(this.author);
  }
}
