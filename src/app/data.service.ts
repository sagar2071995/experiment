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
  userApi="http://localhost:3000/users/login"
  employee : Employee[]
  get() {
    return this.friends;
  }
  getData(){
    return this._http.get<Employee[]>(this.apiUrl);
    
  }
  checkUser(uname,pswd){
    var data={
      username:uname,
      password:pswd
    }
    return this._http.post(this.userApi,{data:data})
  }
}
