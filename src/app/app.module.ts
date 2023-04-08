import { NgModule } from '@angular/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { BrowserModule } from '@angular/platform-browser';

import { MatGridListModule} from '@angular/material/grid-list';
import { MatIconModule } from '@angular/material/icon';
import { MatMenuModule } from '@angular/material/menu';
import { MatTableModule } from "@angular/material/table";
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatInputModule } from '@angular/material/input';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { MatButtonModule } from '@angular/material/button';
import { MatSelectModule} from '@angular/material/select';
import { MatCardModule } from '@angular/material/card';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatNativeDateModule } from '@angular/material/core';

import { Header } from './header/header.component';
import { Login } from './login/login.component';
import { Tabs } from './tabs/tabs.component';
import { SaveComponent } from './save/save.component';
import { ExportComponent } from './export/export.component';
import { DeleteComponent } from './delete/delete.component';
import { AddComponent } from './add/add.component';

import { AppComponent } from './app.component';

import { PdtTestComponent } from './pdt-test/pdt-test.component';
import { SelectComponent } from './select/select.component';
import { PDPComponent } from './pdp/pdp.component';
import { SAComponent } from './sa/sa.component';
import { PEComponent } from './pe/pe.component';
import { AppRoutingModule } from './app-routing.module';
import { ComponentBiggesttakeawayComponent } from './component-biggesttakeaway/component-biggesttakeaway.component';
import { ComponentBarriersorhurdlesComponent } from './component-barriersorhurdles/component-barriersorhurdles.component';
import { ComponentImproveyourperformanceComponent } from './component-improveyourperformance/component-improveyourperformance.component';
import { FeedbackComponent } from './component-thoughts/feedback/feedback.component';
import { ComponentHoldYourselfAccountableComponent } from './component-hold-yourself-accountable/component-hold-yourself-accountable.component';
import { ComponentDescribeAHardTaskComponent } from './component-describe-a-hard-task/component-describe-a-hard-task.component';
import { ComponentLeadershipCouldImproveComponent } from './component-leadership-could-improve/component-leadership-could-improve.component';
import { ComponentMainGoalForThisYearComponent } from './component-main-goal-for-this-year/component-main-goal-for-this-year.component';
import { ComponentAreasWouldYouLikeComponent } from './component-areas-would-you-like/component-areas-would-you-like.component';

@NgModule({
  declarations: [
    AppComponent,
    AddComponent,
    SaveComponent,
    ExportComponent,
    DeleteComponent,
    Header,
    Login,
    Tabs,
    PdtTestComponent,
    SelectComponent,
    PDPComponent,
    SAComponent,
    PEComponent,
    ComponentBiggesttakeawayComponent,
    ComponentBarriersorhurdlesComponent,
    ComponentImproveyourperformanceComponent,
    FeedbackComponent,
    ComponentHoldYourselfAccountableComponent,
    ComponentDescribeAHardTaskComponent,
    ComponentLeadershipCouldImproveComponent,
    ComponentMainGoalForThisYearComponent,
    ComponentAreasWouldYouLikeComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    MatInputModule,
    MatTableModule,
    BrowserAnimationsModule,
    MatSelectModule,
    MatInputModule,
    MatCardModule,
    MatGridListModule,
    MatIconModule,
    MatMenuModule,
    MatToolbarModule,
    MatButtonModule,
    HttpClientModule,
    AppRoutingModule,
    MatDatepickerModule,
    MatNativeDateModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
