import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BoardTaskTeamComponent } from './board-task-team.component';

describe('BoardTaskTeamComponent', () => {
  let component: BoardTaskTeamComponent;
  let fixture: ComponentFixture<BoardTaskTeamComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BoardTaskTeamComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(BoardTaskTeamComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
