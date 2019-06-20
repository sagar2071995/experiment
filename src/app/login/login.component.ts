import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { DataService } from './../data.service';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
 name: any;
 password: any;
 temp:any
  constructor(private router: Router,private dataservice: DataService) { }
  validate(uname,pass) {

    // if(this.name == uname.value && this.password == pass.value){
    //   this.router.navigate(['/home']);  
    // }
    // else{
    //   alert('Enter correct credential..!!')
    //   uname.value=''
    //   pass.value=''
    // }
    this.dataservice.checkUser(uname.value,pass.value).subscribe((res) => {
      this.temp= res
      if(this.temp.success==true){
        this.router.navigate(['/home']); 
      }
      else{

        this.router.navigate(['/login'])
        alert('Enter correct credential..!!')
       uname.value=''
       pass.value=''
      }
    }) 
  }

  ngOnInit() {
    this.name = localStorage.getItem('name');
    this.password = localStorage.getItem('pass');
    }
}
