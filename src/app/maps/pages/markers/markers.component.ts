import { AfterViewInit, Component, ElementRef, ViewChild } from '@angular/core';
import { LngLat, Map, Marker } from 'mapbox-gl';

interface MarkerAndColor {
  color: string,
  marker: Marker
}

interface PlainMarker {
  color: string,
  lngLat: number[]
}

@Component({
  templateUrl: './markers.component.html',
  styleUrls: ['./markers.component.css']
})
export class MarkersComponent implements AfterViewInit {

  @ViewChild('map') divMap?: ElementRef;

  public markers: MarkerAndColor[] = [];

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

    this.readFromLocalStorage();

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

    this.markers.push({
      color,
      marker
    });

    marker.on('dragend', () => {
      this.saveToLocalStorage();
    });

    this.saveToLocalStorage();
  }

  deleteMarker(index: number) : void {
    this.markers[index].marker.remove();
    this.markers.splice(index, 1);

    this.saveToLocalStorage();
  }

  flyTo(marker: Marker) : void{
    if (!this.map) throw 'map is not defined';

    this.map.flyTo({
      zoom: 14,
      center: marker.getLngLat()
    });
  }

  saveToLocalStorage() : void {
    const plainMarkers: PlainMarker[] = this.markers.map(({color, marker}) => {
      return {
        color,
        lngLat: marker.getLngLat().toArray()
      }
    });

    localStorage.setItem('plainMarkers', JSON.stringify(plainMarkers));
  }

  readFromLocalStorage() : void {
    const planinMarkersString = localStorage.getItem('plainMarkers') ?? '[]';
    const plainMarkers: PlainMarker[] = JSON.parse(planinMarkersString);

    plainMarkers.forEach(({color, lngLat}) => {
      const [lng, lat] = lngLat;
      const coords = new LngLat(lng, lat);

      this.addMarker(coords, color);
    });
  }

}
