import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {PopularRoutingModule} from './popular-routing.module'
import {PopularComponent} from './popular.component';
import { StarRatingModule } from 'angular-star-rating';

@NgModule({
	declarations:[
	PopularComponent
	],
	imports:[
	CommonModule,
	PopularRoutingModule,
	StarRatingModule
	]
})
export class PopularModule {
}