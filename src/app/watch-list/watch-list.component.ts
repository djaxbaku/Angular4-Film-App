import { Component, OnInit } from '@angular/core';
import {NgForm ,ReactiveFormsModule,FormGroup,FormControl} from '@angular/forms';
import {WatchListService} from '../services/watch-list.service';
import {ActivatedRoute, Params,Router} from '@angular/router';

@Component({
  selector: 'app-watch-list',
  templateUrl: './watch-list.component.html',
  styleUrls: ['./watch-list.component.css']
})
export class WatchListComponent implements OnInit {
	lists:any[];
	visibleform=false;
  listsForm= new FormGroup({
    name:new FormControl(),
    desc:new FormControl()
  })
  items:any[];
  constructor(private watchlistService:WatchListService,private router:Router) { }

  ngOnInit() {
  	this.watchlistService.getWatchList()
    .subscribe(res => {
          const myArray = [];
          for (let key in res) {
            myArray.push(res[key]);
          }
          this.items = myArray[1];
           
        });
  }
  onCreateList(){
  	this.visibleform=true;
  }
  onSubmit(){
    
    const name = this.listsForm.value.name;
  	const desc = this.listsForm.value.desc;
    
  	this.watchlistService.createWatchList(name,desc);
    
  }
  onItemSelect(id:number){
    this.router.navigate(['watch-list-detail/',id])
  }
}
