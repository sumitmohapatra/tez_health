import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';
import { FooterComponent } from "./pages/home/footer/footer.component";
import { TopNavComponent } from './pages/home/top-nav/top-nav.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    RouterModule,
    FooterComponent,
    TopNavComponent
],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
})
export class AppComponent {
  title = 'tez.health';
}
