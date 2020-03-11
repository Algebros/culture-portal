import {Component, OnInit} from '@angular/core';
import {VideoModalService} from '../../services/video-modal.service';
import {ActivatedRoute, Params} from '@angular/router';
import {ContentService} from '../../services/content.service';
import Author from '../../models/author.model';

interface PeriodicElement {
  title: string;
  year: number;
}
@Component({
  selector: 'app-author',
  templateUrl: './author.component.html',
  styleUrls: ['./author.component.scss'],
})
export class AuthorComponent {

  public ELEMENT_DATA: PeriodicElement[] = [
    {year: 2000, title: 'Hydrogen' },
    {year: 2000, title: 'Helium' },
    {year: 2000, title: 'Lithium' },
    {year: 2000, title: 'Beryllium' },
  ];

  public author: Author;

  public displayedColumns: string[] = ['year', 'title'];
  public dataSource: PeriodicElement[] = this.ELEMENT_DATA;

  constructor(public videoModalService: VideoModalService) {}
}
