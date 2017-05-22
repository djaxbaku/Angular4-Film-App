import { Component, OnInit } from '@angular/core';
import {ActivatedRoute, Params,Router} from '@angular/router';
import {FilmService} from '../../services/filmservice.service';
import {IStarRatingOnClickEvent, IStarRatingOnRatingChangeEven, IStarRatingIOnHoverRatingChangeEvent} from "angular-star-rating/src/star-rating-struct";
import {WatchListService} from '../../services/watch-list.service';
@Component({
  selector: 'app-film-info',
  templateUrl: './film-info.component.html',
  styleUrls: ['./film-info.component.scss']
})
export class FilmInfoComponent implements OnInit {
  
    
    
   
  constructor(private route: ActivatedRoute,private router:Router,private filmService:FilmService,private watchlistService:WatchListService) { 

  }
	items:any[];
  id:number;
  succes=false;
  lists:any[];
  recordSucces:any[];
  onHoverRatingChangeResult:IStarRatingIOnHoverRatingChangeEvent;
    onRatingChangeResult:IStarRatingOnRatingChangeEven;
    onClickResult:IStarRatingOnClickEvent;
   

   
     
  ngOnInit() {

  	this.route.params.subscribe(
      (params:Params)=>{
        this.id= +params['id'];

        this.filmService.filmDetailService(this.id).subscribe(res => {
          const myArray = [];
          for (let key in res) {
            myArray.push(res[key]);
          }
          this.items = myArray;
          this.succes=true;

        });
      }

    )
    if (localStorage.getItem('currentUser')) {
     this.watchlistService.getWatchList()
    .subscribe(res => {
          const myArray = [];
          for (let key in res) {
            myArray.push(res[key]);
          }
          this.lists = myArray[1];
           
        });
    }
    
  }
  onClick = ($event:IStarRatingOnClickEvent) => {
        this.onClickResult = $event;
        
    };
  
    callType(id:number,filmId:number){
      this.watchlistService.addFilm(id,filmId)
      .subscribe(res => {
          const myArray = [];
          for (let key in res) {
            myArray.push(res[key]);
          }
          this.recordSucces=myArray[1];
           
        });
    }
}
