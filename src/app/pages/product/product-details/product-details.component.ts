import { AfterViewInit, Component } from '@angular/core';
import { ProductInfoComponent } from '../product-info/product-info.component';
import { ServiceDetailsComponent } from '../service-details/service-details.component';
import { RelatedServicesComponent } from '../related-services/related-services.component';
import { BookButtonComponent } from '../book-button/book-button.component';
import { ActivatedRoute } from '@angular/router';
import { Product, ProductVariant } from '../../../models/Tez';
import { DataContextService } from '../../../services/data-context.service';

@Component({
  selector: 'app-product-details',
  imports: [ProductInfoComponent, ServiceDetailsComponent, RelatedServicesComponent, BookButtonComponent],
  templateUrl: './product-details.component.html',
  styleUrl: './product-details.component.css'
})
export class ProductDetailsComponent {
  product!: Product;
  selectedVariant!: ProductVariant;

  constructor(
    private route: ActivatedRoute,
    private dataContext: DataContextService
  ) {}

  ngOnInit(): void {
    const productId = this.route.snapshot.paramMap.get('productId')!;

    this.dataContext.fetchProductsDetails().subscribe(res => {
      this.product = res?.data.find((p:Product) => p.productId === productId)!;

      if (this.product?.variants?.length) {
        this.selectedVariant = this.product.variants[0];
      }
    });
  }
}
