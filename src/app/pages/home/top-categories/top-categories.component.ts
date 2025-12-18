import { CommonModule } from '@angular/common';
import { Component, CUSTOM_ELEMENTS_SCHEMA, Input } from '@angular/core';
import Swiper from 'swiper';
import { RouterModule } from "@angular/router";

@Component({
  selector: 'app-top-categories',
  imports: [CommonModule,RouterModule],
  templateUrl: './top-categories.component.html',
  styleUrl: './top-categories.component.css',
})
export class TopCategoriesComponent {
  categories = [
    {
      title: "Minor injuries/illness",
      subtitle: "15 mins",
      image: "https://images.unsplash.com/photo-1604881991720-f91add269bed?auto=format&fit=crop&w=800&q=80",
      description: "Quick treatment for cuts, bruises, sprains, and small wounds at home."
    },
    {
      title: "Nursing care",
      subtitle: "15 mins",
      image: "https://images.unsplash.com/photo-1526256262350-7da7584cf5eb?auto=format&fit=crop&w=800&q=80",
      description: "On-demand care for fever, cold, infections, headaches and mild symptoms."
    },
    {
      title: "Wound care",
      subtitle: "15 mins",
      image: "https://images.unsplash.com/photo-1538108149393-fbbd81895907?auto=format&fit=crop&w=800&q=80",
      description: "Professional nursing support for elders, recovery, injections, and vitals."
    },
    {
      title: "Elder care",
      subtitle: "15 mins",
      image: "https://images.unsplash.com/photo-1526256262350-7da7584cf5eb?auto=format&fit=crop&w=800&q=80",
      description: "Immediate on-site first aid support for urgent, non-hospital emergencies."
    },
  
    {
      title: "Full body checkup",
      subtitle: "15 mins",
      image: "https://images.unsplash.com/photo-1604881991720-f91add269bed?auto=format&fit=crop&w=800&q=80",
      description: "Basic health diagnostics including vitals check, blood pressure and sugar monitoring."
    },
  
    {
      title: "Ambulance service",
      subtitle: "15 mins",
      image: "https://images.unsplash.com/photo-1584515933487-779824d29309?auto=format&fit=crop&w=800&q=80",
      description: "Compassionate home assistance for seniors including mobility support and daily care."
    },
    {
      title: "Minor Injuries",
      subtitle: "15 mins",
      image: "https://images.unsplash.com/photo-1604881991720-f91add269bed?auto=format&fit=crop&w=800&q=80",
      description: "Quick treatment for cuts, bruises, sprains, and small wounds at home."
    },
    {
      title: "Minor Illness",
      subtitle: "15 mins",
      image: "https://images.unsplash.com/photo-1526256262350-7da7584cf5eb?auto=format&fit=crop&w=800&q=80",
      description: "On-demand care for fever, cold, infections, headaches and mild symptoms."
    },
    {
      title: "Nursing Care",
      subtitle: "15 mins",
      image: "https://images.unsplash.com/photo-1538108149393-fbbd81895907?auto=format&fit=crop&w=800&q=80",
      description: "Professional nursing support for elders, recovery, injections, and vitals."
    },
    {
      title: "Emergency First Aid",
      subtitle: "15 mins",
      image: "https://images.unsplash.com/photo-1526256262350-7da7584cf5eb?auto=format&fit=crop&w=800&q=80",
      description: "Immediate on-site first aid support for urgent, non-hospital emergencies."
    },
  
    {
      title: "Diagnostics",
      subtitle: "15 mins",
      image: "https://images.unsplash.com/photo-1604881991720-f91add269bed?auto=format&fit=crop&w=800&q=80",
      description: "Basic health diagnostics including vitals check, blood pressure and sugar monitoring."
    },
  
    {
      title: "Elder Care",
      subtitle: "15 mins",
      image: "https://images.unsplash.com/photo-1584515933487-779824d29309?auto=format&fit=crop&w=800&q=80",
      description: "Compassionate home assistance for seniors including mobility support and daily care."
    }
  ];

  @Input() limit: number | null = null;
  
  get displayedCategories() {
    if (!this.limit) return this.categories;
    return this.categories.slice(0, this.limit);
  }
  
}
