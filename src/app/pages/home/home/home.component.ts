import { Component } from '@angular/core';
import { TopCategoriesComponent } from '../top-categories/top-categories.component';
import { PopularServicesComponent } from '../popular-services/popular-services.component';
import { WhyTezhealthComponent } from '../why-tezhealth/why-tezhealth.component';
import { PartnerSectionComponent } from '../partner-section/partner-section.component';
import { TopNavComponent } from '../top-nav/top-nav.component';
import { HealthcareSliderComponent } from '../healthcare-slider/healthcare-slider.component';
import { FooterComponent } from '../footer/footer.component';

@Component({
  selector: 'app-home',
  imports: [TopCategoriesComponent, PopularServicesComponent, WhyTezhealthComponent , PartnerSectionComponent, HealthcareSliderComponent],
  templateUrl: './home.component.html',
})
export class HomeComponent {

}
