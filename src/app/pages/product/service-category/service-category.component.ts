import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { ActivatedRoute, RouterModule } from "@angular/router";
import { DataContextService } from '../../../services/data-context.service';
import { Product } from '../../../models/Tez';

@Component({
  selector: 'app-service-category',
  imports: [CommonModule, RouterModule],
  templateUrl: './service-category.component.html',
  styleUrl: './service-category.component.css'
})
export class ServiceCategoryComponent {
  services: Product[] = [];
  categoryId!: string;

  constructor(
    private route: ActivatedRoute,
    private dataContext: DataContextService
  ) {}

  ngOnInit(): void {
    this.categoryId = this.route.snapshot.paramMap.get('categoryId')!;
    this.loadProducts();
  }

  loadProducts(): void {
    this.dataContext.fetchProductsByCategory(this.categoryId).subscribe({
      next: (res) => {
        this.services = res?.data || [];
      },
      error: (err) => {
        console.error('Failed to load products by category', err);
      }
    });
  }

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
