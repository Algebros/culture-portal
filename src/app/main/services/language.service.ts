import { Injectable } from '@angular/core';
import { Location } from '@angular/common';
import { Router } from '@angular/router';
import { Subject } from 'rxjs';
import { distinctUntilChanged } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class LanguageService {

  public languages: { [key: string]: string } = { en: 'en', ru: 'ru', be: 'be', default: 'en' };
  public changeLanguage: Subject<string> = new Subject();
  public language: string;

  constructor(private location: Location, private router: Router) {

    // Define language by url, works on first page load
    this.language = this.getLanguageFromUrl();

    // Navigate new route on language change
    this.changeLanguage
      .pipe(distinctUntilChanged())
      .subscribe((property) => {
        if (!this.languages[property]) {
          return null;
        }

        this.language = this.languages[property];
        this.router.navigate([this.router.url.replace(/en|ru|be/, this.language)]);

        console.log('[Language changed]:', this.language);
      });
  }

  public getLanguageFromUrl(): string {
    const url: string = this.location.path();
    const array: string[] = url.split('/');
    const item: string[] = array.filter(element => ['en', 'ru', 'be'].indexOf(element) !== - 1);

    return item.length ? this.languages[item.shift()] : this.languages.default;
  }

}
