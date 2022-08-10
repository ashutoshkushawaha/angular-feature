import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ArnavComponent } from './arnav/arnav.component';
import { AshutoshComponent } from './ashutosh/ashutosh.component';

const routes: Routes = [
  { path: "parent", component: AshutoshComponent },
  { path: "child", component: ArnavComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
