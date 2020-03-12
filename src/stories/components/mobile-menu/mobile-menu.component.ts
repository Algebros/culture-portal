import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-mobile-menu',
  templateUrl: './mobile-menu.component.html',
  styleUrls: ['./mobile-menu.component.scss']
})
export class MobileMenuComponent implements OnInit {

  constructor() { }

  public ngOnInit(): void {
  }

  // public clickHandler(event: MouseEvent): void {
  //   const language: string = (event.target as HTMLButtonElement).innerText.toLowerCase();
  //   this.languageService.changeLanguage.next(language);
  // }

}
