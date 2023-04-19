import { NgModule } from '@angular/core';

import { Routes, RouterModule } from '@angular/router';

import { Login } from './login/login.component';
import { PDPComponent } from './pdp/pdp.component';
import { PEComponent } from './pe/pe.component';
import { PEComponentAdmin } from './pe-admin/pe-admin.component';
import { SAComponent } from './sa/sa.component';
import { Tabs } from './tabs/tabs.component';
import { PdtTestComponent } from './pdp/pdt-test/pdt-test.component';

const routes: Routes = [
  { path: 'login', component: Login},
  { path: 'home', component: Tabs,
        children: [
          { path: 'personal-dev', component: PdtTestComponent },
          { path: 'self-assess', component: SAComponent },
          { path: 'performance-eval', component: PEComponent},
          { path: 'performance-eval-admin', component: PEComponentAdmin},
          { path: '', redirectTo: 'personal-dev', pathMatch: 'full' }
        ]},
  { path: '', redirectTo: '/login', pathMatch: 'full' },
];


@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
