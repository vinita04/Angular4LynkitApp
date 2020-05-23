import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  loginemailid="";
  loginpwd="";
  flag=false;
  constructor(private router: Router) { }
  
  ngOnInit(): void {
  }
  validateDetails(){
    if(this.loginemailid=="lynkit@app.com" && this.loginpwd=="lynkit"){
      this.flag=false;
      this.router.navigate(['/homepage-component'])
    }
    else{
      this.flag=true;
    }
  }
}
