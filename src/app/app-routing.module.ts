import { NgModule } from '@angular/core';

import { Routes, RouterModule } from '@angular/router';

import { Login } from './login/login.component';
import { PDPComponent } from './pdp/pdp.component';
import { PEComponent } from './pe/pe.component';
import { SAComponent } from './sa/sa.component';
import { Tabs } from './tabs/tabs.component';

const routes: Routes = [
  { path: 'login', component: Login},
  { path: 'home', component: Tabs, 
        children: [
          { path: 'personal-dev', component: PDPComponent },
          { path: 'self-assess', component: SAComponent },
          { path: 'performance-eval', component: PEComponent},
          { path: '', redirectTo: 'personal-dev', pathMatch: 'full' }
        ]},
  { path: '', redirectTo: '/login', pathMatch: 'full' },
];


@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }