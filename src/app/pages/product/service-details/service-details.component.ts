import { Component, ElementRef, Input, ViewChild } from '@angular/core';
import { Product } from '../../../models/Tez';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-service-details',
  imports: [CommonModule],
  templateUrl: './service-details.component.html',
  styleUrl: './service-details.component.css'
})
export class ServiceDetailsComponent {
  @Input() product!: Product;
  @ViewChild('content') content!: ElementRef;

  showMore = false;
  isLongContent = false;
  private checked = false;

  ngAfterViewChecked() {
    if (this.content && !this.checked) {
      const height = this.content.nativeElement.scrollHeight;
      this.isLongContent = height > 120;
      this.checked = true; // run only once
    }
  }

  toggleView() {
    this.showMore = !this.showMore;
  }

}
