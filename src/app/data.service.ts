import { HttpClient } from "@angular/common/http";
import { Injectable } from '@angular/core';
import {Observable} from "rxjs";

const DATA_URL = 'http://jsonplaceholder.typicode.com/users/'

@Injectable({
  providedIn: 'root'
})
export class DataService {

  constructor(private http:HttpClient) { }

  get_users():Observable<any> {
    return this.http.get(DATA_URL)
  }
}
