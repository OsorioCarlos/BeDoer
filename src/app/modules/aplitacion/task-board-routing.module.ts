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

const routes: Routes = [
  // { path: 'sugerencias', component: SuggestionsComponent},
  // { path: 'app', component: TaskBoardComponent}
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
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class TaskBoardRoutingModule { }
