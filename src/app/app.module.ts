// dependencias de angular
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';

// importacion del routing
import { AppRoutingModule } from './app-routing.module';

// Modulo para formularios
import {FormsModule, ReactiveFormsModule} from '@angular/forms';

// componentes de mi app
import { AppComponent } from './app.component';
import {WebModule} from './modules/web/web.module';
import {TaskBoardModule} from './modules/aplitacion/task-board.module';

@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule,
    ReactiveFormsModule,
    WebModule,
    TaskBoardModule,
    AppRoutingModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
