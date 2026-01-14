import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';
import { ApiLoaderComponent } from '../../home/api-loader/api-loader.component';
import { BottomNavComponent } from '../../home/bottom-nav/bottom-nav.component';
import { FooterComponent } from '../../home/footer/footer.component';
import { LoaderComponent } from '../../home/loader/loader.component';
import { TopNavComponent } from '../../home/top-nav/top-nav.component';
import { AlertHostComponent } from '../../toastr/alert-host/alert-host.component';
import { Observable } from 'rxjs';
import { LoaderService } from '../../../services/loader.service';

@Component({
  selector: 'app-layout',
  imports: [
    RouterModule,
    FooterComponent,
    TopNavComponent,
    BottomNavComponent,
    LoaderComponent,
    CommonModule,
    ApiLoaderComponent,
    AlertHostComponent
  ],
  templateUrl: './layout.component.html',
  styleUrl: './layout.component.css'
})
export class LayoutComponent {
isLoading$!: Observable<boolean>;
  showAppLoader = true;

  constructor(private loaderService: LoaderService) {
  }

  ngOnInit() {
    this.isLoading$ = this.loaderService.isLoading$;
    setTimeout(() => {
      this.showAppLoader = false;
    },2000)
  }
}
