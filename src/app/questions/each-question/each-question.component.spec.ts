import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EachQuestionComponent } from './each-question.component';

describe('EachQuestionComponent', () => {
  let component: EachQuestionComponent;
  let fixture: ComponentFixture<EachQuestionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EachQuestionComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(EachQuestionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
