import { Component, EventEmitter, Output } from '@angular/core';
import { DataContextService } from '../../../services/data-context.service';
import { Subject, debounceTime, distinctUntilChanged, switchMap } from 'rxjs';
import { CommonModule } from '@angular/common';
import { Router } from '@angular/router';
import { SearchApiResponse } from '../../../models/Tez';

@Component({
  selector: 'app-search-box',
  imports: [CommonModule],
  templateUrl: './search-box.component.html',
  styleUrl: './search-box.component.css'
})
export class SearchBoxComponent {
  search$ = new Subject<string>();
  results: SearchApiResponse[] = [];
  showResults = false;

  constructor(private dataContextService: DataContextService, private router: Router) {

  }

  ngOnInit() {
    this.search$
      .pipe(
        debounceTime(400),
        distinctUntilChanged(),
        switchMap(term => this.dataContextService.searchProducts(term))
      )
      .subscribe(res => {
        this.results = res?.data || res || [];
        this.showResults = true;
      });
  }

  onSearch(term: string) {
    if (term.length < 2) {
      this.showResults = false;
      return;
    }
    this.search$.next(term);
  }

  clear() {
    setTimeout(() => this.showResults = false, 150);
  }

  goToDetails(service: SearchApiResponse) {
    this.router.navigate(
      ['/product-details', service.productId, service.categoryId]
    );
    this.showResults = false;
  }
}
