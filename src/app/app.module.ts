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
import {AuthGuard} from './guards/auth.guard';
import {TokenInterceptorService} from './services/authentication/token-interceptor.service';


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
  // providers: [
  //   AuthGuard,
  //   {
  //     provide: HTTP_INTERCEPTORS,
  //     useClass: TokenInterceptorService,
  //     multi: true
  //   }
  // ],
  bootstrap: [AppComponent]
})
export class AppModule {
}
