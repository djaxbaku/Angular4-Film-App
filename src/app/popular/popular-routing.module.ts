import {NgModule} from '@angular/core';
import {Routes,RouterModule} from '@angular/router'; 
import {PopularComponent} from './popular.component';

const popularRoutes : Routes=[
	{ path:'', component:PopularComponent}
];
@NgModule({
	imports:[
	RouterModule.forChild(popularRoutes)

	],
	exports:[RouterModule]
})
export class PopularRoutingModule {

}
