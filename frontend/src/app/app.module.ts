import { NgModule } from '@angular/core';
import { BrowserModule, provideClientHydration } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './components/partials/header/header.component';
import { HomeComponent } from './components/pages/home/home.component';
import { RoulettePageComponent } from './components/pages/roulette-page/roulette-page.component';
import {HttpClientModule} from "@angular/common/http";
import { RouletteTableComponent } from './components/partials/roulette-table/roulette-table.component';
import { LoginPageComponent } from './components/pages/login-page/login-page.component';
import { RegistrationPageComponent } from './components/pages/registration-page/registration-page.component';
import { LeaderboardsPageComponent } from './components/pages/leaderboards-page/leaderboards-page.component';
import { DashboardPageComponent } from './components/pages/dashboard-page/dashboard-page.component';
import { ProfilePageComponent } from './components/pages/profile-page/profile-page.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    HomeComponent,
    RoulettePageComponent,
    RouletteTableComponent,
    LoginPageComponent,
    RegistrationPageComponent,
    LeaderboardsPageComponent,
    DashboardPageComponent,
    ProfilePageComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [
    provideClientHydration()
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
