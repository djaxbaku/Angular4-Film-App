import {NgModule} from '@angular/core';
import {Routes,RouterModule} from '@angular/router'; 
import {WatchListComponent} from './watch-list.component';
import {AuthGuard} from '../auth/authguard.service';
import {WatchListDetailComponent} from './watch-list-detail/watch-list-detail.component';

const WatchListRoutes : Routes=[
	{ path:'', component:WatchListComponent,canActivate:[AuthGuard],children:[
	{ path:'watch-list-detail/:id', component:WatchListDetailComponent}
	]}
	
];
@NgModule({
	imports:[
	RouterModule.forChild(WatchListRoutes)

	],
	exports:[RouterModule]
})
export class WatchListRoutingModule {

}

