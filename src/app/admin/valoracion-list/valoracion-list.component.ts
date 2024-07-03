import { Component, OnInit } from '@angular/core';
import {ApiService} from '../../api.service';
import {Valoracion} from '../../entities/valoracion';

@Component({
  selector: 'app-valoracion-list',
  templateUrl: './valoracion-list.component.html',
  styleUrls: ['./valoracion-list.component.css']
})
export class ValoracionListComponent implements OnInit {

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

public eliminarValoracion(id: number){
  this.apiService.eliminarValoracion(id)
      .subscribe(() => {
        this.listarValoracion()
      });
}

}
