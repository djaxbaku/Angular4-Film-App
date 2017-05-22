import { Component, OnInit } from '@angular/core';
import {FilmService} from '../services/filmservice.service';


import { Http, Response } from '@angular/http';
import {Router} from '@angular/router';
import {IStarRatingOnClickEvent, IStarRatingOnRatingChangeEven, IStarRatingIOnHoverRatingChangeEvent} from "angular-star-rating/src/star-rating-struct";
declare var jQuery:any;
@Component({
  selector: 'app-popular',
  templateUrl: './popular.component.html',
  styleUrls: ['./popular.component.scss']
})  
export class PopularComponent implements OnInit {
	succes=false;
	result: Object;
  items: any[];
  item:any[];
  id:number;
  i=1;
  constructor(private filmService:FilmService,private http: Http,private router:Router) { 
  	
  }
  
  onHoverRatingChangeResult:IStarRatingIOnHoverRatingChangeEvent;
  onRatingChangeResult:IStarRatingOnRatingChangeEven;
  onClickResult:IStarRatingOnClickEvent;
  ngOnInit() {
     this.filmService.popularService(this.i).subscribe(res => {
          const myArray = [];
          for (let key in res) {
            myArray.push(res[key]);
          }
          this.items = myArray[1];
          
        });


  }
  
  

  onFilmDetail(id:number){
    this.router.navigate(['film/',id]);
  }
  onMore(){
    this.i++;
    this.filmService.popularService(this.i).subscribe(res => {
          const myArray = [];
          for (let key in res) {
            myArray.push(res[key]);
          }

          for (var i = 0; i <= 19; i++) {
           this.items.push(myArray[1][i])
          }
          console.log(this.items);
        });
  }
}
