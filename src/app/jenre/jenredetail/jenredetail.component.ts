import { Component, OnInit } from '@angular/core';
import {ActivatedRoute, Params,Router} from '@angular/router';
import {FilmService} from '../../services/filmservice.service';


@Component({
  selector: 'app-jenredetail',
  templateUrl: './jenredetail.component.html',
  styleUrls: ['./jenredetail.component.css']
})
export class JenredetailComponent implements OnInit {
  id:number;
  items:any[];
  constructor(private route: ActivatedRoute,private router:Router, private filmService:FilmService) { }

  ngOnInit() {
  	this.route.params.subscribe(
      (params:Params)=>{
        this.id= +params['id'];
        this.filmService.genreService(this.id).subscribe(res => {
          const myArray = [];
          for (let key in res) {
            myArray.push(res[key]);
          }
          this.items = myArray[2];
           console.log(this.items);
        });
      }

    )
    
  }

  

}
