import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Observable } from 'rxjs';
import { AlertComponent } from '../../../shared/components/ui/alert/alert.component';
import { AlertService, AlertState } from '../../../services/alert.service';

@Component({
  selector: 'app-alert-host',
  standalone: true,
  imports: [CommonModule, AlertComponent],
  template: `
    <ng-container *ngIf="alert$ | async as alert">
      <app-alert
        *ngIf="alert.show"
        [variant]="alert.type"
        [title]="alert.title"
        [message]="alert.message"
        [showLink]="false">
      </app-alert>
    </ng-container>
  `,
  styles: [`
    :host {
      position: fixed;
      top: 20px;
      right: 20px;
      z-index: 100000;
      max-width: 420px;
    }
  `]
})
export class AlertHostComponent {

  // 🔥 THIS LINE FIXES THE ERROR
  alert$: Observable<AlertState>;

  constructor(private alertService: AlertService) {
    this.alert$ = this.alertService.alert$;
  }
}
