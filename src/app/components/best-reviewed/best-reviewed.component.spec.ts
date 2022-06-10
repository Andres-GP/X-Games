import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BestReviewedComponent } from './best-reviewed.component';

describe('BestReviewedComponent', () => {
  let component: BestReviewedComponent;
  let fixture: ComponentFixture<BestReviewedComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BestReviewedComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(BestReviewedComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
