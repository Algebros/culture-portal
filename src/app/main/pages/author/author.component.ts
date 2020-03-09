import { Component } from '@angular/core';
import {MatDialog} from '@angular/material/dialog';
import {YoutubeVideoModalComponent} from '../../components/youtube-video-modal/youtube-video-modal.component';
import Author from '../../models/author.model';

@Component({
  selector: 'app-author',
  templateUrl: './author.component.html',
  styleUrls: ['./author.component.scss']
})
export class AuthorComponent {
  public author: Author;

  constructor(public dialog: MatDialog) {}

  public openModal(): void {
   this.dialog.open(YoutubeVideoModalComponent, {
<<<<<<< HEAD
     width: '300px',
     height: '300px',
=======
     width: '800px',
     height: '500px',
>>>>>>> 1e25872255a396151b7d49cc5f9991dc33bd6717
     data: {
       videoLink: this.author.youtube
     }
    });
  }

}
