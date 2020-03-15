import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-colors',
  templateUrl: './colors.component.html',
  styleUrls: ['./colors.component.scss']
})

export class StyleGuideColors implements OnInit {
  public colors: Array<{name: string, color: string}> = [
    {
      name: 'Ivory',
      color: '#fdfff7'
    },
    {
      name: 'White Smoke',
      color: '#f2f2f2'
    },
    {
      name: 'White Nectar',
      color: '#f8f5da'
    },
    {
      name: 'Tomato',
      color: '#ff6243'
    },
    {
      name: 'Wild Strawberry',
      color: '#ff4081'
    },
    {
      name: 'Cardinal',
      color: '#d12222'
    },
    {
      name: 'Finlandia',
      color: '#627964'
    },
    {
      name: 'Free Speech Blue',
      color: '#3f51b5'
    },
    {
      name: 'Valhalla',
      color: '#2d2d43'
    },
  ];

  constructor() {}

  public ngOnInit(): void {
  }

}
