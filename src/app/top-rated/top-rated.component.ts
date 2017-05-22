import { Component, OnInit } from '@angular/core';
import {FilmService} from '../services/filmservice.service';


import { Http, Response } from '@angular/http';
import {Router} from '@angular/router';
import {IStarRatingOnClickEvent, IStarRatingOnRatingChangeEven, IStarRatingIOnHoverRatingChangeEvent} from "angular-star-rating/src/star-rating-struct";
@Component({
  selector: 'app-top-rated',
  templateUrl: './top-rated.component.html',
  styleUrls: ['./top-rated.component.scss']
})
export class TopRatedComponent implements OnInit {
	succes=false;
	result: Object;
  items: any[];
  item:any[];
  id:number;
  year:number;
  constructor(private filmService:FilmService,private http: Http,private router:Router) { }

  onHoverRatingChangeResult:IStarRatingIOnHoverRatingChangeEvent;
  onRatingChangeResult:IStarRatingOnRatingChangeEven;
  onClickResult:IStarRatingOnClickEvent;
  ngOnInit() {
  	this.filmService.topRatedService().subscribe(res => {
          const myArray = [];
          for (let key in res) {
            myArray.push(res[key]);
          }
          this.items = myArray[1];
          
        });
  }
   onFilmDetail(id:number){
    this.router.navigate(['film/',id]);
    console.log(JSON.parse(localStorage.getItem('currentUser')).email)
  }

}
