import { AfterViewInit, Component } from '@angular/core';
import { RouterModule } from '@angular/router';
import { FooterComponent } from "./pages/home/footer/footer.component";
import { TopNavComponent } from './pages/home/top-nav/top-nav.component';
import { BottomNavComponent } from "./pages/home/bottom-nav/bottom-nav.component";
import { ScheduleCallbackComponent } from "./pages/product/schedule-callback/schedule-callback.component";
import { LoaderComponent } from "./pages/home/loader/loader.component";
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    RouterModule,
    FooterComponent,
    TopNavComponent,
    BottomNavComponent,
    LoaderComponent,
    CommonModule
],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
})
export class AppComponent {
  title = 'tez.health';

  isLoading = true;

  ngOnInit() {
    setTimeout(() => {
      this.isLoading = false;
    }, 2000);
  }
}
