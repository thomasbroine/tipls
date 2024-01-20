import { Component, OnInit } from '@angular/core';
import { Depense } from '../../models/depense.model';
import { DepenseService } from '../../services/depense.service';

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

  constructor(private depenseService: DepenseService) { }

  ngOnInit(): void {
    this.retrieveDepenses();
  }

  retrieveDepenses(): void {
    this.depenseService.getAll()
      .subscribe({
        next: (data) => {
          this.depenses = data;
          console.log(data);
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
    this.currentDepense = {};
    this.currentIndex = -1;

    this.depenseService.findByTitle(this.title)
      .subscribe({
        next: (data) => {
          this.depenses = data;
          console.log(data);
        },
        error: (e) => console.error(e)
      });
  }

}