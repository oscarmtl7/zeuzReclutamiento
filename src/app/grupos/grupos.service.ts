import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable, } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class GruposService {

    private urlEndPoint:string = 'https://6edeayi7ch.execute-api.us-east-1.amazonaws.com/v1/examen/groups/oscar_montiel';
    private httpHeaders= new HttpHeaders({'Content-Type': 'application/json;charset=utf-8'})
    private urlEndPoint2:string = 'https://6edeayi7ch.execute-api.us-east-1.amazonaws.com/v1/examen/employees/oscar_montiel/getByGroup?id=';

    constructor(private http: HttpClient ) {}

    getGrupo():Observable<any>{
      return this.http.get(this.urlEndPoint);
    }

    searchById(id:number):Observable<any>{
      return this.http.get(this.urlEndPoint2 +id);
    }
}
