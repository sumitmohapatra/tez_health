import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WhyTezhealthComponent } from './why-tezhealth.component';

describe('WhyTezhealthComponent', () => {
  let component: WhyTezhealthComponent;
  let fixture: ComponentFixture<WhyTezhealthComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [WhyTezhealthComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(WhyTezhealthComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
