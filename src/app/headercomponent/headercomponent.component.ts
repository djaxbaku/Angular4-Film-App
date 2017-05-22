import { Component, OnInit } from '@angular/core';
import { Routes,Router, RouterModule } from '@angular/router';
import {FilmService} from '../services/filmservice.service';
import {AuthService} from '../auth/auth.service';
import {AuthGuard} from '../auth/authguard.service';
@Component({
  selector: 'app-headercomponent',
  templateUrl: './headercomponent.component.html',
  styleUrls: ['./headercomponent.component.scss']
})
export class HeadercomponentComponent implements OnInit {
	succes=false;
	result: Object;
  	items: any[];
    jenres:any[];
    upcomingFilms:any[];
  constructor(private filmService:FilmService,private router:Router,private authService:AuthService,private authGuard:AuthGuard) { }
  local:string;
  ngOnInit() {
    this.filmService.getUpcoming()
    .subscribe(res => {
          const myArray = [];
          for (let key in res) {
            myArray.push(res[key]);
          }
          this.upcomingFilms = myArray[1];
  
        });
    
  }

  onSearch(search){
    if (search!='') {
      this.filmService.searchService(search);
    this.router.navigate(['/search']);
    
    }
    else{
      this.router.navigate(['']);
    }
  }	
  filmJenres(){
    if (this.jenres==undefined) {
      this.filmService.getFilmJenres()
      .subscribe(res => {

             const myArray = [];
            for (let key in res) {
              myArray.push(res[key]);
            }
            this.jenres = myArray[0]; 
          });
    }
    else{
      this.jenres=undefined;
    }
  }
  onLogout(){
    this.authService.logout();
  }
  jenreCheck(id:number){
    this.filmService.jenreChange(id);
  }
  onFilmDetail(id:number){
    this.router.navigate(['film/',id]);
  }
}
