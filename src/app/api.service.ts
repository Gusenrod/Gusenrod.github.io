import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http'
import {environment} from 'src/environments/environment'
import { Formulario } from './entities/formulario';
import { Observable } from 'rxjs';
import { Valoracion } from './entities/valoracion';
import { Usuario } from './entities/usuario';

@Injectable({
  providedIn: 'root'
})

export class ApiService {

  private API_URL:string = environment.API_URL;

  constructor(private httpClient: HttpClient) {}

  listarValoraciones(){
    return this.httpClient.get(`${this.API_URL}/valoracion/listar`);
  }

  listarFormularios(){
    return this.httpClient.get(`${this.API_URL}/formulario/listar`);
  }

  listarUsuarios(){
    return this.httpClient.get(`${this.API_URL}/usuario/listar`);
  }


  agregarFormulario(fomulario:Formulario): Observable<any>{
    return this.httpClient.post(`${this.API_URL}/formulario`,fomulario);
  }

  eliminarFormulario(id: number){
    return this.httpClient.delete(`${this.API_URL}/formulario/${id}`)
  }

  agregarValoracion(valoracion:Valoracion): Observable<any>{
    return this.httpClient.post(`${this.API_URL}/valoracion`,valoracion);
  }

  eliminarValoracion(id: number){
    return this.httpClient.delete(`${this.API_URL}/valoracion/${id}`)
  }

  agregarUsuario(usuario:Usuario): Observable<any>{
    return this.httpClient.post(`${this.API_URL}/usuario`,usuario);
  }

  eliminarUsuario(id: number){
    return this.httpClient.delete(`${this.API_URL}/usuario/${id}`)
  }

}
