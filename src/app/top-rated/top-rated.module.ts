import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import { TopRatedRoutingModule } from './top-rated-routing.module';
import {TopRatedComponent} from './top-rated.component';
import { StarRatingModule } from 'angular-star-rating';

@NgModule({
	declarations:[
	TopRatedComponent
	],
	imports:[
	CommonModule,
	TopRatedRoutingModule,
	StarRatingModule
	]
})
export class TopRatedModule {
}