import { LanguageService } from './../../../../main/services/language.service';
import { HEADER_LABELS } from '../../../constants/header.labels';
import { Component, OnInit } from '@angular/core';
import { HeaderLocale } from 'src/app/core/models/header.model';
import { Router } from '@angular/router';

@Component({
  selector: 'app-mobile-menu',
  templateUrl: './mobile-menu.component.html',
  styleUrls: ['./mobile-menu.component.scss']
})
export class MobileMenuComponent implements OnInit {

  public labels: HeaderLocale;
  public languages: Array<string>;

  constructor(private _router: Router, public languageService: LanguageService) { }

  public ngOnInit(): void {
    this.languages = HEADER_LABELS.languages;
    this.labels = HEADER_LABELS[this.languageService.language];
  }

  public changeLanguageSettings(text: string): void {
    if (text) {
      this.languageService.changeLanguage.next(text.toLowerCase());
      this.labels = HEADER_LABELS[this.languageService.language];
    }
  }

}
