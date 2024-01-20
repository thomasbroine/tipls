import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DepensesListComponent } from './components/depenses-list/depenses-list.component';
import { DepenseDetailsComponent } from './components/depense-details/depense-details.component';
import { AddDepenseComponent } from './components/add-depense/add-depense.component';

const routes: Routes = [
  { path: '', redirectTo: 'depenses', pathMatch: 'full' },
  { path: 'depenses', component: DepensesListComponent },
  { path: 'depenses/:id', component: DepenseDetailsComponent },
  { path: 'add', component: AddDepenseComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }