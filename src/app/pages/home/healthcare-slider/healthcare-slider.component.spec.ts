import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HealthcareSliderComponent } from './healthcare-slider.component';

describe('HealthcareSliderComponent', () => {
  let component: HealthcareSliderComponent;
  let fixture: ComponentFixture<HealthcareSliderComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [HealthcareSliderComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(HealthcareSliderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
