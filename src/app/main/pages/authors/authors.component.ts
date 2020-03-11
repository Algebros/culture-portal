import { Component, OnInit } from '@angular/core';
import {Subscription} from 'rxjs';
import {LanguageService} from '../../services/language.service';
import {ContentService} from '../../services/content.service';

@Component({
  selector: 'app-authors',
  templateUrl: './authors.component.html',
  styleUrls: ['./authors.component.scss']
})
export class AuthorsComponent implements OnInit {
  private subscription: Subscription;

  public searchValue: string = '';

  public sortingCriteria: string = 'name';

  constructor(
    private languageService: LanguageService,
    public contentService: ContentService
  ) {}

  public ngOnInit(): void {
    this.subscription = this.languageService.changeLanguage.subscribe(() => {
      this.contentService.getAuthors();
    });

    this.contentService.getAuthors();
  }

  public ngOnDestroy(): void {
    this.subscription.unsubscribe();
  }

}
