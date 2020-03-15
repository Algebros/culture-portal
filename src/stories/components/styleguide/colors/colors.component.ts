import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-colors',
  templateUrl: './colors.component.html',
  styleUrls: ['./colors.component.scss']
})

export class StyleGuideColors implements OnInit {
  public colors: Array<{name: string, color: string}> = [
    {
      name: 'primary',
      color: '#2A73CC'
    },
    {
      name: 'darkPrimary',
      color: '#0156B8'
    },
    {
      name: 'lightPrimary',
      color: '#82A8E1'
    },
  ];

  constructor() {}

  public ngOnInit(): void {
  }

}
