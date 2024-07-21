import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MapsRoutingModule } from './maps-routing.module';
import { MiniMapComponent } from './components/mini-map/mini-map.component';
import { SideMenuComponent } from './components/side-menu/side-menu.component';
import { MapsComponent } from './layout/maps/maps.component';
import { FullScreenComponent } from './pages/full-screen/full-screen.component';
import { MarkersComponent } from './pages/markers/markers.component';
import { PropertiesComponent } from './pages/properties/properties.component';
import { ZoomRangeComponent } from './pages/zoom-range/zoom-range.component';

@NgModule({
  imports: [
    CommonModule,
    MapsRoutingModule
  ],
  declarations: [
    MiniMapComponent,
    SideMenuComponent,
    MapsComponent,
    FullScreenComponent,
    MarkersComponent,
    PropertiesComponent,
    ZoomRangeComponent,
  ]
})
export class MapsModule { }
