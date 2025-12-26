import { Component } from '@angular/core';
import { ComingSoonComponent } from "../home/coming-soon/coming-soon.component";
import { CommonModule } from '@angular/common';
import { ModalComponent } from '../../shared/components/ui/modal/modal.component';
import { WaitListComponent } from './wait-list/wait-list.component';

@Component({
  selector: 'app-tez-plus',
  imports: [CommonModule,ModalComponent,WaitListComponent],
  templateUrl: './tez-plus.component.html',
  styleUrl: './tez-plus.component.css'
})
export class TezPlusComponent {
 isWaitlistOpen = false;

  openWaitlist(): void {
    this.isWaitlistOpen = true;
  }

  closeWaitlist(): void {
    this.isWaitlistOpen = false;
  }
}
