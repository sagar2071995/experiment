import { Component, OnInit } from '@angular/core';
import { DataService } from './../data.service';
import { Employee } from '../shared/employee.model';
import { Router } from '@angular/router';
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
public list: any;
temp : any;
employees : Employee[]
  constructor(private router: Router,private dataservice: DataService) { }
  showEmployee(){
    this.dataservice.getData().subscribe((res) => {
      this.list = res
      console.log(this.list)
    });
  }
  logout(){
    this.router.navigate(['/login'])
  }
  ngOnInit() { 
   this.showEmployee();
}

}
