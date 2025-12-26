import { Component } from '@angular/core';
import { GridShapeComponent } from "../../../shared/components/common/grid-shape/grid-shape.component";
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-coming-soon',
  imports: [GridShapeComponent,RouterModule],
  templateUrl: './coming-soon.component.html',
  styleUrl: './coming-soon.component.css'
})
export class ComingSoonComponent {
  currentYear: number = new Date().getFullYear();
}
