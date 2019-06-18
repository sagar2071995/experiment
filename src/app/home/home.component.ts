import { Component, OnInit } from '@angular/core';
import { DataService } from './../data.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
public list: any;
temp : any;
  constructor(private dataservice: DataService) { }

  ngOnInit() {
    this.list = this.dataservice.get();
  //  this.dataservice.getData().
  //   subscribe(data =>
  //      this.temp = data);
  //    console.log(this.temp);
   
}

}
