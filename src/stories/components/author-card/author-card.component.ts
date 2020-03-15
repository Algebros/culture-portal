import {Component, Input} from '@angular/core';
import Author from 'src/app/main/models/author.model';

@Component({
  selector: 'app-author-card',
  templateUrl: './author-card.component.html',
  styleUrls: ['./author-card.component.scss']
})
export class AuthorCardComponent {
  @Input() public author: Author;

  constructor() {}
}
