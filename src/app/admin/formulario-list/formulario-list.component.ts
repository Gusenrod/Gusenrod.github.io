import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ApiService } from 'src/app/api.service';
import {Formulario} from '../../entities/formulario';

@Component({
  selector: 'app-formulario-list',
  templateUrl: './formulario-list.component.html',
  styleUrls: ['./formulario-list.component.css']
})
export class FormularioListComponent implements OnInit {

  public formularios: Array<Formulario> = [];
  constructor(private apiService: ApiService,
              private router: Router) { }

  ngOnInit(): void {
    this.listarFormulario();
  }

  public listarFormulario(){
    this.apiService.listarFormularios().subscribe((data: any) => {
      this.formularios=data;
      console.log(data);
    });
  }   

  public eliminar(id: number):void{
    this.apiService.eliminarFormulario(id).subscribe(() => {
      this.listarFormulario()
    });
    //this.router.navigate(['/formulario']);
  }

}
