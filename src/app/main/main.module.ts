import { MatButtonModule } from '@angular/material/button';
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
import {VideoModalService} from './services/video-modal.service';
import { MatStepperModule } from '@angular/material/stepper';
import { MatTableModule } from '@angular/material/table';
import { TranslateModule } from '@ngx-translate/core';

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
    MatStepperModule,
    MatButtonModule,
    MatTableModule,
    TranslateModule
   ],
  providers: [
    VideoModalService
  ]  
})
export class MainModule { }
