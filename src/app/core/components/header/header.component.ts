import { Router } from '@angular/router';
import { HEADER_LABELS } from './../../constants/header.labels';
import { Component, OnInit } from '@angular/core';
import { HeaderLocale } from '../../models/header.model';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  public labels: HeaderLocale;
  public languages: Array<string>;

  constructor(public router: Router) { }

  public ngOnInit(): void {
    this.labels = HEADER_LABELS[localStorage.getItem('lang') ? localStorage.getItem('lang') : 'en'];
    this.languages = HEADER_LABELS.languages;
  }

}
