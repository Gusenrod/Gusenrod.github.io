import { Component, OnInit } from '@angular/core';
import { ApiService } from 'src/app/api.service';
import { Usuario } from 'src/app/entities/usuario';
import { Valoracion } from 'src/app/entities/valoracion';

@Component({
  selector: 'app-usuario-list',
  templateUrl: './usuario-list.component.html',
  styleUrls: ['./usuario-list.component.css']
})
export class UsuarioListComponent implements OnInit {

  public usuarios: Array<Usuario> = [];
  constructor(private apiService: ApiService) { }

  ngOnInit(): void {
    this.listarUsuarios();
  }

  public listarUsuarios(){
    this.apiService.listarUsuarios().subscribe((data: any) => {
      this.usuarios=data;
      console.log(data);
    });
  }

  public eliminarUsuario(id: number){
    this.apiService.eliminarUsuario(id)
        .subscribe(() => {
          this.listarUsuarios()
        });
  }

}
