import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ApiService } from 'src/app/api.service';
import {Formulario} from '../entities/formulario';

@Component({
  selector: 'app-formulario',
  templateUrl: './formulario.component.html',
  styleUrls: ['./formulario.component.css']
})
export class FormularioComponent implements OnInit {

  formulario: Formulario = new Formulario();

  constructor(private apiService: ApiService,
              private router: Router) { }

  ngOnInit(): void {
  }

  public onSubmit(){
    this.apiService.agregarFormulario(this.formulario)
      .subscribe(dato => {
        console.log(dato);
        this.router.navigate(['/inicio']);
      },error => console.log(error));
  }

}
