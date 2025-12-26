import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TezPlusComponent } from './tez-plus.component';

describe('TezPlusComponent', () => {
  let component: TezPlusComponent;
  let fixture: ComponentFixture<TezPlusComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [TezPlusComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TezPlusComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
