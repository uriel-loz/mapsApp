import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MapsComponent } from './layout/maps/maps.component';
import { FullScreenComponent } from './pages/full-screen/full-screen.component';
import { ZoomRangeComponent } from './pages/zoom-range/zoom-range.component';
import { MarkersComponent } from './pages/markers/markers.component';
import { PropertiesComponent } from './pages/properties/properties.component';

const routes: Routes = [
  {
    path: '',
    component: MapsComponent,
    children: [
      {
        path: 'fullscreen',
        component: FullScreenComponent
      },
      {
        path: 'zoom-range',
        component: ZoomRangeComponent
      },
      {
        path: 'markers',
        component: MarkersComponent
      },
      {
        path: 'properties',
        component: PropertiesComponent
      },
      {
        path: '**',
        redirectTo: 'fullscreen'
      },
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class MapsRoutingModule {}