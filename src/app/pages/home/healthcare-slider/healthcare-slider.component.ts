import { CommonModule } from '@angular/common';
import { Component, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import Swiper from 'swiper';

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
      title: 'Healthcare @ Home',
      subtitle: 'In Minutes',
      image: '/images/healthcare_at_home.jpg'
    },
    {
      title: 'Book a Doctor Visit',
      subtitle: 'Anytime, Anywhere',
      image: '/images/healthcare_at_home.jpg'
    },
    {
      title: 'Your Health, Our Priority',
      subtitle: 'Trusted Care Providers',
      image: '/images/healthcare_at_home.jpg'
    }
  ];

  ngAfterViewInit() {
    new Swiper(".hero-swiper", {
      loop: true,
      effect: "fade",
      fadeEffect: { crossFade: true },

      autoplay: {
        delay: 3000,       // Slide every 3 seconds
        disableOnInteraction: false,  // Keep autoplay after manual click
      },

      pagination: {
        el: ".swiper-pagination",
        clickable: true
      },

      navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev"
      }
    });
  }
}
