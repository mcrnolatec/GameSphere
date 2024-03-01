import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {HomeComponent} from "./components/pages/home/home.component";
import {RoulettePageComponent} from "./components/pages/roulette-page/roulette-page.component";
import {LoginPageComponent} from "./components/pages/login-page/login-page.component";
import {LeaderboardsPageComponent} from "./components/pages/leaderboards-page/leaderboards-page.component";
import {ProfilePageComponent} from "./components/pages/profile-page/profile-page.component";
import {DashboardPageComponent} from "./components/pages/dashboard-page/dashboard-page.component";

const routes: Routes = [
  { path: '', component: HomeComponent},
  { path: 'game/:id', component: RoulettePageComponent},
  { path: 'login', component: LoginPageComponent},
  { path: 'leaderboards', component: LeaderboardsPageComponent},
  { path: 'profile', component: ProfilePageComponent},
  { path: 'dashboard', component: DashboardPageComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
