import { CommonModule } from '@angular/common';
import { AfterViewInit, Component } from '@angular/core';
import Swiper from 'swiper';
import { DataContextService } from '../../../services/data-context.service';
import { Product } from '../../../models/Tez';
import { RouterModule } from '@angular/router';


@Component({
  selector: 'app-popular-services',
  imports: [CommonModule,RouterModule],
  standalone: true,
  templateUrl: './popular-services.component.html',
})
export class PopularServicesComponent {
  // services = [
  //   { 
  //     title: 'Injection service',
  //     price: '₹ 499',
  //     image: 'https://images.unsplash.com/photo-1550831107-1553da8c8464?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
  //     description: 'Essential health checks, blood tests & scans delivered at home.'
  //   },
  //   { 
  //     title: 'Ecg at home',
  //     price: '₹ 799',
  //     image: 'https://images.unsplash.com/photo-1599058917212-d750089bc07e?auto=format&fit=crop&w=800&q=80',
  //     description: 'Recover mobility with expert in-home physiotherapy sessions.'
  //   },
  //   { 
  //     title: 'Rabies vaccination',
  //     price: '₹ 499',
  //     image: '/images/vaccination.png',
  //     description: 'Nursing support for elderly, chronic patients, and recovery care.'
  //   },
  //   { 
  //     title: 'Doctor consultation online',
  //     price: '₹ 699',
  //     image: '/images/doctor_consultation.png',
  //     description: 'Skilled post-op nursing and wound care at home for smooth recovery.'
  //   }
  // ];


  constructor(private dataContext: DataContextService) { }

  searchText = '';
  products: Product[] = [];

  ngOnInit(): void {
    this.loadPopularProducts();
  }

  loadPopularProducts(): void {
    this.dataContext.fetchPopularProducts().subscribe({
      next: (res) => {
        this.products = (res?.data || [])
      },
      error: (err) => {
        console.error('Failed to load categories', err);
      }
    });
  }

  getFirstVariant(product: Product) {
    return product?.variants?.length ? product.variants[0] : null;
  }
}
