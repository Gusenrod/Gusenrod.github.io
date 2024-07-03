import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ApiService } from 'src/app/api.service';
import {Usuario} from '../entities/usuario';

@Component({
  selector: 'app-registro',
  templateUrl: './registro.component.html',
  styleUrls: ['./registro.component.css']
})
export class RegistroComponent implements OnInit {

  usuario: Usuario = new Usuario();

  constructor(private apiService: ApiService,
              private router: Router) { }

  ngOnInit(): void {
  }

  public onSubmit(){
    this.apiService.agregarUsuario(this.usuario)
      .subscribe(dato => {
        console.log(dato);
        this.router.navigate(['/inicio']);
      },error => console.log(error));
  }

}
