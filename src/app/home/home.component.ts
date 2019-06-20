import { Component, OnInit } from '@angular/core';
import { DataService } from './../data.service';
import { Employee } from '../shared/employee.model';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
public list: any;
temp : any;
employees : Employee[]
  constructor(private dataservice: DataService) { }

  ngOnInit() {
    this.dataservice.getData().subscribe((res) => {
      this.list = res
      console.log(this.list)
    });
  //  this.dataservice.getData().
  //   subscribe(data =>
  //      this.temp = data);
  //    console.log(this.temp);
   
}

}
