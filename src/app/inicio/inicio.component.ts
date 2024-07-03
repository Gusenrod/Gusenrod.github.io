import { Component, OnInit } from '@angular/core';
import { ApiService } from '../api.service';
import { Valoracion } from '../entities/valoracion';

@Component({
  selector: 'app-inicio',
  templateUrl: './inicio.component.html',
  styleUrls: ['./inicio.component.css']
})
export class InicioComponent implements OnInit {

  public valoraciones: Array<Valoracion> = [];
  constructor(private apiService: ApiService) { }

  ngOnInit(): void {
    this.listarValoracion();
  }

  public listarValoracion(){
    this.apiService.listarValoraciones().subscribe((data: any) => {
      this.valoraciones=data;
      console.log(data);
    });
  }
}
