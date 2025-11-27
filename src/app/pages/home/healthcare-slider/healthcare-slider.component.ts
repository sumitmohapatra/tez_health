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
      subtitle: 'Quality healthcare at your doorstep — anytime.',
      image: 'https://images.unsplash.com/photo-1584515933487-779824d29309?auto=format&fit=crop&w=1920&q=80',
      button: 'Book Your Services'
    },
    {
      title: 'Home Care',
      subtitle: 'Trained nurses for elderly & chronic care.',
      image: '/images/doctor_visit.jpg',
      button: 'Learn More'
    },
    {
      title: 'Physiotherapy',
      subtitle: 'Recover mobility with expert home physio.',
      image: 'https://images.unsplash.com/photo-1584515933487-779824d29309?auto=format&fit=crop&w=1920&q=80',
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
