import {Component, OnInit} from '@angular/core';
import {VideoModalService} from '../../services/video-modal.service';
import {ActivatedRoute, Params} from '@angular/router';
import {ContentService} from '../../services/content.service';
import Author from '../../models/author.model';
import { LanguageService } from '../../services/language.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-author',
  templateUrl: './author.component.html',
  styleUrls: ['./author.component.scss'],
})
export class AuthorComponent implements OnInit {
  public subscription: Subscription;

  public author: Author;

  public displayedColumns: string[] = ['date', 'description'];

  constructor(
    public videoModalService: VideoModalService,
    private route: ActivatedRoute,
    public contentService: ContentService,
    private languageService: LanguageService,
    ) { }

  public ngOnInit(): void {
    this.subscription = this.languageService.changeLanguage.subscribe(() => {
      this.contentService.getAuthors();
    });

    this.route.params.subscribe((data) => this.author = this.contentService.getAuthorById(data.id));
  }

  public ngOnDestroy(): void {
    this.subscription.unsubscribe();
  }
}
