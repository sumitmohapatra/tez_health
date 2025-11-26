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
    { title: 'Diagnostics',price: '₹ 499', image: '/images/diagnostic.png' },
    { title: 'Physiotherapy',price: '₹ 799', image: '/images/physical-therapy.png' },
    { title: 'Home Care', price: '₹ 499', image: '/images/sick.png' },
    { title: 'Injection Service', price: '₹ 699', image: '/images/sick.png' },
    { title: 'Vaccination Service', price: '₹ 599', image: '/images/sick.png' },
    { title: 'Doctor Visit', price: '₹ 899', image: '/images/sick.png' },
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
