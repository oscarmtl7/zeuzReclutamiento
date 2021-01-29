import { Component, OnInit } from '@angular/core';
import {CdkDragDrop, moveItemInArray, transferArrayItem} from '@angular/cdk/drag-drop';
import {GruposService } from './../grupos/grupos.service';
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
    'Phyton',
  ];

  constructor(private gruposService:GruposService) { }

  ngOnInit(): void {
    this.gruposService.getGrupo().subscribe(response =>{
       // this.grupo1 = response.data.employees as Empleado[];
       response.data.groups.forEach((element: any) => this.grupo1.push(element.name));
     });

  }

  drop(event: CdkDragDrop<string[]>) {
    console.log("esto:",event)
    if (event.previousContainer === event.container) {
      moveItemInArray(event.container.data, event.previousIndex, event.currentIndex);


    } else {
      transferArrayItem(event.previousContainer.data,
                        event.container.data,
                        event.previousIndex,
                        event.currentIndex);
                             this.gruposService.searchById(2).subscribe( response => {
                               console.log(response);
                             });

    }
  }

}
