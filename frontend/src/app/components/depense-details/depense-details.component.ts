import { Component, Input, OnInit } from '@angular/core';
import { DepenseService } from '../../services/depense.service';
import { ActivatedRoute, Router } from '@angular/router';
import { Depense } from '../../models/depense.model';

@Component({
  selector: 'app-depense-details',
  templateUrl: './depense-details.component.html',
  styleUrls: ['./depense-details.component.css']
})
export class DepenseDetailsComponent implements OnInit {

  @Input() viewMode = false;

  @Input() currentDepense: Depense = {
    title: '',
    amount: 0
  };
  
  message = '';

  constructor(
    private depenseService: DepenseService,
    private route: ActivatedRoute,
    private router: Router) { }

  ngOnInit(): void {
    if (!this.viewMode) {
      this.message = '';
      this.getDepense(this.route.snapshot.params["id"]);
    }
  }

  getDepense(id: string): void {
    this.depenseService.get(id)
      .subscribe({
        next: (data) => {
          this.currentDepense = data;
          console.log(data);
        },
        error: (e) => console.error(e)
      });
  }

  // updatePublished(status: boolean): void {
  //   const data = {
  //     title: this.currentDepense.title,
  //     amount: this.currentDepense.amount,
  //     published: status
  //   };

  //   this.message = '';

  //   this.depenseService.update(this.currentDepense.id, data)
  //     .subscribe({
  //       next: (res) => {
  //         console.log(res);
  //         this.currentDepense.published = status;
  //         this.message = res.message ? res.message : 'The status was updated successfully!';
  //       },
  //       error: (e) => console.error(e)
  //     });
  // }

  updateDepense(): void {
    this.message = '';

    this.depenseService.update(this.currentDepense.id, this.currentDepense)
      .subscribe({
        next: (res) => {
          console.log(res);
          this.message = res.message ? res.message : 'This depense was updated successfully!';
        },
        error: (e) => console.error(e)
      });
  }

  deleteDepense(): void {
    this.depenseService.delete(this.currentDepense.id)
      .subscribe({
        next: (res) => {
          console.log(res);
          this.router.navigate(['/depenses']);
        },
        error: (e) => console.error(e)
      });
  }

}