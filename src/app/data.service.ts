import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class DataService {
  public friends = [ 'sagar' , 'raj', 'sachin' , 'rahul', 'sushil'];
  constructor() { }
  get() {
    return this.friends;
  }
}
