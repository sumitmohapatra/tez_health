import { AfterViewInit, Component } from '@angular/core';
declare const window: any;

@Component({
  selector: 'app-faq',
  imports: [],
  templateUrl: './faq.component.html',
  styleUrl: './faq.component.css'
})
export class FaqComponent implements AfterViewInit {
  ngAfterViewInit() {
    setTimeout(() => {
       // Initialize Accordion
    if ((window as any).HSAccordion) {
      (window as any).HSAccordion.autoInit();
    }
    });
  }
}
