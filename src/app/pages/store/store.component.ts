import { Component } from '@angular/core';
import { PageBreadcrumbComponent } from "../../shared/components/common/page-breadcrumb/page-breadcrumb.component";
import { ComingSoonComponent } from "../home/coming-soon/coming-soon.component";

@Component({
  selector: 'app-store',
  imports: [ComingSoonComponent],
  templateUrl: './store.component.html',
  styleUrl: './store.component.css'
})
export class StoreComponent {

}
