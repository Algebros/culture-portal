import { MapService } from './../../services/map.service';
import { Location } from './../../models/location.model';
import { Component, Input, OnDestroy, AfterContentInit, OnInit } from '@angular/core';

declare let ymaps: any;

@Component({
  selector: 'app-map',
  templateUrl: './map.component.html',
  styleUrls: ['./map.component.scss']
})
export class MapComponent implements OnInit, AfterContentInit, OnDestroy {
  @Input() public incomeLocations: Location[];

  constructor(private _mapService: MapService) {
  }

  public ngOnInit(): void {
    this._mapService.locations = this.incomeLocations;
  }

  public ngAfterContentInit(): void {
    ymaps.ready(this._mapService.initMap);
  }

  public ngOnDestroy(): void {
    this._mapService.destroyMap();
  }

}
