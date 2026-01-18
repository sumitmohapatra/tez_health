import { Component } from '@angular/core';
import { ReviewsComponent } from "../reviews/reviews.component";
import { Meta, Title } from '@angular/platform-browser';

@Component({
  selector: 'app-about-us',
  imports: [ReviewsComponent],
  templateUrl: './about-us.component.html',
  styleUrl: './about-us.component.css'
})
export class AboutUsComponent {
constructor(
    private title: Title,
    private meta: Meta
  ) {}

  ngOnInit(): void {
    this.title.setTitle(
      'About Tez Health | Redefining Healthcare at Home in Minutes'
    );

    this.meta.updateTag({
      name: 'description',
      content:
        'Learn about Tez Health’s mission to make hospital-grade healthcare accessible at home using technology, skilled professionals, and rapid response care.'
    });
  }
}
