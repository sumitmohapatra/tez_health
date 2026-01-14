import { AfterViewInit, Component, EventEmitter, Input, Output } from '@angular/core';
import { Product } from '../../../models/Tez';
import { CommonModule } from '@angular/common';
import { ModalComponent } from '../../../shared/components/ui/modal/modal.component';
import { CallbackFormComponent } from "../callback-form/callback-form.component";

@Component({
  selector: 'app-schedule-callback',
  imports: [CommonModule, ModalComponent, CallbackFormComponent],
  templateUrl: './schedule-callback.component.html',
  styleUrl: './schedule-callback.component.css'
})
export class ScheduleCallbackComponent {
 @Input() product!: Product;
 @Output() formSubmitted = new EventEmitter<void>();
 showCallbackForm = false;

}
