import { AfterViewInit, Component, ElementRef, Input, ViewChild } from '@angular/core';
import { LngLat, Map, Marker } from 'mapbox-gl';

@Component({
  selector: 'maps-mini-map',
  templateUrl: './mini-map.component.html',
  styleUrls: ['./mini-map.component.css']
})
export class MiniMapComponent implements AfterViewInit {
  @Input() lngLat?: [number, number];
  @ViewChild('map') divMap?: ElementRef;

  public zoom: number = 15;
  public map?: Map;
  // public currentCenter: LngLat = new LngLat(this.lng, this.lat);

  ngAfterViewInit() : void {
    if (!this.divMap) throw 'divMap is not defined';
    if (!this.lngLat) throw 'lngLat is not defined';

    this.map = new Map({
      container: this.divMap.nativeElement, // container ID
      style: 'mapbox://styles/mapbox/streets-v12', // style URL
      center: this.lngLat, // starting position [lng, lat]
      zoom: this.zoom, // starting zoom
      interactive: false
    });

    new Marker()
    .setLngLat(this.lngLat)
    .addTo(this.map);
  }
}
