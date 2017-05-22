import {NgModule} from '@angular/core';
import {Routes,RouterModule} from '@angular/router';
import {SignupComponent} from './auth/signup/signup.component';
import {SigninComponent} from './auth/signin/signin.component';
import {JenreComponent} from './jenre/jenre.component';
import {AuthGuard} from './auth/authguard.service';

const appRoutes:Routes =[
	{path:'', redirectTo: '/popular', pathMatch:'full'},
	{path:'popular', loadChildren:'./popular/popular.module#PopularModule'},
	{path:'search', loadChildren:'./search/search.module#SearchModule'},
	{path:'signup', component:SignupComponent},
	{path:'signin', component:SigninComponent},
	{path:'jenre', loadChildren:'./jenre/jenre.module#JenreModule'},
	{path:'film', loadChildren:'./film-detail/film-detail.module#FilmDetailModule'},
	{path:'watchlist', loadChildren:'./watch-list/watch-list.module#WatchListModule',canActivate:[AuthGuard]},
	{path:'toprated', loadChildren:'./top-rated/top-rated.module#TopRatedModule'},
	// {path: '**', redirectTo:'' }

];
@NgModule({
	imports:[RouterModule.forRoot(appRoutes)],
	exports:[RouterModule]
})
export class AppRoutingModule {

} 