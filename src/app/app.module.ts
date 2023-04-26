import { NgModule } from '@angular/core';

//Angular components and libraries
import { AppRoutingModule } from './app-routing.module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatGridListModule} from '@angular/material/grid-list';
import { MatIconModule } from '@angular/material/icon';
import { MatInputModule } from '@angular/material/input';
import { MatMenuModule } from '@angular/material/menu';
import { MatNativeDateModule } from '@angular/material/core';
import { MatSelectModule} from '@angular/material/select';
import { MatTableModule } from "@angular/material/table";
import { MatToolbarModule } from '@angular/material/toolbar';

//Pages
import { PDPComponent } from './pdp/pdp.component';
import { PdtTestComponent } from './pdp/pdt-test/pdt-test.component';
import { PEComponentAdmin } from './pe-admin/pe-admin.component';
import { PEComponent } from './pe/pe.component';
import { SAComponent } from './sa/sa.component';


//Buttons
import { AddComponent } from './buttons/add/add.component';
import { DeleteComponent } from './buttons/delete/delete.component';
import { ExportComponent } from './buttons/export/export.component';
import { SaveComponent } from './buttons/save/save.component';

//Other components
import { Header } from './header/header.component';
import { Login } from './login/login.component';
import { SelectComponent } from './select/select.component';
import { SelectComponentAdmin } from './select-admin/select-admin.component';
import { Tabs } from './tabs/tabs.component';
import { AppComponent } from './app.component';
import { ComponentViewYearComponent } from './component-view-year/component-view-year.component';
import { ComponentSupporttheimprovementComponent } from './component-supporttheimprovement/component-supporttheimprovement.component';
import { ComponentSupportTheImprovementComponent } from './component-support-the-improvement/component-support-the-improvement.component';
import { ComponentMetricsmilestonesComponent } from './component-metricsmilestones/component-metricsmilestones.component';


@NgModule({
  declarations: [
    AppComponent,
    AddComponent,
    DeleteComponent,
    ExportComponent,
    Header,
    Login,
    PDPComponent,
    PEComponentAdmin,
    PEComponent,
    PdtTestComponent,
    SAComponent,
    SaveComponent,
    SelectComponent,
    SelectComponentAdmin,
    Tabs
  ],
  imports: [
    AppRoutingModule,
    BrowserAnimationsModule,
    BrowserModule,
    FormsModule,
    HttpClientModule,
    MatButtonModule,
    MatCardModule,
    MatDatepickerModule,
    MatGridListModule,
    MatIconModule,
    MatInputModule,
    MatMenuModule,
    MatNativeDateModule,
    MatSelectModule,
    MatTableModule,
    MatToolbarModule,
    ReactiveFormsModule
    ComponentViewYearComponent,
    ComponentSupporttheimprovementComponent,
    ComponentSupportTheImprovementComponent,
    ComponentMetricsmilestonesComponent
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
