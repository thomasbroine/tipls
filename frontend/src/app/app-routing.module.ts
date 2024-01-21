import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DepensesListComponent } from './components/depenses-list/depenses-list.component';
import { DepenseDetailsComponent } from './components/depense-details/depense-details.component';
import { AddDepenseComponent } from './components/add-depense/add-depense.component';
import { HomeComponent } from './components/home/home.component'; // Import HomeComponent

const routes: Routes = [
  { path: '', redirectTo: 'home', pathMatch: 'full' },
  { path: 'depenses', component: DepensesListComponent },
  { path: 'depenses/:id', component: DepenseDetailsComponent },
  { path: 'add', component: AddDepenseComponent },
  { path: 'home', component: HomeComponent } // Add route to HomeComponent
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }