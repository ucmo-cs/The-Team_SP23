import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {MatDatepickerModule} from '@angular/material/datepicker';
import { AppComponent } from './app.component';
import { ComponentViewYearComponent } from './component-view-year/component-view-year.component';
import { ComponentSupporttheimprovementComponent } from './component-supporttheimprovement/component-supporttheimprovement.component';
import { ComponentSupportTheImprovementComponent } from './component-support-the-improvement/component-support-the-improvement.component';


@NgModule({
  declarations: [
    AppComponent,
    ComponentViewYearComponent,
    ComponentSupporttheimprovementComponent,
    ComponentSupportTheImprovementComponent
  ],
  imports: [
    
    BrowserModule,
    MatDatepickerModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
