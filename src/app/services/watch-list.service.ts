import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';
import 'rxjs/add/operator/map';
import { Observable } from 'rxjs';
import { ReplaySubject } from 'rxjs/ReplaySubject';
import {Router} from '@angular/router';

@Injectable()
export class WatchListService {
	
	currentSession:string;
	constructor(private http: Http,private router:Router) {	}
	
	getSession(){
    this.currentSession='a3808455142660711bfcb46ef0886404206383c4';

  	}	

	createWatchList(name:string,desc:string){
	 const newlistrequest= {
    "name": name,
    "description": desc,
    "language":"en"
      };

    this.currentSession=JSON.parse( localStorage.getItem('currentUser') ).session;
	  this.http.post('https://api.themoviedb.org/3/list?api_key=c2ba3cbec0e7073748338581f688e546&session_id='+this.currentSession, newlistrequest)
        .map(
          (res: Response) => res.json()
          
           )
        .subscribe(res => {
          const myArray = [];

          for (let key in res) {

            myArray.push(res[key]);
          }
                   
         });

	}

	getWatchList(){
    this.currentSession=JSON.parse( localStorage.getItem('currentUser') ).session;

 return  this.http.get('https://api.themoviedb.org/3/account/{account_id}/lists?api_key=c2ba3cbec0e7073748338581f688e546&language=en-US&session_id='+this.currentSession+'&page=1')
        .map(
          (res: Response) => res.json()
          )
	}
  openDetail(id:number){
    return  this.http.get('https://api.themoviedb.org/3/list/'+id+'?api_key=c2ba3cbec0e7073748338581f688e546&language=en-US')
        .map(
          (res: Response) => res.json()
          )
  }
  addFilm(id:number,filmid:number){
    const filmId={
      "media_id": filmid
    }
   return this.http.post('https://api.themoviedb.org/3/list/'+id+'/add_item?api_key=c2ba3cbec0e7073748338581f688e546&session_id=017f0a3640e61a15a0f637041f6b26f44cde62c7', filmId)
        .map(
          (res: Response) => res.json()
          )
  }
}