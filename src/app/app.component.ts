import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'experiment';

ngOnInit( ) {
localStorage.setItem('name', 'sagar');
localStorage.setItem('pass', 'iauro100');
}
}
