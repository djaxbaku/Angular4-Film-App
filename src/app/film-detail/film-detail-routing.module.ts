import {NgModule} from '@angular/core';
import {Routes,RouterModule} from '@angular/router'; 
import {FilmDetailComponent} from './film-detail.component';
import {FilmInfoComponent} from './film-info/film-info.component';
import {FilmRateComponent} from './film-rate/film-rate.component';
import {AuthGuard} from '../auth/authguard.service';

const FilmDetailRoutes : Routes=[
	{ path:'', component:FilmDetailComponent,children:[
	{path:':id',component:FilmInfoComponent},
	{path:':id/rate/:rate',component:FilmRateComponent,canActivate:[AuthGuard]}
	]}
];
@NgModule({
	imports:[
	RouterModule.forChild(FilmDetailRoutes)

	],
	exports:[RouterModule]
})
export class FilmDetailRoutingModule {

}

