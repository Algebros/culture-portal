import { MatIconModule } from '@angular/material/icon';
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
import { DeveloperCardComponent } from './components/developer-card/developer-card.component';
import { MatDialogModule } from '@angular/material/dialog';
import { YoutubeVideoModalComponent } from './components/youtube-video-modal/youtube-video-modal.component';
import { VideoModalService } from './services/video-modal.service';
import { MatStepperModule } from '@angular/material/stepper';
import { MatTableModule } from '@angular/material/table';
import { TranslateModule } from '@ngx-translate/core';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatInputModule} from '@angular/material/input';
import {FormsModule} from '@angular/forms';
import {MatCardModule} from '@angular/material/card';
import { SearchAuthorPipe } from './pipes/search-author.pipe';
import { MatExpansionModule } from '@angular/material/expansion';
import { MatChipsModule } from '@angular/material/chips';
import { TotalTimePipe } from './pipes/total-time.pipe';
import { SplitPipe } from './pipes/split.pipe';
import { MatListModule } from '@angular/material/list';
import { MatDividerModule } from '@angular/material/divider';

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
    DeveloperCardComponent,
    YoutubeVideoModalComponent,
    SearchAuthorPipe,
    TotalTimePipe,
    SplitPipe
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
    MatFormFieldModule,
    MatInputModule,
    MatCardModule,
    TranslateModule,
    FormsModule,
    TranslateModule,
    MatIconModule,
    MatExpansionModule,
    MatChipsModule,
    MatListModule,
    MatDividerModule
   ],
  providers: [
    VideoModalService
  ]
})
export class MainModule { }
