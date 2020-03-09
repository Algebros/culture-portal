import { Router } from '@angular/router';
import { HEADER_LABELS } from './../../constants/header.labels';
import { Component, OnInit } from '@angular/core';
import { HeaderLocale } from '../../models/header.model';
import { LanguageService } from '../../../main/services/language.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  public labels: HeaderLocale;
  public languages: Array<string>;

  constructor(public router: Router, public languageService: LanguageService) {}

  public ngOnInit(): void {
    this.labels = HEADER_LABELS[this.languageService.language];
    this.languages = HEADER_LABELS.languages;
  }

  public clickHandler(text: string): void {
    if (text) {
      this.languageService.changeLanguage.next(text.toLowerCase());
      this.labels = HEADER_LABELS[this.languageService.language];
    }
  }

}
