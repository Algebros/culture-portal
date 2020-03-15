import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-fonts',
  templateUrl: './fonts.component.html',
  styleUrls: ['./fonts.component.scss']
})

export class StyleGuideFonts implements OnInit {
  public fonts: Array<{name: string, fontFamily: string, size: string, color: string}> = [
    {
      name: 'Roboto: Lorem ipsum dolor sit amet.',
      fontFamily: 'Roboto, "Helvetica Neue", sans-serif',
      size: '14px',
      color: '#333'
    },
    {
      name: 'Roboto Slab: Lorem ipsum dolor sit amet.',
      fontFamily: 'Roboto Slab, Helvetica, sans-serif',
      size: '14px',
      color: '#333'
    },
    {
      name: 'Roboto Slab: Lorem ipsum dolor sit amet.',
      fontFamily: 'Roboto Slab, Helvetica, sans-serif',
      size: '16px',
      color: '#333'
    },
    {
      name: 'Roboto Slab: Lorem ipsum dolor sit amet.',
      fontFamily: 'Roboto Slab, Helvetica, sans-serif',
      size: '18px',
      color: '#333'
    },
    {
      name: 'Roboto Slab: Lorem ipsum dolor sit amet.',
      fontFamily: 'Roboto Slab, Helvetica, sans-serif',
      size: '25px',
      color: '#333'
    },
    {
      name: 'Roboto Slab: Lorem ipsum dolor sit amet.',
      fontFamily: 'Roboto Slab, Helvetica, sans-serif',
      size: '28px',
      color: '#333'
    },
    {
      name: 'Roboto Slab: Lorem ipsum dolor sit amet.',
      fontFamily: 'Roboto Slab, Helvetica, sans-serif',
      size: '40px',
      color: '#333'
    },
    {
      name: 'Roboto Slab: Lorem ipsum dolor sit amet.',
      fontFamily: 'Roboto Slab, Helvetica, sans-serif',
      size: '48px',
      color: '#333'
    },
    {
      name: 'Roboto Mono: Lorem ipsum dolor sit amet.',
      fontFamily: 'Roboto Mono, Helvetica, sans-serif',
      size: '40px',
      color: '#333'
    },
  ];

  constructor() {}

  public ngOnInit(): void {
  }

}
