import { Injectable } from '@angular/core';
import {MatDialog} from '@angular/material/dialog';
import {YoutubeVideoModalComponent} from '../components/youtube-video-modal/youtube-video-modal.component';

@Injectable()
export class VideoModalService {
  constructor(public dialog: MatDialog) {}

  public openModal(link: string): void {
    this.dialog.open(YoutubeVideoModalComponent, {
      width: '90vw',
      height: '60vh',
      data: {
        videoLink: link
      }
    });
  }
}
