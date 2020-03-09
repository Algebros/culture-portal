import {Component} from '@angular/core';
import Author from '../../models/author.model';
import {VideoModalService} from '../../services/video-modal.service';

@Component({
  selector: 'app-author',
  templateUrl: './author.component.html',
  styleUrls: ['./author.component.scss']
})
export class AuthorComponent {
  public author: Author;

  constructor(public videoModalService: VideoModalService) {}
}
