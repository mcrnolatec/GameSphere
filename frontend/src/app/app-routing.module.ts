import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {HomeComponent} from "./components/pages/home/home.component";
import {RoulettePageComponent} from "./components/pages/roulette-page/roulette-page.component";

const routes: Routes = [
  { path: '', component: HomeComponent},
  { path: 'game/:id', component: RoulettePageComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
