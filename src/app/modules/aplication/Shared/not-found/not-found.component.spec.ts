import { ComponentFixture, TestBed } from '@angular/core/testing';

import { notFoundComponent } from './not-found.component';

describe('notFoundComponent', () => {
  let component: notFoundComponent;
  let fixture: ComponentFixture<notFoundComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ notFoundComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(notFoundComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
