import { routeChangeAnimation } from './core/animations/animation';
import { TranslateService } from '@ngx-translate/core';
import { Component } from '@angular/core';

import { LanguageService } from './main/services/language.service';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  animations: [
    routeChangeAnimation
  ]
})
export class AppComponent {

  public title: string = 'culture-portal-writers';

  constructor(private languageService: LanguageService, private translateService: TranslateService) {
    this.translateService.setDefaultLang(this.languageService.language);
  }

  public prepareRoute(outlet: RouterOutlet) { // tslint:disable-line: typedef
    return outlet && outlet.activatedRouteData && outlet.activatedRouteData.animation;
  }

}
