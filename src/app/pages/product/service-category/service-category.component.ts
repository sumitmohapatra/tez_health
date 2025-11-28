import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { RouterModule } from "@angular/router";

@Component({
  selector: 'app-service-category',
  imports: [CommonModule, RouterModule],
  templateUrl: './service-category.component.html',
  styleUrl: './service-category.component.css'
})
export class ServiceCategoryComponent {
  services = [
    {
      name: 'Service Name',
      description: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry',
      price: 600,
      discount: '20% off',
      image: '/images/doctor_visit.jpg',
    },
    {
      name: 'Service Name',
      description: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry',
      price: 600,
      discount: '20% off',
      image: '/images/doctor_visit.jpg',
    },
    {
      name: 'Service Name',
      description: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry',
      price: 600,
      discount: '20% off',
      image: '/images/doctor_visit.jpg',
    },
  ];
}
