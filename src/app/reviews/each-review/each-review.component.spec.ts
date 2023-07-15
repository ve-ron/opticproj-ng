import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EachReviewComponent } from './each-review.component';

describe('EachReviewComponent', () => {
  let component: EachReviewComponent;
  let fixture: ComponentFixture<EachReviewComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EachReviewComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(EachReviewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
