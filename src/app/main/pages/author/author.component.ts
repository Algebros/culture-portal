import {Component, OnInit} from '@angular/core';
import {VideoModalService} from '../../services/video-modal.service';
import {ActivatedRoute, Params} from '@angular/router';
import {ContentService} from '../../services/content.service';
import Author from '../../models/author.model';

@Component({
  selector: 'app-author',
  templateUrl: './author.component.html',
  styleUrls: ['./author.component.scss'],
})
export class AuthorComponent implements OnInit {
  public author: Author;

  constructor(
    private route: ActivatedRoute,
    public contentService: ContentService,
    public videoModalService: VideoModalService
) {}

  public ngOnInit (): void {
    this.route.params.subscribe((params: Params) => {
       this.contentService.getAuthors()
         .then(authors => {
           this.author = this.contentService.getAuthorById(params.id);
         });
    });
  }
}
