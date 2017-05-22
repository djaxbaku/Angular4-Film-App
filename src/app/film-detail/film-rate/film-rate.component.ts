import { Component, OnInit } from '@angular/core';
import {ActivatedRoute, Params,Router} from '@angular/router';
import {FilmService} from '../../services/filmservice.service';

@Component({
  selector: 'app-film-rate',
  templateUrl: './film-rate.component.html',
  styleUrls: ['./film-rate.component.css']
})
export class FilmRateComponent implements OnInit {
	id:number;
	rate:number;
  constructor(private route: ActivatedRoute,private router:Router,private filmService:FilmService) { }

  ngOnInit() {
    
  	this.route.params.subscribe(
      (params:Params)=>{
        this.id= +params['id'];
        console.log(this.id);
        this.rate= +params['rate'];
        this.filmService.rateFilm(this.id,this.rate);
       	this.router.navigate(['film',this.id]);
      }

    )
  
  	
  }

}
