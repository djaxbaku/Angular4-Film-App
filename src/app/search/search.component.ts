import { Component, OnInit } from '@angular/core';
import {FilmService} from '../services/filmservice.service';
import { Http, Response } from '@angular/http';
import {Router} from '@angular/router';
import { Subscription } from 'rxjs/Subscription';
import {IStarRatingOnClickEvent, IStarRatingOnRatingChangeEven, IStarRatingIOnHoverRatingChangeEvent} from "angular-star-rating/src/star-rating-struct";



@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.scss']
})
export class SearchComponent implements OnInit {
  subscription: Subscription;
  succes=false;
  result: Object;
  items: any[];

  constructor(private filmService:FilmService,private http: Http,private router:Router) { }
    onHoverRatingChangeResult:IStarRatingIOnHoverRatingChangeEvent;
    onRatingChangeResult:IStarRatingOnRatingChangeEven;
    onClickResult:IStarRatingOnClickEvent;
  ngOnInit() {
  	this.filmService.subject.subscribe(data =>{
      this.items   = data.items;
      this.succes = true;
    });
  }
    onFilmDetail(id:number){
    this.router.navigate(['film/',id]);
  }
}
