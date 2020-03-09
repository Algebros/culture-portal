import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MainRoutingModule } from './main-routing.module';
import { AuthorComponent } from './pages/author/author.component';
import { AuthorCardComponent } from './components/author-card/author-card.component';
import { GalleryComponent } from './components/gallery/gallery.component';
import { TimelineComponent } from './components/timeline/timeline.component';
import { WorklogComponent } from './pages/worklog/worklog.component';
import { TeamComponent } from './pages/team/team.component';
import { MapComponent } from './components/map/map.component';
import { HomeComponent } from './pages/home/home.component';
import { AuthorsComponent } from './pages/authors/authors.component';
import { StyleguideComponent } from './pages/styleguide/styleguide.component';
import { DeveloperCardComponent } from './components/developer-card/developer-card.component';
import { WorksComponent } from './components/works/works.component';
import {MatDialogModule} from '@angular/material/dialog';
import { YoutubeVideoModalComponent } from './components/youtube-video-modal/youtube-video-modal.component';

@NgModule({
  declarations: [
    AuthorComponent,
    AuthorCardComponent,
    GalleryComponent,
    TimelineComponent,
    WorklogComponent,
    TeamComponent,
    MapComponent,
    HomeComponent,
    AuthorsComponent,
    StyleguideComponent,
    DeveloperCardComponent,
    WorksComponent,
    YoutubeVideoModalComponent
  ],
  entryComponents: [
    YoutubeVideoModalComponent
  ],
  imports: [
    CommonModule,
    MatDialogModule,
    MainRoutingModule,
  ]
})
export class MainModule { }
