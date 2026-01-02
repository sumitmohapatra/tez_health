import { Component, Input } from '@angular/core';
import { Product } from '../../../models/Tez';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-related-services',
  imports: [CommonModule,RouterModule],
  templateUrl: './related-services.component.html',
  styleUrl: './related-services.component.css'
})
export class RelatedServicesComponent {
  @Input() products: Product[] = [];

  getFirstVariant(product: Product) {
    return product?.variants?.length ? product.variants[0] : null;
  }

  getDiscountPercentage(product: Product): number {
  const variant = this.getFirstVariant(product);
  if (!variant) return 0;

  return Math.round(
    ((variant.price - variant.discountPrice) / variant.price) * 100
  );
}
}
