import { Component, Input } from '@angular/core';
import { Product } from '../../../models/Tez';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-service-details',
  imports: [CommonModule],
  templateUrl: './service-details.component.html',
  styleUrl: './service-details.component.css'
})
export class ServiceDetailsComponent {
  @Input() product!: Product;
}
