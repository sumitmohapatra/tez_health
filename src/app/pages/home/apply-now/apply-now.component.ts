import { CommonModule } from '@angular/common';
import { Component, EventEmitter, Output } from '@angular/core';
import { FormBuilder, FormGroup, Validators, ReactiveFormsModule } from '@angular/forms';
import { DataContextService } from '../../../services/data-context.service';
import { AlertService } from '../../../services/alert.service';

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

  constructor(private fb: FormBuilder, private dataContext: DataContextService, private alertService: AlertService) { }

  ngOnInit() {
    this.applyForm = this.fb.group({
      name: ['', [Validators.required, Validators.minLength(2)]],
      mobile: ['', [
        Validators.required,
        Validators.pattern(/^[6-9]\d{9}$/)
      ]],
      profession: ['', Validators.required],
      location: ['', Validators.required]
    });
  }

  submit() {
    this.submitted = true;

    if (this.applyForm.invalid) return;

    this.isSubmitting = true;

    const payload = {
      ...this.applyForm.value,
      formtype: 1,
    };

    this.dataContext.getFormDetailsrecords(payload).subscribe(response => {
      this.isSubmitting = false;
      this.formSubmitted.emit();
      this.applyForm.reset();
      this.submitted = false;
      this.alertService.showSuccess('Form submitted successfully!');
    }, error => {
      this.isSubmitting = false;
      this.alertService.showError('Failed to submit the form');
    })
  }

  get f() {
    return this.applyForm.controls;
  }
}
