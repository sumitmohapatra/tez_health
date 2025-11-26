import { Component } from '@angular/core';
import { ProductInfoComponent } from '../product-info/product-info.component';
import { ServiceDetailsComponent } from '../service-details/service-details.component';
import { RelatedServicesComponent } from '../related-services/related-services.component';
import { BookButtonComponent } from '../book-button/book-button.component';
import { TopNavComponent } from '../../home/top-nav/top-nav.component';
import { FooterComponent } from '../../home/footer/footer.component';

@Component({
  selector: 'app-product-details',
  imports: [ProductInfoComponent, ServiceDetailsComponent, RelatedServicesComponent, BookButtonComponent],
  templateUrl: './product-details.component.html',
  styleUrl: './product-details.component.css'
})
export class ProductDetailsComponent {

}
