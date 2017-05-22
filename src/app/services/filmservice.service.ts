import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';
import 'rxjs/add/operator/map';
import { Observable } from 'rxjs';
import { ReplaySubject } from 'rxjs/ReplaySubject';
import {Router} from '@angular/router';

@Injectable()
export class FilmService {
  subject = new ReplaySubject<any>();
	succes=false;
	result: Object;
  items: any[];
  currentSession:string;
  myRate: Object;
  constructor(private http: Http,private router:Router) { }
  
  searchService(search){
    let value= search;
    this.succes= true;
        this.http.get('https://api.themoviedb.org/3/search/movie?api_key=c2ba3cbec0e7073748338581f688e546&query='+value)
        .map(
          (res: Response) => res.json()
          )
        .subscribe(res => {
          const myArray = [];

          for (let key in res) {

            myArray.push(res[key]);
          }
          this.items = myArray[1];
          
          this.subject.next({items:this.items});
        });
        
        
        
  }
  getUpcoming(){
    return this.http.get('https://api.themoviedb.org/3/movie/upcoming?api_key=c2ba3cbec0e7073748338581f688e546&language=en-US&page=1')
        .map(
          (res: Response) => res.json()
          )
  } 
  popularService(i:number){
    this.succes= true;
      return  this.http.get('https://api.themoviedb.org/3/movie/popular?api_key=c2ba3cbec0e7073748338581f688e546&language=en-US&page='+i)
        .map(
          (res: Response) => res.json()
          )
        
        
  }
  topRatedService(){
    this.succes= true;
      return  this.http.get('https://api.themoviedb.org/3/movie/top_rated?api_key=c2ba3cbec0e7073748338581f688e546&language=en-US&page=1')
        .map(
          (res: Response) => res.json()
          )
  }
  genreService(id:number){
    return  this.http.get('https://api.themoviedb.org/3/genre/'+id+'/movies?api_key=c2ba3cbec0e7073748338581f688e546&language=en-US&include_adult=true&sort_by=created_at.asc')
        .map(
          (res: Response) => res.json()
          )
  }
  getFilmJenres(){
     return this.http.get('https://api.themoviedb.org/3/genre/movie/list?api_key=c2ba3cbec0e7073748338581f688e546&language=en-US')
        .map(
          (res: Response) => res.json()
          )
        
  }
  jenreChange(id:number){
    this.router.navigate(['/jenre/',id]);
  }
  filmDetailService(id:number){
    
     return this.http.get('https://api.themoviedb.org/3/movie/'+id+'?api_key=c2ba3cbec0e7073748338581f688e546&language=en-US&append_to_response=2')
        .map(
          (res: Response) => res.json()
          
          )

  }
  getSession(){
    this.currentSession=JSON.parse( localStorage.getItem('currentUser') );
    
  }
  rateFilm(id:number,rate:number){
    this.myRate={
  "value": rate
    };
    this.currentSession=JSON.parse( localStorage.getItem('currentUser') ).session;
    this.http.post('https://api.themoviedb.org/3/movie/'+id+'/rating?api_key=c2ba3cbec0e7073748338581f688e546&session_id='+this.currentSession, this.myRate)
        .map(
          (res: Response) => res.json()
          
          ).subscribe(res => {
          const myArray = [];

          for (let key in res) {

            myArray.push(res[key]);
          }
          console.log(myArray);          
        });
  }
}
