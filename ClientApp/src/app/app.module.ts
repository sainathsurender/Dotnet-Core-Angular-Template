import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule,ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from "./app-routing.module";

import { AppComponent } from './app.component';
import { NavMenuComponent } from './Shared/nav-menu/nav-menu.component';
import { HomeComponent } from './Components/home/home.component';
import { CounterComponent } from './Components/counter/counter.component';
import { FetchDataComponent } from './Components/fetch-data/fetch-data.component';
import { HttpService } from "./Services/http.service";
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { ConsentComponent } from './Shared/consent/consent.component';
import { PosteexampleComponent } from './Components/posteexample/posteexample.component';
import { DashboardTilesComponent } from './Components/dashboard-tiles/dashboard-tiles.component';

@NgModule({
  declarations: [
    AppComponent,
    NavMenuComponent,
    HomeComponent,
    CounterComponent,
    FetchDataComponent,
    ConsentComponent,
    PosteexampleComponent,
    DashboardTilesComponent
  ],
  imports: [
    BrowserModule.withServerTransition({ appId: 'ng-cli-universal' }),
    HttpClientModule,
    FormsModule,
    AppRoutingModule,
    NgbModule,
    ReactiveFormsModule
  ],
  providers: [HttpService],
  bootstrap: [AppComponent],
  entryComponents: [ConsentComponent]
})
export class AppModule { }
