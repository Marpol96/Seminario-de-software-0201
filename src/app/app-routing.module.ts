import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { InicioComponent } from './inicio/inicio.component';
import { PeliculasComponent } from './peliculas/peliculas.component';
import { JuegosComponent } from './juegos/juegos.component';
import { LoginComponent } from './login/login.component';
import { RegistroClienteComponent } from './registro-cliente/registro-cliente.component';
import { FacturaComponent } from './factura/factura.component';

const routes: Routes = [
  {path: 'login', component: LoginComponent},
  {path:'Inicio', component: InicioComponent },
  {path: '', redirectTo:'/login', pathMatch: 'full'},
  {path:'Peliculas', component: PeliculasComponent},
  {path:'Juegos', component: JuegosComponent},
  {path:'Registro', component: RegistroClienteComponent},
  {path:'Factura', component: FacturaComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
