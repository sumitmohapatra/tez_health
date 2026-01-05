import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { ModalComponent } from '../../../shared/components/ui/modal/modal.component';
import { ApplyNowComponent } from "../apply-now/apply-now.component";

@Component({
  selector: 'app-join-us',
  imports: [CommonModule, ModalComponent, ApplyNowComponent],
  templateUrl: './join-us.component.html',
  styleUrl: './join-us.component.css'
})
export class JoinUsComponent {
showApplyForm:boolean = false;
}
