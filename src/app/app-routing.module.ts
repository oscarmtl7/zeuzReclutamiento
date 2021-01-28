import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

/*Components*/
import { HomeComponent } from './home/home.component';
import { EmpleadosComponent } from './empleados/empleados.component';
import {FormComponent} from './empleados/form.component';
import {GruposComponent} from './grupos/grupos.component';
const routes: Routes = [
  {path: 'home', component:HomeComponent},
  {path: 'empleados', component:EmpleadosComponent},
  {path: 'grupos', component:GruposComponent},
  {path: 'empleados/form/form', component:FormComponent},
  {path: '**', redirectTo: 'home'},


];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
