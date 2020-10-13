import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { BoardTaskComponent } from './components/board-task/board-task.component';
import { TeamComponent } from './components/team/team.component';
import { BoardTaskTeamComponent } from './components/board-task-team/board-task-team.component';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    BoardTaskComponent,
    TeamComponent,
    BoardTaskTeamComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
