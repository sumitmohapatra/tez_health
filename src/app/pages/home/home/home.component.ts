import { Component } from '@angular/core';
import { TopCategoriesComponent } from '../top-categories/top-categories.component';
import { PopularServicesComponent } from '../popular-services/popular-services.component';
import { WhyTezhealthComponent } from '../why-tezhealth/why-tezhealth.component';
import { PartnerSectionComponent } from '../partner-section/partner-section.component';
import { TopNavComponent } from '../top-nav/top-nav.component';
import { HealthcareSliderComponent } from '../healthcare-slider/healthcare-slider.component';
import { FooterComponent } from '../footer/footer.component';
import { ReviewsComponent } from '../reviews/reviews.component';
import { FaqComponent } from "../faq/faq.component";
import { SearchBoxComponent } from "../search-box/search-box.component";
import { Router } from '@angular/router';
import { HowItWorksComponent } from "../how-it-works/how-it-works.component";

@Component({
  selector: 'app-home',
  imports: [TopCategoriesComponent, PopularServicesComponent, WhyTezhealthComponent, HealthcareSliderComponent, ReviewsComponent, FaqComponent, PartnerSectionComponent, SearchBoxComponent, HowItWorksComponent],
  templateUrl: './home.component.html',
})
export class HomeComponent {
  constructor(private router:Router){}
}
