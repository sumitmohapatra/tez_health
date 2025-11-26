import { CommonModule } from '@angular/common';
import { Component, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import Swiper from 'swiper';
import { RouterLink } from "@angular/router";

@Component({
  selector: 'app-top-categories',
  imports: [CommonModule, RouterLink],
  templateUrl: './top-categories.component.html',
  styleUrl: './top-categories.component.css',
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
})
export class TopCategoriesComponent {
  checkupCategories = [
    {
      title: "Minor Injuries",
      subtitle: "15 mins",
      image: "/images/patient.png"
    },
    {
      title: "Minor Illness",
      subtitle: "15 mins",
      image: "/images/sick.png"
    },
    {
      title: "Nursing Care",
      subtitle: "15 mins",
      image: "/images/patient.png"
    },
    {
      title: "Diagnostics",
      subtitle: "15 mins",
      image: "/images/sick.png"
    },
    {
      title: "Minor Illness",
      subtitle: "15 mins",
      image: "/images/sick.png"
    },
  ];
  

  ngAfterViewInit(): void {
    new Swiper('.categories-swiper', {
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
