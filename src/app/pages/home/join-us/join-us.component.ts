import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { ModalComponent } from '../../../shared/components/ui/modal/modal.component';
import { ApplyNowComponent } from "../apply-now/apply-now.component";
import { Title, Meta } from '@angular/platform-browser';

@Component({
  selector: 'app-join-us',
  imports: [CommonModule, ModalComponent, ApplyNowComponent],
  templateUrl: './join-us.component.html',
  styleUrl: './join-us.component.css'
})
export class JoinUsComponent {
showApplyForm:boolean = false;

 constructor(
    private title: Title,
    private meta: Meta
  ) {}

  ngOnInit(): void {
    this.title.setTitle(
      'Join Tez Health | Careers for Nurses, Doctors & Care Teams'
    );

    this.meta.updateTag({
      name: 'description',
      content:
        'Join Tez Health’s care crew. Work as a nurse, doctor, or physiotherapist delivering hospital-grade care at home with flexible shifts and great earnings.'
    });
  }
}
