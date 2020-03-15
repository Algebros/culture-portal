import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-fonts',
  templateUrl: './fonts.component.html',
  styleUrls: ['./fonts.component.scss']
})

export class StyleGuideFonts implements OnInit {
  public fonts: Array<{name: string, size: string, color: string}> = [
    {
      name: 'primary',
      size: '20px',
      color: '#2A73CC'
    },
    {
      name: 'darkPrimary',
      size: '20px',
      color: '#0156B8'
    },
    {
      name: 'lightPrimary',
      size: '20px',
      color: '#82A8E1'
    },
  ];

  constructor() {}

  public ngOnInit(): void {
  }

}
