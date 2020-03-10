import { LanguageService } from './../../../main/services/language.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-error',
  templateUrl: './error.component.html',
  styleUrls: ['./error.component.scss']
})
export class ErrorComponent implements OnInit {

  constructor(public languageService: LanguageService) { }

  public ngOnInit(): void {
  }

}
