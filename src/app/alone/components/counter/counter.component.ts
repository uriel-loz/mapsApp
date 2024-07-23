import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component, Input } from '@angular/core';

@Component({
  selector: 'alone-counter',
  standalone: true,
  // imports: [
  //   CommonModule,
  // ],
  templateUrl: './counter.component.html',
  styleUrl: './counter.component.css',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class CounterComponent { 
  @Input() counter: number = 0;
}
