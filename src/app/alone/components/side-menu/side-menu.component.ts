import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component } from '@angular/core';
import { RouterModule } from '@angular/router';

interface MenuItem {
  route:string,
  name: string
}

@Component({
  standalone: true,
  imports: [
    CommonModule,
    RouterModule
  ],
  selector: 'side-menu',
  templateUrl: './side-menu.component.html',
  styleUrls: ['./side-menu.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class SideMenuComponent {
  public menuItems: MenuItem[] = [
    {route: '/maps/fullscreen', name: 'Fullscreen'},
    {route: '/maps/zoom-range', name: 'Zoom Range'},
    {route: '/maps/markers', name: 'Markers'},
    {route: '/maps/properties', name: 'Houses'},
    {route: '/alone', name: 'Alone Page'},
  ];

}
