import { CommonModule } from '@angular/common';
import { AfterViewInit, Component } from '@angular/core';
import Swiper from 'swiper';


@Component({
  selector: 'app-popular-services',
  imports:[CommonModule],
  standalone:true,
  templateUrl: './popular-services.component.html',
})
export class PopularServicesComponent implements AfterViewInit {
  services = [
    { 
      title: 'Diagnostics',
      price: '₹ 499',
      image: 'https://images.unsplash.com/photo-1550831107-1553da8c8464?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
      description: 'Essential health checks, blood tests & scans delivered at home.'
    },
    { 
      title: 'Physiotherapy',
      price: '₹ 799',
      image: 'https://images.unsplash.com/photo-1599058917212-d750089bc07e?auto=format&fit=crop&w=800&q=80',
      description: 'Recover mobility with expert in-home physiotherapy sessions.'
    },
    { 
      title: 'Home Care',
      price: '₹ 499',
      image: 'https://images.unsplash.com/photo-1584515933487-779824d29309?auto=format&w=800&q=80',
      description: 'Nursing support for elderly, chronic patients, and recovery care.'
    }
  ];
  
  
  
  ngAfterViewInit(): void {
    new Swiper('.services-swipper', {

      loop: true,
      spaceBetween: 16,
      slidesPerView: 1.2,

      breakpoints: {
        640:  { slidesPerView: 2.2 },
        1024: { slidesPerView: 3.5 },
        1440: { slidesPerView: 4.2 },
      },

      navigation: {
        nextEl: '.tez-slider .swiper-button-next',
        prevEl: '.tez-slider .swiper-button-prev',
      },

      pagination: {
        el: '.tez-slider .swiper-pagination',
        clickable: true,
      },
    });
  }
}
