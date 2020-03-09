import { TranslateService } from '@ngx-translate/core';
import { Injectable } from '@angular/core';
import { Location } from '@angular/common';
import { Router } from '@angular/router';

import { distinctUntilChanged } from 'rxjs/operators';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class LanguageService {

  public languages: { [key: string]: string } = { en: 'en', ru: 'ru', be: 'be', default: 'en' };
  public changeLanguage: Subject<string> = new Subject();
  public language: string;

  constructor(private location: Location,
              private router: Router,
              private translateService: TranslateService) {

    // Define language by url, works on first page load
    this.language = this.getLanguageFromUrl();

    // Navigate new route on language change + reset ngx
    this.changeLanguage
      .pipe(distinctUntilChanged())
      .subscribe((property) => {
        if (!this.languages[property]) {
          return null;
        }

        this.language = this.languages[property];
        this.translateService.setDefaultLang(this.language);
        this.router.navigate([this.router.url.replace(/en|ru|be/, this.language)]);
      });
  }

  public getLanguageFromUrl(): string {
    const url: string = this.location.path();
    const array: string[] = url.split('/');
    const item: string[] = array.filter(element => ['en', 'ru', 'be'].indexOf(element) !== - 1);

    return item.length ? this.languages[item.shift()] : this.languages.default;
  }

}
