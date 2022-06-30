import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from "@angular/common/http";
import { RouterModule } from '@angular/router';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './components/login/login.component';
import { AdminComponent } from './components/admin/admin.component';
import { AggregateComponent } from './components/aggregate/aggregate.component';
import { PieChartComponent } from './components/pie-chart/pie-chart.component';
import {NgChartsModule} from "ng2-charts";
import {UserComponent} from "./components/user/user.component";
import { NavbarComponent } from './components/navbar/navbar.component';
import {Ng2GoogleChartsModule} from "ng2-google-charts";

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    AdminComponent,
    AggregateComponent,
    PieChartComponent,
    UserComponent,
    NavbarComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    RouterModule.forRoot([
      {path: '', component: LoginComponent},
      {path: 'admin', component: AdminComponent},
    ]),
    Ng2GoogleChartsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
