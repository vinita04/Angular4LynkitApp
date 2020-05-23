import { Component, OnInit } from '@angular/core';
import {User} from '../User'
import {LoginComponent} from '../login/login.component'
@Component({
  selector: 'app-registration',
  templateUrl: './registration.component.html',
  styleUrls: ['./registration.component.css']
})

export class RegistrationComponent implements OnInit {
  usrname="";
  usremail="";
  usrphone="";
  usrpwd="";
  usrconfirmPwd="";
  constructor() { }
  ngOnInit(): void {
  }
 
}
