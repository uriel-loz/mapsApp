import { AfterViewInit, Component, ElementRef, ViewChild } from '@angular/core';
import { LngLat, Map, Marker } from 'mapbox-gl';

@Component({
  templateUrl: './markers.component.html',
  styleUrls: ['./markers.component.css']
})
export class MarkersComponent implements AfterViewInit {

  @ViewChild('map') divMap?: ElementRef;

  public zoom: number = 13;
  public map?: Map;
  public lng = -99.197162;
  public lat = 19.462275;
  public currentCenter: LngLat = new LngLat(this.lng, this.lat);

  ngAfterViewInit(): void {
    if (!this.divMap) throw 'divMap is not defined';

    this.map = new Map({
      container: this.divMap.nativeElement, // container ID
      style: 'mapbox://styles/mapbox/streets-v12', // style URL
      center: this.currentCenter, // starting position [lng, lat]
      zoom: this.zoom, // starting zoom
    });

    // const markerHtml = document.createElement('div');
    // markerHtml.innerHTML = 'Hello World';

    // const marker = new Marker({
    //   color: '#3887be',
    //   element: markerHtml
    // })
    //   .setLngLat(this.currentCenter)
    //   .addTo(this.map);
  }

  createMarker() {
    if (!this.map) throw 'map is not defined';

    const color = '#xxxxxx'.replace(/x/g, y=>(Math.random()*16|0).toString(16));
    const lgnLat = this.map.getCenter();

    this.addMarker(lgnLat, color);
  }

  addMarker(lngLat: LngLat, color: string) : void {
    if (!this.map) throw 'map is not defined';

    const marker = new Marker({
      color,
      draggable: true
    })
    .setLngLat(lngLat)
    .addTo(this.map);
  }

}
