import { Component, EventEmitter, Input, Output } from '@angular/core';
import { GridShapeComponent } from "../../../shared/components/common/grid-shape/grid-shape.component";
import { Router, RouterLink } from '@angular/router';

@Component({
  selector: 'app-count-down',
  imports: [RouterLink],
  templateUrl: './count-down.component.html',
  styleUrl: './count-down.component.css'
})
export class CountDownComponent {
   value = 20;
  private timer?: number;

  constructor(private router: Router) {}

  ngOnInit() {
    this.timer = window.setInterval(() => {
      this.value--;

      if (this.value <= 0) {
        this.clearTimer();

        // this.router.navigate(['']);
      }
    }, 1000);
  }

  ngOnDestroy() {
    this.clearTimer();
  }

  private clearTimer() {
    if (this.timer) {
      clearInterval(this.timer);
      this.timer = undefined;
    }
  }
}
