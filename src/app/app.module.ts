import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {HttpClientModule} from '@angular/common/http';

import {MatToolbarModule} from '@angular/material/toolbar'
import {MatIconModule} from '@angular/material/icon'
import {MatCardModule} from '@angular/material/card'
import {MatButtonModule} from '@angular/material/button'
import {MatProgressSpinnerModule} from '@angular/material/progress-spinner'
import {MatSelectModule} from '@angular/material/select';
import { ReactiveFormsModule } from '@angular/forms';
import {MatTableModule} from '@angular/material/table';
import { FormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { RegistroComponent } from './registro/registro.component';
import { FormularioComponent } from './formulario/formulario.component';
import { ValoracionComponent } from './valoracion/valoracion.component';
import { InicioComponent } from './inicio/inicio.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { TipsComponent } from './tips/tips.component';
import { ValoracionListComponent } from './admin/valoracion-list/valoracion-list.component';
import { FormularioListComponent } from './admin/formulario-list/formulario-list.component';
import { UsuarioListComponent } from './admin/usuario-list/usuario-list.component';
import { MenuAdmComponent } from './admin/menu-adm/menu-adm.component';

@NgModule({
  declarations: [
    AppComponent,
    RegistroComponent,
    FormularioComponent,
    ValoracionComponent,
    InicioComponent,
    TipsComponent,
    ValoracionListComponent,
    FormularioListComponent,
    UsuarioListComponent,
    MenuAdmComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    MatTableModule,
    BrowserAnimationsModule,
    MatToolbarModule,
    MatIconModule,
    MatCardModule,
    MatButtonModule,
    MatProgressSpinnerModule,
    NgbModule,
    ReactiveFormsModule,
    MatSelectModule,
    FormsModule,
  ],
  exports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    MatTableModule,
    BrowserAnimationsModule,
    MatToolbarModule,
    MatIconModule,
    MatCardModule,
    MatButtonModule,
    MatProgressSpinnerModule,
    NgbModule,
    ReactiveFormsModule,
    MatSelectModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
