import { Injectable } from '@angular/core';
import { Observable } from "rxjs";
import { HttpClient } from "@angular/common/http";

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  constructor(private http:HttpClient) { }

  login(username:string, password:string):Observable<any> {
    let url = "http://localhost:8000/api/login_check";
    let body = '{"username":"'+username+'","password":"'+password+'"}';
    const headers = { 'Content-Type': 'application/json;charset=utf-8' };
    return this.http.post(url, body, { headers })
  }
}
