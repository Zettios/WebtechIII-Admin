import { Injectable } from '@angular/core';
import { Observable } from "rxjs";
import { HttpClient } from "@angular/common/http";

@Injectable({
  providedIn: 'root'
})
export class AggregateService {

  constructor(private http:HttpClient) { }

  aggregate(token: string):Observable<any> {
    let url = "http://localhost:8000/api/admin/aggregate";
    let headers = { 'Content-Type':'application/json', 'Authorization': `Bearer ${token}` };
    return this.http.get(url,{ headers })
  }
}
