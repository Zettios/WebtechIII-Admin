import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from "@angular/common/http";
import { RouterModule } from '@angular/router';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './components/login/login.component';
import { AdminComponent } from './components/admin/admin.component';
import { ApiChartComponent } from './components/api-chart/api-chart.component';
import {Ng2GoogleChartsModule} from "ng2-google-charts";

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    AdminComponent,
    ApiChartComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    Ng2GoogleChartsModule,
    RouterModule.forRoot([
      {path:'', component: LoginComponent},
      {path:'admin', component: AdminComponent},
    ])
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
