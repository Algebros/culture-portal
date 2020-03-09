import {Component, Inject} from '@angular/core';
import {MAT_DIALOG_DATA, MatDialogRef} from '@angular/material/dialog';

@Component({
  selector: 'app-youtube-video-modal',
  templateUrl: './youtube-video-modal.component.html',
  styleUrls: ['./youtube-video-modal.component.scss']
})
export class YoutubeVideoModalComponent {

  constructor(
    public dialogRef: MatDialogRef<YoutubeVideoModalComponent>,
    @Inject(MAT_DIALOG_DATA) public data: {videoLink: string}
  ) {}

}
