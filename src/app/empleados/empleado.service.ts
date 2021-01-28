import { Injectable, OnInit } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Empleado } from './empleado';
import {of, Observable, throwError} from 'rxjs';
import { Router } from '@angular/router';
import { map, catchError, tap } from 'rxjs/operators';




@Injectable()
export class EmpleadoService {


  private urlEndPoint:string = 'https://6edeayi7ch.execute-api.us-east-1.amazonaws.com/v1/examen/employees/oscar_monntiel';
  private httpHeaders= new HttpHeaders({'Content-Type': 'application/json;charset=utf-8'})


  constructor(private http: HttpClient) {}

  getEmpleado():Observable<any>{
    return this.http.get<Empleado[]>(this.urlEndPoint);
  }

  create(empleado: Empleado) : Observable<any>{
    return this.http.post(this.urlEndPoint, empleado, {headers: this.httpHeaders}).pipe(
      catchError(e=>{
         if(e.status==400){
           return throwError(e);
         }

        console.error(e.error.mensaje);
        return throwError(e);
      })
    );
  }


}
