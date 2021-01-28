import { Component, OnInit } from '@angular/core';
import {CdkDragDrop, moveItemInArray, transferArrayItem} from '@angular/cdk/drag-drop';
import {EmpleadoService } from './../empleados/empleado.service';
import { element } from 'protractor';

@Component({
  selector: 'app-grupos',
  templateUrl: './grupos.component.html',
  styleUrls: ['./grupos.component.css']
})
export class GruposComponent implements OnInit {

  buscar = '';
  grupo1: string[] = [];

  grupo2 = [
    'Pepe',
  ];

  constructor(private empleadoService:EmpleadoService) { }

  ngOnInit(): void {
    this.empleadoService.getEmpleado().subscribe(response =>{
       // this.grupo1 = response.data.employees as Empleado[];
       response.data.employees.forEach((element: any) => this.grupo1.push(element.name));
     });
  }

  drop(event: CdkDragDrop<string[]>) {
    if (event.previousContainer === event.container) {
      moveItemInArray(event.container.data, event.previousIndex, event.currentIndex);
    } else {
      transferArrayItem(event.previousContainer.data,
                        event.container.data,
                        event.previousIndex,
                        event.currentIndex);
    }
  }

}
