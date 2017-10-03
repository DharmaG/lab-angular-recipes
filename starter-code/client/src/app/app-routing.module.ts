import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { HomeComponent } from './pages/home/home.component';
import { DetailsComponent } from './pages/details/details.component';
// import { NotFoundComponent } from './pages/not-found/not-found.component';

const routes: Routes = [
  { path: '',               component: HomeComponent},
  { path: 'dish/:dishId', component: DetailsComponent }
  // { path: '**',             component: NotFoundComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
