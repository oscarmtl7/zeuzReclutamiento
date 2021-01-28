import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';
import {Empleado} from './empleado';
import { EmpleadoService } from './empleado.service'
import { Router, ActivatedRoute } from '@angular/router';


@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./empleados.component.css']
})
export class FormComponent implements OnInit {


    public titulo: string = "Crear Cliente"
    public errores: String[];

  profileForm = new FormGroup({
     name: new FormControl(''),
     last_name: new FormControl(''),
     birthday: new FormControl(''),


   });
  constructor(private empleadoService: EmpleadoService,
          private router: Router,
          private activatedRoute: ActivatedRoute) { }

   empleado: Empleado[];

  ngOnInit(): void {

  }

  onSubmit(){
     console.warn(this.profileForm.value);
        this.empleadoService.create(this.profileForm.value)
    .subscribe(empleado => {
      this.router.navigate(['/empleados'])
      console.log('Nuevo cliente', `El cliente ${empleado.nombre} ha sido creado con éxito`, 'success')
    },
    err => {
      this.errores = err.error.errors as string[];
      console.error('Código del error desde el backend: ' + err.status);
      console.error(err.error.errors)
    }
    );
  }

}
