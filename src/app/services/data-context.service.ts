import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from '../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class DataContextService {
  constructor(private http: HttpClient) {}

  /**
   * Fetch all categories
   */
  fetchCategoryDetails(): Observable<any> {
    return this.http.get<any>(`${environment.baseUrl}tez/FetchCategoryDetails`);
  }

  /**
   * Fetch all products
   */
  fetchProductsDetails(): Observable<any> {
    return this.http.get<any>(`${environment.baseUrl}tez/FetchProductsDetails`);
  }

  /**
   * Fetch products by category id
   * @param categoryId UUID of category
   */
  fetchProductsByCategory(categoryId: string): Observable<any> {
    const params = new HttpParams().set('categoryid', categoryId);
    return this.http.get<any>(`${environment.baseUrl}tez/FetchProductsByCategory`, { params });
  }

  searchProducts(keyword: string): Observable<any> {
    return this.http.get<any>(`${environment.baseUrl}tez/SearchProducts?keywords=${keyword}`);
  }
}
