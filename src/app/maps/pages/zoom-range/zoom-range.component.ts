import { AfterViewInit, Component, ElementRef, OnDestroy, ViewChild } from '@angular/core';
import { LngLat, Map } from 'mapbox-gl';

@Component({
  templateUrl: './zoom-range.component.html',
  styleUrls: ['./zoom-range.component.css']
})
export class ZoomRangeComponent implements AfterViewInit, OnDestroy {
  @ViewChild('map') divMap?: ElementRef;

  public zoom: number = 10;
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
    
    this.mapListeners();
  }

  ngOnDestroy(): void {
    this.map?.remove();
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

    this.map.on('move', () => {
      const{lng, lat} = this.map!.getCenter();
      this.lng = lng;
      this.lat = lat;
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
