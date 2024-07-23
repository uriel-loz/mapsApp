import mapboxgl from 'mapbox-gl'; // or "const mapboxgl = require('mapbox-gl');"
mapboxgl.accessToken = environment.MAPBOX_KEY;

import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MapsRoutingModule } from './maps-routing.module';
import { MiniMapComponent } from './components/mini-map/mini-map.component';
import { MapsComponent } from './layout/maps/maps.component';
import { FullScreenComponent } from './pages/full-screen/full-screen.component';
import { MarkersComponent } from './pages/markers/markers.component';
import { PropertiesComponent } from './pages/properties/properties.component';
import { ZoomRangeComponent } from './pages/zoom-range/zoom-range.component';
import { environment } from '../../environments/environment';
import { CounterComponent } from '../alone/components/counter/counter.component';
import { SideMenuComponent } from '../alone/components/side-menu/side-menu.component';

@NgModule({
  imports: [
    CommonModule,
    MapsRoutingModule,
    CounterComponent,
    SideMenuComponent
  ],
  declarations: [
    MiniMapComponent,
    MapsComponent,
    FullScreenComponent,
    MarkersComponent,
    PropertiesComponent,
    ZoomRangeComponent,
  ]
})
export class MapsModule { }
