import { Component, OnInit } from '@angular/core';
import {ActivatedRoute, Params,Router} from '@angular/router';
import {WatchListService} from '../../services/watch-list.service';
@Component({
  selector: 'app-watch-list-detail',
  templateUrl: './watch-list-detail.component.html',
  styleUrls: ['./watch-list-detail.component.css']
})
export class WatchListDetailComponent implements OnInit {
  id:number;
  constructor(private route: ActivatedRoute,private router:Router,private watchlistService:WatchListService ) { }
  items:any[];
  ngOnInit() {
  	this.route.params.subscribe(
      (params:Params)=>{
        this.id= +params['id'];
        
        this.watchlistService.openDetail(this.id)
        .subscribe(res => {
          const myArray = [];
          for (let key in res) {
            myArray.push(res[key]);
          }
          this.items = myArray[4];
        });
      }

    )
  }

}
