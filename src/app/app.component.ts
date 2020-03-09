import { TranslateService } from '@ngx-translate/core';
import { Component } from '@angular/core';

import { LanguageService } from './main/services/language.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {

  public title: string = 'culture-portal-writers';

  constructor(private languageService: LanguageService, private translateService: TranslateService) {
    this.translateService.setDefaultLang(this.languageService.language);
  }

}
