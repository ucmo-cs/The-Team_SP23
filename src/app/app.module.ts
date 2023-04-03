import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {MatDatepickerModule} from '@angular/material/datepicker';
import { AppComponent } from './app.component';
import { ComponentViewYearComponent } from './component-view-year/component-view-year.component';


@NgModule({
  declarations: [
    AppComponent,
    ComponentViewYearComponent
  ],
  imports: [
    
    BrowserModule,
    MatDatepickerModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
