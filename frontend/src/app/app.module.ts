import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AddDepenseComponent } from './components/add-depense/add-depense.component';
import { DepenseDetailsComponent } from './components/depense-details/depense-details.component';
import { DepensesListComponent } from './components/depenses-list/depenses-list.component';

@NgModule({
  declarations: [
    AppComponent,
    AddDepenseComponent,
    DepenseDetailsComponent,
    DepensesListComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
