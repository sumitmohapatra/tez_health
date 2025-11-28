import { Component } from '@angular/core';
import { ModalComponent } from '../../../shared/components/ui/modal/modal.component';
import { ScheduleCallbackComponent } from "../schedule-callback/schedule-callback.component";

@Component({
  selector: 'app-book-button',
  imports: [ModalComponent, ScheduleCallbackComponent],
  templateUrl: './book-button.component.html',
  styleUrl: './book-button.component.css'
})
export class BookButtonComponent {
  isOpen = false;

  openModal() {
    this.isOpen = true;
  }

  closeModal() {
    this.isOpen = false;
  }
}
