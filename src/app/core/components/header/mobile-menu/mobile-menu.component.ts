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

  constructor(private _router: Router) { }

  public ngOnInit(): void {
    this.labels = HEADER_LABELS[localStorage.getItem('lang') ? localStorage.getItem('lang') : 'en'];
    this.languages = HEADER_LABELS.languages;
  }

  public navigateToHome(): void {
    this._router.navigateByUrl('');
  }

  public navigateToWriters(): void {
    this._router.navigateByUrl('');
  }

  public navigateToTeam(): void {
    this._router.navigateByUrl('');
  }

  public navigateToWorklog(): void {
    this._router.navigateByUrl('');
  }

  public changeLanguageSettings($event: MouseEvent): void {
    // implement when the translation service is completed
  }

}
