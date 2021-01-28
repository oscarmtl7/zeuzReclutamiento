import { Component, OnInit } from '@angular/core';
import {EmpleadoService } from './empleado.service';
import {Empleado} from './empleado';
import { tap } from 'rxjs/operators';


@Component({
  selector: 'app-empleados',
  templateUrl: './empleados.component.html',
  styleUrls: ['./empleados.component.css']
})
export class EmpleadosComponent implements OnInit {
  buscar = '';
  empleados: Empleado[] = [];
  constructor(private empleadoService:EmpleadoService) { }
  filterPost='';
  page:number;

  ngOnInit(

  ){
    this.empleadoService.getEmpleado().pipe(
        tap(response => {
          console.log('ClienteComponenet: tap 3');
          console.log(response.data.employees);
          (response.data.employees as Empleado[]).forEach( empleado => console.log(empleado));

        })
      ).subscribe(response =>{
         this.empleados = response.data.employees as Empleado[];
       });
  }

}
