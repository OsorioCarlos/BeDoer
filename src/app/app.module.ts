// dependencias de angular
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

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

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    BoardTaskComponent,
    TeamComponent,
    BoardTaskTeamComponent,
    UserProfileComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
