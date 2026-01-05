import { CommonModule } from '@angular/common';
import { Component, EventEmitter, Output } from '@angular/core';
import { FormBuilder, FormGroup, Validators, ReactiveFormsModule } from '@angular/forms';

@Component({
  selector: 'app-apply-now',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule],
  templateUrl: './apply-now.component.html'
})
export class ApplyNowComponent {

  applyForm!: FormGroup;
  submitted = false;
  isSubmitting = false;
  @Output() formSubmitted = new EventEmitter<void>();

  constructor(private fb: FormBuilder) {}

  ngOnInit() {
    this.applyForm = this.fb.group({
      name: ['', [Validators.required, Validators.minLength(2)]],
      phone: ['', [
        Validators.required,
        Validators.pattern(/^[6-9]\d{9}$/)
      ]],
      role: ['', Validators.required],
      location: ['', Validators.required]
    });
  }

  submit() {
    this.submitted = true;

    if (this.applyForm.invalid) return;

    this.isSubmitting = true;

    const payload = {
      ...this.applyForm.value,
      source: 'Tez Health Careers',
      createdAt: new Date()
    };

    console.log('Application submitted:', payload);

    setTimeout(() => {
      this.isSubmitting = false;
      this.formSubmitted.emit();
      this.applyForm.reset();
      this.submitted = false;
    }, 1200);
  }

  get f() {
    return this.applyForm.controls;
  }
}
