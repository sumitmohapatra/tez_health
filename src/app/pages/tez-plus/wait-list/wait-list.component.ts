import { CommonModule } from '@angular/common';
import { Component, EventEmitter, Output } from '@angular/core';
import { FormGroup, FormBuilder, Validators, ReactiveFormsModule } from '@angular/forms';

@Component({
  selector: 'app-wait-list',
  imports: [CommonModule, ReactiveFormsModule],
  templateUrl: './wait-list.component.html',
  styleUrl: './wait-list.component.css'
})
export class WaitListComponent {
  @Output() submitted = new EventEmitter<void>();



  constructor(private fb: FormBuilder) {

  }

  waitlistForm!: FormGroup;
  isSubmitting = false;
  isSubmitted = false;

  ngOnInit() {
    this.waitlistForm = this.fb.group({
      name: ['', [Validators.required, Validators.minLength(2)]],
      phone: ['', [
        Validators.required,
        Validators.pattern(/^[6-9]\d{9}$/)
      ]],
      email: ['', [Validators.required, Validators.email]],
      forWhom: ['', [Validators.required, Validators.minLength(3)]]
    });
  }

  submit(): void {
    this.isSubmitted = true;

    if (this.waitlistForm.invalid) {
      return;
    }

    this.isSubmitting = true;

    const payload = {
      ...this.waitlistForm.value,
      source: 'Subscription Waitlist',
      createdAt: new Date()
    };

    // 🔗 Replace with real API call
    console.log('Waitlist data:', payload);

    setTimeout(() => {
      this.isSubmitting = false;
      this.submitted.emit(); // close modal
      this.waitlistForm.reset();
      this.isSubmitted = false;
    }, 1200);
  }

  get f() {
    return this.waitlistForm.controls;
  }
}
