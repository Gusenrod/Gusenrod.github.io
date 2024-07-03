import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ApiService } from '../api.service';
import { Usuario } from '../entities/usuario';
import { Valoracion } from '../entities/valoracion';

@Component({
  selector: 'app-valoracion',
  templateUrl: './valoracion.component.html',
  styleUrls: ['./valoracion.component.css']
})
export class ValoracionComponent implements OnInit {

  public valoracion: Array<Usuario> = [];
  datos: Valoracion = new Valoracion;

  constructor(private apiService: ApiService,
              private router: Router) { }

  ngOnInit(): void {
    this.ListarValoracion();
  }

  public ListarValoracion(){
    this.apiService.listarValoraciones().subscribe((data: any) => {
        this.valoracion=data;
        console.log(data);
    });
  }

  public addValoracion(){
    this.apiService.agregarValoracion(this.datos)
        .subscribe(data => {
          console.log(data);
          this.router.navigate(['/inicio']);
        }, error => console.log(error));
  }

}
