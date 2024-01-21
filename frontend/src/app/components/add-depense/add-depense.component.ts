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
  // Initialisation de l'objet dépense
  depense: Depense = {
    title: '',
    amount: 1.0,
    date: new Date(),
  };
  // Variable pour contrôler l'affichage du formulaire
  submitted = false;

  // Injection des services nécessaires dans le constructeur
  constructor(
    private depenseService: DepenseService,
    private router: Router,
    private toastr: ToastrService
  ) {}

  // Méthode d'initialisation du composant
  ngOnInit(): void {}

  // Méthode pour sauvegarder une dépense
  saveDepense(): void {
    // Préparation des données de la dépense
    const data = {
      title: this.depense.title,
      amount: this.depense.amount,
      date: this.depense.date,
    };
    console.log(data);

    // Appel du service pour créer une dépense
    this.depenseService.create(data).subscribe({
      next: (res) => {
        console.log(res);
        // Passage de la variable submitted à true pour cacher le formulaire
        this.submitted = true;
        // Affichage d'un message de succès
        this.toastr.success('Votre dépense a bien été ajoutée !', '', {
          timeOut: 2000,
          positionClass: 'toast-top-center',
        });
        // Redirection vers la page des dépenses
        this.router.navigate(['/depenses']);
      },
      error: (e) => {
        console.error(e);
        // Affichage d'un message d'erreur
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

  // Méthode pour réinitialiser le formulaire
  newDepense(): void {
    this.submitted = false;
    this.depense = {
      title: '',
      amount: 1.0,
    };
  }
}
