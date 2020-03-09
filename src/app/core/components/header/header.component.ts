import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { LanguageService } from '../../../main/services/language.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  constructor(public router: Router, public languageService: LanguageService) { }

  public ngOnInit(): void { }

  public clickHandler(event: MouseEvent): void {
    this.languageService.changeLanguage.next((event.target as HTMLButtonElement).dataset.language);
  }
}
