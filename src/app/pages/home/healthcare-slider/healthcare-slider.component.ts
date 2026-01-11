import { CommonModule } from '@angular/common';
import { Component, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
declare const window: any;

@Component({
  selector: 'app-healthcare-slider',
  imports: [CommonModule],
  templateUrl: './healthcare-slider.component.html',
  styleUrl: './healthcare-slider.component.css',
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
})
export class HealthcareSliderComponent {
  slides = [
    {
      title: 'tez.health',
      subtitle: 'Skilled nurse. Expert care @Home in minutes.',
      image: '/images/banner-1.png',
      button: 'Book Your Services'
    },
    {
      title: 'Home Care',
      subtitle: 'Lab test @ Home, Fast and Hassle-free.',
      image: '/images/banner-2.png',
      button: 'Learn More'
    },
    {
      title: 'Physiotherapy',
      subtitle: 'Skip the inconvenience, get IV infusion at home .',
      image: '/images/banner-3.png',
      button: 'Book Now'
    }
  ];


  ngAfterViewInit() {
    setTimeout(() => {
      if (window.HSCarousel) {
        window.HSCarousel.autoInit();
      }
    });
  }
}
