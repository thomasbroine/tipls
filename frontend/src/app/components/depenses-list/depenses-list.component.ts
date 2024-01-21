import { Component, OnInit } from '@angular/core';
import { Depense } from '../../models/depense.model';
import { DepenseService } from '../../services/depense.service';
import { Observable, Subscription } from 'rxjs';

@Component({
  selector: 'app-depenses-list',
  templateUrl: './depenses-list.component.html',
  styleUrls: ['./depenses-list.component.css']
})
export class DepensesListComponent implements OnInit {

  depenses?: Depense[];
  currentDepense: Depense = {};
  currentIndex = -1;
  title = '';
  isEmpty = false;
  depensesSubscription?: Subscription;

  constructor(private depenseService: DepenseService) { }

  ngOnInit(): void {
    this.depensesSubscription = this.depenseService.depenses$.subscribe(depenses => {
      this.depenses = depenses;
      this.isEmpty = depenses.length === 0;
    });
    this.retrieveDepenses();
  }

  ngOnDestroy(): void {
    this.depensesSubscription?.unsubscribe();
  }

  retrieveDepenses(): void {
    this.depenseService.getAll()
      .subscribe({
        next: (data) => {
          this.depenses = data;
          console.log(data);
          this.isEmpty = data.length === 0;
        },
        error: (e) => console.error(e)
      });
  }

  refreshList(): void {
    this.retrieveDepenses();
    this.currentDepense = {};
    this.currentIndex = -1;
  }

  setActiveDepense(depense: Depense, index: number): void {
    this.currentDepense = depense;
    this.currentIndex = index;
  }

  removeAllDepenses(): void {
    this.depenseService.deleteAll()
      .subscribe({
        next: (res) => {
          console.log(res);
          this.refreshList();
        },
        error: (e) => console.error(e)
      });
  }

  searchTitle(): void {
    this.depenseService.findByTitle(this.title)
      .subscribe({
        next: (data) => {
          this.depenses = data;
          this.isEmpty = data.length === 0; // Mise à jour de la propriété isEmpty
          console.log(data);
        },
        error: (e) => console.error(e)
      });
  }

  clearSearch(): void {
    this.title = '';
    this.retrieveDepenses();
  }

}