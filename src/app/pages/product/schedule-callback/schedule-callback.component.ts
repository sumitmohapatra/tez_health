import { AfterViewInit, Component, Input } from '@angular/core';
import { Product } from '../../../models/Tez';

@Component({
  selector: 'app-schedule-callback',
  imports: [],
  templateUrl: './schedule-callback.component.html',
  styleUrl: './schedule-callback.component.css'
})
export class ScheduleCallbackComponent {
 @Input() product!: Product;
}
