import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { User } from './user.model'
@Injectable({
  providedIn: 'root'
})
export class DataService {
  public friends = [ 'sagar' , 'raj', 'sachin' , 'rahul', 'sushil'];
  constructor(private _http:HttpClient) { }
  apiUrl="http://localhost:3000/employee"
  get() {
    return this.friends;
  }
  getData(){
    return this._http.get<User[]>(this.apiUrl);
  }
}
