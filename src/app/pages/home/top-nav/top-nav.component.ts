import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { RouterModule } from "@angular/router";

@Component({
  selector: 'app-top-nav',
  imports: [CommonModule, RouterModule],
  templateUrl: './top-nav.component.html',
  styleUrl: './top-nav.component.css'
})
export class TopNavComponent {
  isMobileMenuOpen = false;

  openMenu() {
    this.isMobileMenuOpen = true;
  }

  closeMenu() {
    this.isMobileMenuOpen = false;
  }
}
