import {NgModule} from '@angular/core';
import {Routes,RouterModule} from '@angular/router'; 
import {TopRatedComponent} from './top-rated.component';

const topRatedRoutes : Routes=[
	{ path:'', component:TopRatedComponent}
];
@NgModule({
	imports:[
	RouterModule.forChild(topRatedRoutes)

	],
	exports:[RouterModule]
})
export class TopRatedRoutingModule {

}
