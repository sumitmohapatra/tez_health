import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';

export type AlertType = 'success' | 'error' | 'warning' | 'info';

export interface AlertState {
  show: boolean;
  type: AlertType;
  title: string;
  message: string;
}

@Injectable({
  providedIn: 'root'
})
export class AlertService {

  private hideTimeoutId?: number;

  private alertSubject = new BehaviorSubject<AlertState>({
    show: false,
    type: 'info',
    title: '',
    message: ''
  });

  /** Public observable used by AlertHostComponent */
  readonly alert$: Observable<AlertState> = this.alertSubject.asObservable();

  showSuccess(message: string, title = 'Success') {
    this.show('success', title, message);
  }

  showError(message: string, title = 'Error') {
    this.show('error', title, message);
  }

  showWarning(message: string, title = 'Warning') {
    this.show('warning', title, message);
  }

  showInfo(message: string, title = 'Info') {
    this.show('info', title, message);
  }

  hide() {
    this.clearTimeout();
    this.alertSubject.next({
      ...this.alertSubject.value,
      show: false
    });
  }

  private show(type: AlertType, title: string, message: string) {
    this.clearTimeout();

    this.alertSubject.next({
      show: true,
      type,
      title,
      message
    });

    this.hideTimeoutId = window.setTimeout(() => {
      this.hide();
    }, 3000);
  }

  private clearTimeout() {
    if (this.hideTimeoutId) {
      clearTimeout(this.hideTimeoutId);
      this.hideTimeoutId = undefined;
    }
  }
}
