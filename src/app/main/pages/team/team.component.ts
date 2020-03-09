import { Component, OnInit } from '@angular/core';
import butterService from '../../../core/services/butter-cms.service';
import { LanguageService } from '../../services/language.service';
import Developer from '../../models/developer.model';

@Component({
  selector: 'app-team',
  templateUrl: './team.component.html',
  styleUrls: ['./team.component.scss']
})
export class TeamComponent implements OnInit {

  public developers: Developer[];

  constructor(public languageService: LanguageService) { }

  public ngOnInit(): void {
    butterService.content
      .retrieve(['developer'], { locale: this.languageService.language })
      .then(response => this.developers = response.data.data.developer)
      .catch(error => console.log(error));
  }

}
