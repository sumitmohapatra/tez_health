import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { Router, RouterModule } from "@angular/router";
import { debounceTime, distinctUntilChanged, Subject, switchMap } from 'rxjs';
import { DataContextService } from '../../../services/data-context.service';
import { SearchBoxComponent } from "../search-box/search-box.component";

@Component({
  selector: 'app-top-nav',
  imports: [CommonModule, RouterModule, SearchBoxComponent],
  templateUrl: './top-nav.component.html',
  styleUrl: './top-nav.component.css'
})
export class TopNavComponent {
  constructor(private dataContextService: DataContextService, private router: Router) { }

  isMobileMenuOpen = false;

  openMenu() {
    this.isMobileMenuOpen = true;
  }

  closeMenu() {
    this.isMobileMenuOpen = false;
  }
}
