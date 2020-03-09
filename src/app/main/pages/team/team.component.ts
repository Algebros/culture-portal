import {Component, OnDestroy, OnInit} from '@angular/core';
import { LanguageService } from '../../services/language.service';
import { ContentService } from '../../services/content.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-team',
  templateUrl: './team.component.html',
  styleUrls: ['./team.component.scss']
})
export class TeamComponent implements OnInit, OnDestroy {

  private subscription: Subscription;

  constructor(public contentService: ContentService, private languageService: LanguageService) {
    this. subscription = this.languageService.changeLanguage.subscribe(() => {
      this.contentService.getDevelopers();
    });
  }

  public ngOnInit(): void {
    this.contentService.getDevelopers();
  }

  public ngOnDestroy(): void {
    this.subscription.unsubscribe();
  }

}
