import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MainPageComponent } from './pages/main-page/main-page.component';
import { AuthorListComponent } from './pages/author-list/author-list.component';
import { AuthorComponent } from './pages/author/author.component';
import { AuthorCardComponent } from './components/author-card/author-card.component';
import { GalleryComponent } from './components/gallery/gallery.component';
import { TimelineComponent } from './components/timeline/timeline.component';
import { StyleguideComponent } from './pages/styleguide/styleguide.component';
import { Err404Component } from './pages/err404/err404.component';
import { WorklogComponent } from './pages/worklog/worklog.component';
import { TeamComponent } from './pages/team/team.component';
import { MapComponent } from './components/map/map.component';



@NgModule({
  declarations: [
    MainPageComponent,
    AuthorListComponent,
    AuthorComponent,
    AuthorCardComponent,
    GalleryComponent,
    TimelineComponent,
    StyleguideComponent,
    Err404Component,
    WorklogComponent,
    TeamComponent,
    MapComponent
  ],
  imports: [
    CommonModule
  ]
})
export class MainModule { }
