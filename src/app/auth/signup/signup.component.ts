import { Component, OnInit } from '@angular/core';
import {NgForm} from '@angular/forms';
import {AuthService} from '../auth.service';
import {Md5} from 'ts-md5/dist/md5';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.scss']
})
export class SignupComponent implements OnInit {

  constructor(private authService:AuthService) { }

  ngOnInit() {
  }
  onSignup(form:NgForm){
  	const email = form.value.email;
  	const password = Md5.hashStr(form.value.password).toString();
  	this.authService.signupUser(email,password);
  }
}
