import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { HomeComponent } from './Components/home/home.component';
import { CounterComponent } from './Components/counter/counter.component';
import { FetchDataComponent } from './Components/fetch-data/fetch-data.component';
import { PosteexampleComponent } from './Components/posteexample/posteexample.component';
import { DashboardTilesComponent } from './Components/dashboard-tiles/dashboard-tiles.component';
import { DashboardHolderComponent } from './Components/dashboard-tiles/dashboard/dashboard-holder/dashboard-holder.component';
import { CaseDetailsComponent } from './Components/dashboard-tiles/case-details/case-details.component';

const routes: Routes = [
    { path: '', component: HomeComponent, pathMatch: 'full' },
    { path: 'counter', component: CounterComponent },
    { path: 'fetch-data', component: FetchDataComponent },
    { path: 'Post-data', component: PosteexampleComponent },
    { path: 'dashboard', component: DashboardTilesComponent },
    { path: 'dashboard-details', component: CaseDetailsComponent },
  ];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }