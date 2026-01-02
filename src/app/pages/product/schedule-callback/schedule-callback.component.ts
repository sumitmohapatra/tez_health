import { AfterViewInit, Component, Input } from '@angular/core';
import { Product } from '../../../models/Tez';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-schedule-callback',
  imports: [CommonModule],
  templateUrl: './schedule-callback.component.html',
  styleUrl: './schedule-callback.component.css'
})
export class ScheduleCallbackComponent {
 @Input() product!: Product;
}
