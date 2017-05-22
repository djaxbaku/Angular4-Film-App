import { Component, OnInit } from '@angular/core';
import {NgForm} from '@angular/forms';
import {AuthService} from '../auth.service';
import {Md5} from 'ts-md5/dist/md5';
import { Router, ActivatedRoute } from '@angular/router';
@Component({
  selector: 'app-signin',
  templateUrl: './signin.component.html',
  styleUrls: ['./signin.component.scss']
})
export class SigninComponent implements OnInit {

  constructor(private authService:AuthService, private route: ActivatedRoute,private router: Router) { }
  returnUrl:string;
  ngOnInit() {
    this.returnUrl = this.route.snapshot.queryParams['returnUrl'] || '/';
  }
	onSignin(form:NgForm){
	  	const email = form.value.email;
	  	const password = Md5.hashStr(form.value.password).toString();
	  	this.authService.signinUser(email,password,this.returnUrl);
	  }
}
