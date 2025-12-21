import { Component, Input } from '@angular/core';
import { Product, ProductVariant } from '../../../models/Tez';
import { ActivatedRoute } from '@angular/router';
import { DataContextService } from '../../../services/data-context.service';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-product-info',
  imports: [CommonModule],
  templateUrl: './product-info.component.html',
  styleUrl: './product-info.component.css'
})
export class ProductInfoComponent {
  @Input() product!: Product;
  @Input() selectedVariant!: ProductVariant;

  constructor(

  ) {}

  ngOnInit(): void {
    
  }

  selectVariant(variant: ProductVariant) {
    this.selectedVariant = variant;
  }

  getDiscountPercentage(): number {
    if (!this.selectedVariant) return 0;

    return Math.round(
      ((this.selectedVariant.price - this.selectedVariant.discountPrice) /
        this.selectedVariant.price) *
        100
    );
  }
}
