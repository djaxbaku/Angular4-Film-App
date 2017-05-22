import { Injectable } from '@angular/core';
import * as firebase from 'firebase';
import { Http, Response } from '@angular/http';
import 'rxjs/add/operator/map';
import {Users} from './users.model';
import {Router} from '@angular/router';
import {FilmService} from '../services/filmservice.service';
import {WatchListService} from '../services/watch-list.service';
@Injectable()
export class AuthService {
  token:any[];
  validatedtoken:any[];
  session:string;
  usersData:any[];
  login=false;
  currentSession:string;
  signup:boolean;
  constructor(private http:Http,private router:Router,private filmService:FilmService,private watchlistService:WatchListService) { }

  signupUser(email:string,password:string){
    this.http.get('https://film-d1a13.firebaseio.com/users.json')
            .map(
              (res: Response) => res.json()
              )
            .subscribe(res => {
              const myArray = [];

              for (let key in res) {

                myArray.push(res[key]);
              }
              this.usersData = myArray; 
              
              if (password!='' && email!='') {
                let i=0;
                for (let user of this.usersData){ 

                   if(this.usersData[i][0].email == email){
                     this.signup=false;
                     console.log('The username and password that you entered did not match our records. Please double-check and try again.')
                   }
                   
                   i++;

              }
              }
              if (this.signup!=false){
                
                if (password!='' && email!='') {
      this.http.get('https://api.themoviedb.org/3/authentication/token/new?api_key=c2ba3cbec0e7073748338581f688e546')
        .map(
          (res: Response) => res.json()
          )
        .subscribe(res => {
          const myArray = [];

          for (let key in res) {

            myArray.push(res[key]);
            this.token = myArray[2];  
          }
           console.log('token '+this.token);
           if(this.token!=null){
           this.http.get('https://api.themoviedb.org/3/authentication/token/validate_with_login?api_key=c2ba3cbec0e7073748338581f688e546&username=axpiranha&password=axpiranha&request_token='+this.token)
          .map(
            (res: Response) => res.json()
            )
          .subscribe(res => {
            const myArray = [];

            for (let key in res) {

              myArray.push(res[key]);
            }
            this.validatedtoken = myArray[1];   
             console.log('validated token '+this.validatedtoken);    
             if (this.validatedtoken!=null) {
              this.http.get('https://api.themoviedb.org/3/authentication/session/new?api_key=c2ba3cbec0e7073748338581f688e546&request_token='+this.validatedtoken)
            .map(
              (res: Response) => res.json()
              )
            .subscribe(res => {
              const myArray = [];

              for (let key in res) {

                myArray.push(res[key]);
              }
              this.session = myArray[1];   
              console.log('session1 '+ this.session);
              if(this.session!=''){
               
               let users=[
                 new Users(email,password,this.session)
                ];
                console.log(users);
                this.http.post('https://film-d1a13.firebaseio.com/users/.json', users.slice())
                .subscribe(
                  (response: Response)=>{
                   

                  }
                  )
             }
            });
             
          }      
          });
          
          }
        });
        


          
    }
              }
              
            })
    
  }

  signinUser(email:string,password:string,returnUrl:string){
  	this.http.get('https://film-d1a13.firebaseio.com/users.json')
            .map(
              (res: Response) => res.json()
              )
            .subscribe(res => {
              const myArray = [];

              for (let key in res) {

                myArray.push(res[key]);
              }
              this.usersData = myArray; 
              
              if (password!='' && email!='') {
                let i=0;
                for (let user of this.usersData){ 

                   if(this.usersData[i][0].email == email && this.usersData[i][0].password == password){
                    this.currentSession=this.usersData[i][0].session;
                    this.filmService.getSession();
                    this.watchlistService.getSession();
                    localStorage.setItem('currentUser', JSON.stringify({session: this.currentSession}));
                    this.login=true;
                    this.router.navigate([returnUrl]);
                   }
                   else{
                     console.log('The username and password that you entered did not match our records. Please double-check and try again.')
                   }
                   i++;

              }
              }
              
            })
  }
  isAuthenticated(){
    return this.login;
  }
  logout(){
    this.login=false;
     localStorage.removeItem('currentUser');
     this.router.navigate(['']);
  }
}
