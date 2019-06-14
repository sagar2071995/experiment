import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
 name: any;
 password: any;
  constructor(private router: Router) { }
  validate(uname,pass) {
    if(this.name == uname.value && this.password == pass.value){
      this.router.navigate(['/home']);  
    }
    else{
      alert('Enter correct credential..!!')
      uname.value=''
      pass.value=''
    }
    
  }

  ngOnInit() {
    this.name = localStorage.getItem('name');
    this.password = localStorage.getItem('pass');
    }
}
