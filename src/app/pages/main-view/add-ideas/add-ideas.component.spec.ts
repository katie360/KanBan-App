import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddIdeasComponent } from './add-ideas.component';

describe('AddIdeasComponent', () => {
  let component: AddIdeasComponent;
  let fixture: ComponentFixture<AddIdeasComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [AddIdeasComponent]
    });
    fixture = TestBed.createComponent(AddIdeasComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
