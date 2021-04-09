// dependencias de angular
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';

// importacion del routing
import { AppRoutingModule } from './app-routing.module';

//Modulo para formularios
import { FormsModule } from '@angular/forms';

// componentes de mi app
import { AppComponent } from './app.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { BoardTaskComponent } from './components/board-task/board-task.component';
import { TeamComponent } from './components/team/team.component';
import { BoardTaskTeamComponent } from './components/board-task-team/board-task-team.component';
import { UserProfileComponent } from './components/user-profile/user-profile.component';
import { TeamDetailsComponent } from './components/team-details/team-details.component';
import { SuggestionsComponent } from './components/suggestions/suggestions.component';

// Servicios
import { StateService } from './services/state.service';
import {TeamService } from './services/team.service'

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    BoardTaskComponent,
    TeamComponent,
    BoardTaskTeamComponent,
    UserProfileComponent,
    TeamDetailsComponent,
    SuggestionsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [
    TeamService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
