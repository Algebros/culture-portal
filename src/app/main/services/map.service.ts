import { Injectable } from '@angular/core';
import Location from './../models/location.model';

/* tslint:disable */

declare let ymaps: any;
let _map: any;

@Injectable({
  providedIn: 'root'
})
export class MapService {

  public destroyMap(): void {
    _map.destroy();
  }

  public initMap(loc: Location[]): void {
    _map = new ymaps.Map('map', {
      center: [53.21, 28.02],
      zoom: 5,
      controls: ['zoomControl']
    });

    const content: Array<string> = loc.map(item => item.description);
    const coordinates: Array<Array<number>> = loc.map(item => [item.lat, item.lng]);


    let collection: any = new ymaps.GeoObjectCollection(null, {
      preset: 'islands#circleDotIcon',
      iconColor: '#3b5998'
    });

    content.forEach((item, idx) => {
      collection.add(new ymaps.Placemark(coordinates[idx], { balloonContent: item }));
    });

    _map.geoObjects.add(collection);
    _map.setBounds(collection.getBounds());

    collection.events.add('click', function(e) {
      let target = e.get('target');
      target.balloon.open();
      _map.panTo(target.geometry.getCoordinates(), {useMapMargin: true});
    });
  }
}
