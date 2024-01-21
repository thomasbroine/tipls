import { Component, OnInit } from '@angular/core';
import { DepenseService } from '../../services/depense.service';
import { Depense } from '../../models/depense.model';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-add-depense',
  templateUrl: './add-depense.component.html',
  styleUrls: ['./add-depense.component.css'],
})
export class AddDepenseComponent implements OnInit {
  depense: Depense = {
    title: '',
    amount: 1.00,
  };
  submitted = false;

  constructor(
    private depenseService: DepenseService,
    private router: Router,
    private toastr: ToastrService
  ) {}

  ngOnInit(): void {}

  saveDepense(): void {
    const data = {
      title: this.depense.title,
      amount: this.depense.amount,
    };

    this.depenseService.create(data).subscribe({
      next: (res) => {
        console.log(res);
        this.submitted = true;
        this.toastr.success('Votre dépense a bien été ajoutée !', '', {
          timeOut: 2000,
          positionClass: 'toast-top-center',
        });
        this.router.navigate(['/']);
      },
      error: (e) => {
        console.error(e);
        this.toastr.error(
          "Une erreur est survenue lors de l'ajout de votre dépense.",
          '',
          {
            timeOut: 2000,
            positionClass: 'toast-top-center',
          }
        );
      },
    });
  }

  newDepense(): void {
    this.submitted = false;
    this.depense = {
      title: '',
      amount: 1.00,
    };
  }
}
