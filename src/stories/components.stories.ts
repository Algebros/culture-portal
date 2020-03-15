import { HeaderComponent } from './components/header/header.component';
import { CommonModule } from '@angular/common';
import { MatCardModule } from '@angular/material/card';
import { MatButtonModule } from '@angular/material/button';
import { MatMenuModule } from '@angular/material/menu';
import { MatDividerModule } from '@angular/material/divider';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonToggleModule } from '@angular/material/button-toggle';
import { moduleMetadata } from '@storybook/angular';
import { CoreRoutingModule } from 'src/app/core/core-routing.module';
import { MobileMenuComponent } from './components/mobile-menu/mobile-menu.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FooterComponent } from './components/footer/footer.component';
import { GalleryComponent } from './components/gallery/gallery.component';
import { TimelineComponent } from './components/timeline/timeline.component';
import { MatStepperModule } from '@angular/material/stepper';
import { DeveloperCardComponent } from './components/developer-card/developer-card.component';
import { StyleGuideColors } from './components/styleguide/colors/colors.component';
import { StyleGuideFonts } from './components/styleguide/fonts/fonts.component';

export default {
  title: 'Components',
  component: [
    HeaderComponent,
    MobileMenuComponent,
    FooterComponent,
    GalleryComponent,
    TimelineComponent,
    StyleGuideColors,
    StyleGuideFonts
  ],
  decorators: [
    moduleMetadata({
      imports: [
        CommonModule,
        CoreRoutingModule,
        MatCardModule,
        MatButtonModule,
        MatMenuModule,
        MatDividerModule,
        MatIconModule,
        MatButtonToggleModule,
        MatStepperModule,
        BrowserAnimationsModule
      ],
      providers: [
      ],
      declarations: [
        HeaderComponent,
        MobileMenuComponent
      ],
    })
  ]
};

// tslint:disable-next-line: typedef
export const header = () => ({
  template: `
  <app-header></app-header>
  <app-mobile-menu></app-mobile-menu> Mobile menu
  `,
  props: {}
});

header.story = {
  name: 'Header',
};

// tslint:disable-next-line: typedef
export const footer = () => ({
  component: FooterComponent,
  props: {}
});

footer.story = {
  name: 'Footer',
};

// tslint:disable-next-line: typedef
export const gallery = () => ({
  component: GalleryComponent,
  props: {}
});

gallery.story = {
  name: 'Gallery',
};

// tslint:disable-next-line: typedef
export const timeline = () => ({
  component: TimelineComponent,
  props: {}
});

timeline.story = {
  name: 'Timeline',
};

// tslint:disable-next-line: typedef
export const devCard = () => ({
  component: DeveloperCardComponent,
  props: {}
});

devCard.story = {
  name: 'DevCard',
};

// tslint:disable-next-line: typedef
export const stylecolors = () => ({
  component: StyleGuideColors,
  props: {}
});

stylecolors.story = {
  name: 'colors',
};

// tslint:disable-next-line: typedef
export const stylefonts = () => ({
  component: StyleGuideFonts,
  props: {}
});

stylefonts.story = {
  name: 'fonts',
};
