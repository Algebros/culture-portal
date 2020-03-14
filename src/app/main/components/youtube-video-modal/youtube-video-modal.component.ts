import { Component, Inject } from '@angular/core';
import {MAT_DIALOG_DATA, MatDialogRef} from '@angular/material/dialog';
import { DomSanitizer, SafeResourceUrl } from '@angular/platform-browser';

@Component({
  selector: 'app-youtube-video-modal',
  templateUrl: './youtube-video-modal.component.html',
  styleUrls: ['./youtube-video-modal.component.scss']
})
export class YoutubeVideoModalComponent {

  public link: SafeResourceUrl;

  constructor(
    public dialogRef: MatDialogRef<YoutubeVideoModalComponent>,
    @Inject(MAT_DIALOG_DATA) public data: {videoLink: string},
    private sanitizer: DomSanitizer
  ) {
    this.link = this.sanitizer
    .bypassSecurityTrustResourceUrl(this.data.videoLink.replace('watch?v=', 'embed/'));
  }

}
