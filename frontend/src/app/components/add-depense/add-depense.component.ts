import { Component, OnInit } from '@angular/core';
import { DepenseService } from '../../services/depense.service';
import { Depense } from '../../models/depense.model';



@Component({
  selector: 'app-add-depense',
  templateUrl: './add-depense.component.html',
  styleUrls: ['./add-depense.component.css']
})
export class AddDepenseComponent implements OnInit {

  depense: Depense = {
    title: '',
    amount: 0
  };
  submitted = false;

  constructor(private depenseService: DepenseService) { }

  ngOnInit(): void {
  }

  saveDepense(): void {
    const data = {
      title: this.depense.title,
      amount: this.depense.amount
    };

    this.depenseService.create(data)
      .subscribe({
        next: (res) => {
          console.log(res);
          this.submitted = true;
        },
        error: (e) => console.error(e)
      });
  }

  newDepense(): void {
    this.submitted = false;
    this.depense = {
      title: '',
      amount: 0
    };
  }

}