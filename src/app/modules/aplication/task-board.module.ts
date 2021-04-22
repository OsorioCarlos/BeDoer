import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';

// components
import {TaskBoardRoutingModule} from './task-board-routing.module';
import {BoardTaskComponent} from './components/board-task/board-task.component';
import {TeamComponent} from './components/team/team.component';
import {UserProfileComponent} from './components/user-profile/user-profile.component';
import {TeamDetailsComponent} from './components/team-details/team-details.component';
import {SuggestionsComponent} from './components/suggestions/suggestions.component';
import {BoardTaskTeamComponent} from './components/board-task-team/board-task-team.component';
import {NavbarComponent} from './Shared/navbar/navbar.component';
import {TaskBoardComponent} from './task-board.component';
import {FormsModule} from '@angular/forms';
import {TaskComponent} from './shared/task/task.component';
import {AuthGuard} from '../../guards/auth.guard';
import {HTTP_INTERCEPTORS} from '@angular/common/http';
import {TokenInterceptorService} from '../../services/authentication/token-interceptor.service';


@NgModule({
  declarations: [
    BoardTaskComponent,
    TeamComponent,
    UserProfileComponent,
    TeamDetailsComponent,
    SuggestionsComponent,
    BoardTaskTeamComponent,
    NavbarComponent,
    TaskBoardComponent,
    TaskComponent
  ],
  imports: [
    CommonModule,
    TaskBoardRoutingModule,
    FormsModule
  ],
  providers: [
    AuthGuard,
    {
      provide: HTTP_INTERCEPTORS,
      useClass: TokenInterceptorService,
      multi: true
    }
  ],
})
export class TaskBoardModule {
}
