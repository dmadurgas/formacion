import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { InicioComponent } from './inicio/inicio.component';
import { UsuarioComponent } from './usuario/usuario.component';

const routes: Routes = [
  { path: '', redirectTo: '/inicio', pathMatch: 'full' },
  { path: 'inicio', component: InicioComponent },
  { path: 'usuario/:nombre', component: UsuarioComponent}
];

@NgModule({
  imports: [ RouterModule.forRoot(routes)],
exports: [ RouterModule ]
})
export class AppRoutingModule { }
