import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {SearchRoutingModule} from './search-routing.module'
import {SearchComponent} from './search.component';
import { StarRatingModule } from 'angular-star-rating';

@NgModule({
	declarations:[
	SearchComponent
	],
	imports:[
	CommonModule,
	SearchRoutingModule,
	StarRatingModule
	]
})
export class SearchModule {
}