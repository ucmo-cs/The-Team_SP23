import { NgModule } from '@angular/core';

import { Routes, RouterModule } from '@angular/router';

import { PDPComponent } from './pdp/pdp.component';
import { SAComponent } from './sa/sa.component';
import { PEComponent } from './pe/pe.component';

const routes: Routes = [
  { path: 'personal-dev', component: PDPComponent },
  { path: 'self-assess', component: SAComponent },
  { path: 'performance-eval', component: PEComponent},
  { path: '', redirectTo: '/personal-dev', pathMatch: 'full' },
];


@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }