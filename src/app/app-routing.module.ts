import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

// componentes
import { BoardTaskTeamComponent } from './components/board-task-team/board-task-team.component';
import { BoardTaskComponent } from './components/board-task/board-task.component';
import { TeamComponent } from './components/team/team.component';
import { UserProfileComponent } from './components/user-profile/user-profile.component';
import {TeamDetailsComponent} from './components/team-details/team-details.component';
import { SuggestionsComponent } from './components/suggestions/suggestions.component';

const routes: Routes = [
  {path: 'user/tareas', component: BoardTaskComponent},
  {path: 'user/equipos', component: TeamComponent},
  {path: 'user/mi-perfil', component: UserProfileComponent},
  {path: 'team/tareas', component: BoardTaskTeamComponent},
  {path: 'user/detalles-equipos', component:TeamDetailsComponent},
  {path: 'user/sugerencias', component:SuggestionsComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes, { relativeLinkResolution: 'legacy' })],
  exports: [RouterModule]
})
export class AppRoutingModule { }