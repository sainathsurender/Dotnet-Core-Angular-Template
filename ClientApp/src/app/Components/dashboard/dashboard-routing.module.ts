import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CaseDetailsComponent } from './case-details/case-details.component';

import { DashboardComponent } from './dashboard.component';
import { FileUploadComponent } from './file-upload/file-upload.component';

const routes: Routes = [
  { path: '', component: DashboardComponent },
  { path: 'dashboard-details/:id', component: CaseDetailsComponent },
  { path: 'FileUpload', component: FileUploadComponent },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class DashboardRoutingModule { }
