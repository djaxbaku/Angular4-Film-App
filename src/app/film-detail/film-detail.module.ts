import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {FilmDetailRoutingModule} from './film-detail-routing.module'
import {FilmDetailComponent} from './film-detail.component';
import { FilmInfoComponent } from './film-info/film-info.component';
import { FilmRateComponent } from './film-rate/film-rate.component';
import { StarRatingModule } from 'angular-star-rating';


@NgModule({
	declarations:[
	FilmDetailComponent,
	FilmInfoComponent,
	FilmRateComponent,
	
	],
	imports:[
	CommonModule,
	FilmDetailRoutingModule,
	StarRatingModule
	]
})
export class FilmDetailModule {
}