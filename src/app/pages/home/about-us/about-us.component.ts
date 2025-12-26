import { Component } from '@angular/core';
import { ReviewsComponent } from "../reviews/reviews.component";

@Component({
  selector: 'app-about-us',
  imports: [ReviewsComponent],
  templateUrl: './about-us.component.html',
  styleUrl: './about-us.component.css'
})
export class AboutUsComponent {

}
