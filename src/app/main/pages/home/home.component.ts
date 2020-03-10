import { Router } from '@angular/router';
import { Component, OnInit, OnDestroy } from '@angular/core';
import { LanguageService } from '../../services/language.service';
import { ContentService } from '../../services/content.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit, OnDestroy {

  private subscription: Subscription;

  constructor(
    private languageService: LanguageService,
    public contentService: ContentService,
    private _router: Router
  ) {
    this.subscription = this.languageService.changeLanguage.subscribe(() => {
      this.contentService.getAuthors();
    });
  }

  public ngOnInit(): void {
    this.contentService.getAuthors();
  }

  public ngOnDestroy(): void {
    this.subscription.unsubscribe();
  }

  public teamPage(): void {
    this._router.navigateByUrl(this._router.url + '/team');
  }

}
