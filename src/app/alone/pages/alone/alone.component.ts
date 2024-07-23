import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component } from '@angular/core';
import { CounterComponent } from '../../components/counter/counter.component';

@Component({
  standalone: true,
  imports: [
    CommonModule,
    CounterComponent
  ],
  templateUrl: './alone.component.html',
  styleUrl: './alone.component.css',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class AloneComponent { }
