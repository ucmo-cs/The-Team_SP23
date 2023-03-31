import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { SaveComponent } from './save/save.component';
import { ExportComponent } from './export/export.component';
import { DeleteComponent } from './delete/delete.component';
import { AddComponent } from './add/add.component';

@NgModule({
  declarations: [
    SaveComponent,
    ExportComponent,
    DeleteComponent,
    AddComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
