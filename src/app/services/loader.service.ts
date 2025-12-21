import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class LoaderService {
   private loadingCount = 0;
  private loading$ = new BehaviorSubject<boolean>(false);

  readonly isLoading$ = this.loading$.asObservable();

  show() {
    this.loadingCount++;
    Promise.resolve().then(() => {
      this.loading$.next(true);
    });
  }

  hide() {
    this.loadingCount--;
    if (this.loadingCount <= 0) {
      this.loadingCount = 0;
      Promise.resolve().then(() => {
        this.loading$.next(false);
      });
    }
  }
}
