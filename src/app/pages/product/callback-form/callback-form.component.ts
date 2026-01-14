import { CommonModule } from '@angular/common';
import { Component, EventEmitter, Input, Output, SimpleChanges } from '@angular/core';
import { FormGroup, FormBuilder, Validators, ReactiveFormsModule } from '@angular/forms';
import { Product } from '../../../models/Tez';
import { DataContextService } from '../../../services/data-context.service';
import { AlertService } from '../../../services/alert.service';

@Component({
  selector: 'app-callback-form',
  imports: [CommonModule, ReactiveFormsModule],
  templateUrl: './callback-form.component.html',
  styleUrl: './callback-form.component.css'
})
export class CallbackFormComponent {
  @Output() formSubmitted = new EventEmitter<void>();
  @Input() product!: Product;

  submitted = false;
  isSubmitting = false;
  minDate!: string;

  callbackForm: FormGroup;

  constructor(private fb: FormBuilder, private dataContext:DataContextService, private alertService:AlertService) {
    this.callbackForm = this.fb.group({
      name: ['', Validators.required],
      location: ['', Validators.required],
      mobile: ['', [
        Validators.required,
        Validators.pattern(/^[0-9]{10}$/)
      ]],
      Service_required_on: ['', Validators.required],
      serviceName: [{ value: '', disabled: true }, Validators.required]
    });
  }

  ngOnInit() {
    const today = new Date();
    this.minDate = today.toISOString().split('T')[0]; // YYYY-MM-DD
  }

  ngOnChanges(changes: SimpleChanges): void {
    if (changes['product']?.currentValue) {
      this.callbackForm.patchValue({
        serviceName: this.product.name
      });
    }
  }

  get f() {
    return this.callbackForm.controls;
  }

  submit() {
    this.submitted = true;
    if (this.callbackForm.invalid) return;

    this.isSubmitting = true;

    const raw = this.callbackForm.getRawValue();

    const payload = {
      Name: raw.name,
      Mobile: raw.mobile,
      ServiceName: raw.serviceName,
      Location: raw.location,
      Service_required_on: this.formatDate(raw.Service_required_on)
    };

     this.dataContext.getFormDetailsrecords(payload).subscribe(response => {
      this.isSubmitting = false;
      this.formSubmitted.emit();
      this.callbackForm.reset();
      this.submitted = false;
      this.alertService.showSuccess('Form submitted successfully!');
    }, error => {
      this.isSubmitting = false;
      this.alertService.showError('Failed to submit the form');
    })

  }

  private formatDate(date: string): string {
  const d = new Date(date);
  const day = d.getDate(); // no leading zero
  const month = String(d.getMonth() + 1).padStart(2, '0');
  const year = d.getFullYear();

  return `${day}-${month}-${year}`;
}

}
