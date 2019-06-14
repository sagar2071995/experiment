import { Component, OnInit } from '@angular/core';
import { DataService } from './../data.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
public list: any;
  constructor(private dataservice: DataService) { }

  ngOnInit() {
    console.log('hi');
    this.list = this.dataservice.get();
    console.log(this.list);
  }

}
