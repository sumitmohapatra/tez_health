import { CommonModule } from '@angular/common';
import { Component, CUSTOM_ELEMENTS_SCHEMA, Input } from '@angular/core';
import Swiper from 'swiper';
import { RouterModule } from "@angular/router";
import { Category } from '../../../models/Tez';
import { DataContextService } from '../../../services/data-context.service';
import { FormsModule } from '@angular/forms';
import { FilterByTextPipe } from "../../../pipe/filter-by-text.pipe";

@Component({
  selector: 'app-top-categories',
  imports: [CommonModule, RouterModule, FormsModule, FilterByTextPipe],
  templateUrl: './top-categories.component.html',
  styleUrl: './top-categories.component.css',
})
export class TopCategoriesComponent {
 categories: Category[] = [];

  @Input() limit: number | null = null;

  constructor(private dataContext: DataContextService) {}

  searchText = '';

  ngOnInit(): void {
    this.loadCategories();
  }

  loadCategories(): void {
    this.dataContext.fetchCategoryDetails().subscribe({
      next: (res) => {
        this.categories = (res?.objret || [])
      },
      error: (err) => {
        console.error('Failed to load categories', err);
      }
    });
  }

  get displayedCategories(): Category[] {
    if (!this.limit) return this.categories;
    return this.categories.slice(0, this.limit);
  }
}
