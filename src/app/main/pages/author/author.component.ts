import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { VideoModalService } from '../../services/video-modal.service';
import { LanguageService } from '../../services/language.service';
import { Subscription } from 'rxjs';
import Author from '../../models/author.model';
import butterService from '../../../core/services/butter-cms.service';

@Component({
  selector: 'app-author',
  templateUrl: './author.component.html',
  styleUrls: ['./author.component.scss'],
})
export class AuthorComponent implements OnInit {

  public displayedColumns: string[] = ['date', 'description'];
  public subscription: Subscription;
  public author: Author;

  constructor(public videoModalService: VideoModalService,
              public languageService: LanguageService,
              public route: ActivatedRoute) {
    this.subscription = this.languageService.changeLanguage.subscribe(() => {
      this.getAuthorById(Number(this.route.snapshot.params.id));
    });
  }

  public ngOnInit(): void {
    this.getAuthorById(Number(this.route.snapshot.params.id));
  }

  public getAuthorById(id: number): void {
    butterService.content
      .retrieve(['author'], { locale: this.languageService.language })
      .then(response => {
        this.author = (response.data.data.author.filter(author => author.id === id))[0];
      }).catch(error => console.log(error));
  }

  public ngOnDestroy(): void {
    this.subscription.unsubscribe();
  }
}
