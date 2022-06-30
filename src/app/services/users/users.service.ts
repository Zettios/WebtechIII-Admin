import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class UsersService {

  constructor(private http:HttpClient) { }

  getUsers(token:string):Observable<any> {
    let url = "http://localhost:8000/api/admin/players";
    let headers = { 'Content-Type':'application/json', 'Authorization': `Bearer ${token}` };
    return this.http.get(url,{ headers })
  }
}
