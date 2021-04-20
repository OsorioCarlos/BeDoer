import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

// components
import {BoardTaskComponent} from './components/board-task/board-task.component';
import {TeamComponent} from './components/team/team.component';
import {UserProfileComponent} from './components/user-profile/user-profile.component';
import {TeamDetailsComponent} from './components/team-details/team-details.component';
import {SuggestionsComponent} from './components/suggestions/suggestions.component';
import {BoardTaskTeamComponent} from './components/board-task-team/board-task-team.component';
import {TaskBoardComponent} from './task-board.component';
import {AuthGuard} from '../../guards/auth.guard';

const routes: Routes = [
  {
    // user
    path: 'app', component: TaskBoardComponent,
    children: [
      { path: 'tareas', component: BoardTaskComponent},
      { path: 'equipos', component: TeamComponent},
      { path: 'mi-perfil', component: UserProfileComponent},
      { path: 'detalles-equipos', component: TeamDetailsComponent},
      { path: 'sugerencias', component: SuggestionsComponent},
      { path: 'tareas-equipo', component: BoardTaskTeamComponent},
      { path: '', redirectTo: 'tareas', pathMatch: 'full'},
    ], canActivate: [AuthGuard]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class TaskBoardRoutingModule { }
