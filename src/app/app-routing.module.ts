import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {notFoundComponent} from './modules/aplication/Shared/not-found/not-found.component';


const routes: Routes = [
  {path: '**', component: notFoundComponent, pathMatch: 'full'},
];

@NgModule({
  imports: [RouterModule.forRoot(routes, { relativeLinkResolution: 'legacy' })],
  exports: [RouterModule]
})
export class AppRoutingModule { }
