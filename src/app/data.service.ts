import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Employee } from './shared/employee.model'
@Injectable({
  providedIn: 'root'
})
export class DataService {
  public friends = [ 'sagar' , 'raj', 'sachin' , 'rahul', 'sushil'];
  constructor(private _http:HttpClient) { }
  apiUrl="http://localhost:3000/employees"
  employee : Employee[]
  get() {
    return this.friends;
  }
  getData(){
    return this._http.get<Employee[]>(this.apiUrl);
  }
}
