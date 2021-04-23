// dependencias de angular
import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';
import {HTTP_INTERCEPTORS, HttpClientModule} from '@angular/common/http';

// importacion del routing
import {AppRoutingModule} from './app-routing.module';

// Modulo para formularios
import {FormsModule, ReactiveFormsModule} from '@angular/forms';

// componentes de mi app
import {AppComponent} from './app.component';

// modulos de la aplicación
import {WebModule} from './modules/web/web.module';
import {TaskBoardModule} from './modules/aplication/task-board.module';

// guards
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {CommonModule} from '@angular/common';
import {notFoundComponent} from './modules/aplication/Shared/not-found/not-found.component';
import {ToastrModule} from 'ngx-toastr';
import { NgxSpinnerModule } from "ngx-spinner";


@NgModule({
  declarations: [
    AppComponent,
    notFoundComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule,
    ReactiveFormsModule,
    CommonModule,
    WebModule,
    TaskBoardModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    NgxSpinnerModule,
    ToastrModule.forRoot(),
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
}
