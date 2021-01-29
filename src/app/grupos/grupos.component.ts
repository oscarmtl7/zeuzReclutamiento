import { Component, OnInit } from '@angular/core';
import {CdkDragDrop, moveItemInArray, transferArrayItem} from '@angular/cdk/drag-drop';
import {GruposService } from './../grupos/grupos.service';

@Component({
  selector: 'app-grupos',
  templateUrl: './grupos.component.html',
  styleUrls: ['./grupos.component.css'],
})
export class GruposComponent implements OnInit {

  buscar = '';
  descripcion='';
  grupo1: string[] = [];

  grupo2 = [
    'Phyton',
  ];
grupo3: string[] = [];

  constructor(private gruposService:GruposService) { }

  ngOnInit(): void {
    this.gruposService.getGrupo().subscribe(response =>{
       // this.grupo1 = response.data.employees as Empleado[];
       response.data.groups.forEach((element: any) => this.grupo1.push(element.id+" "+ element.name));
       console.log(response.data)
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
                        console.log(event.item.element.nativeElement)
                             this.gruposService.searchById(Number(event.item.element.nativeElement.innerText.substring(0,1))).subscribe( response => {
                               console.log(response)
                               response.data.employees.forEach(element => {

                                  console.log(element.name)
                                  this.grupo3.push(element.name)
                               });
                             });

    }
  }

}
