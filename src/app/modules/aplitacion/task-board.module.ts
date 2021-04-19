import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

// components
import { TaskBoardRoutingModule } from './task-board-routing.module';
import {BoardTaskComponent} from './components/board-task/board-task.component';
import {TeamComponent} from './components/team/team.component';
import {UserProfileComponent} from './components/user-profile/user-profile.component';
import {TeamDetailsComponent} from './components/team-details/team-details.component';
import {SuggestionsComponent} from './components/suggestions/suggestions.component';
import {BoardTaskTeamComponent} from './components/board-task-team/board-task-team.component';
import {NavbarComponent} from './Shared/navbar/navbar.component';
import { TaskBoardComponent } from './task-board.component';
import {FormsModule} from '@angular/forms';


@NgModule({
  declarations: [
    BoardTaskComponent,
    TeamComponent,
    UserProfileComponent,
    TeamDetailsComponent,
    SuggestionsComponent,
    BoardTaskTeamComponent,
    NavbarComponent,
    TaskBoardComponent
  ],
    imports: [
        CommonModule,
        TaskBoardRoutingModule,
        FormsModule
    ]
})
export class TaskBoardModule { }
