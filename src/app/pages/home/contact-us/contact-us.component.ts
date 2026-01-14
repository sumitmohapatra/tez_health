import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { DataContextService } from '../../../services/data-context.service';
import { AlertService } from '../../../services/alert.service';

@Component({
  selector: 'app-contact-us',
  imports: [CommonModule, ReactiveFormsModule],
  templateUrl: './contact-us.component.html',
  styleUrl: './contact-us.component.css'
})
export class ContactUsComponent {

  constructor(private fb: FormBuilder, private dataContext: DataContextService, private alertService: AlertService) { }

  contactForm!: FormGroup;

  ngOnInit() {
    this.contactForm = this.fb.group({
      name: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
      mobile: ['', [Validators.required, Validators.pattern(/^[6-9]\d{9}$/)]],
      message: ['', [Validators.required, Validators.minLength(10)]]
    });
  }

  isInvalid(field: string) {
    const control = this.contactForm.get(field);
    return control?.invalid && (control.touched || control.dirty);
  }

  submit() {
    if (this.contactForm.invalid) {
      this.contactForm.markAllAsTouched();
      return;
    }

    const payload = {
      ...this.contactForm.value,
      formtype: 2,
    };

    this.dataContext.getFormDetailsrecords(payload).subscribe(response => {
      this.alertService.showSuccess('Form submitted successfully!');
      this.contactForm.reset();
    }, error => {
      this.alertService.showError('Failed to submit the form');
    })
  }
}
