import { AfterViewInit, Component, ElementRef, ViewChild } from '@angular/core';
import { Map } from 'mapbox-gl';

@Component({
  templateUrl: './zoom-range.component.html',
  styleUrls: ['./zoom-range.component.css']
})
export class ZoomRangeComponent implements AfterViewInit{

  @ViewChild('map') divMap?: ElementRef;

  public zoom: number = 10;
  public map?: Map;

  ngAfterViewInit(): void {
    if (!this.divMap) throw 'divMap is not defined';

    this.map = new Map({
      container: this.divMap.nativeElement, // container ID
      style: 'mapbox://styles/mapbox/streets-v12', // style URL
      center: [-74.5, 40], // starting position [lng, lat]
      zoom: this.zoom, // starting zoom
    });
    
    this.mapListeners();
  }

  mapListeners() : void {
    if (!this.map) throw 'map is not defined';

    this.map.on('zoom', (e) => {
      this.zoom = this.map!.getZoom();
    });

    this.map.on('zoomend', (e) => {
      if (this.map!.getZoom() < 18) return;
      this.map!.zoomTo(18);
    });
  }

  zoomIn() : void {
    this.map?.zoomIn();
  }

  zoomOut() : void {
    this.map?.zoomOut();
  }

  zoomChanged(value: string) : void {
    this.zoom = Number(value);
    this.map?.zoomTo(this.zoom);
  }

}
