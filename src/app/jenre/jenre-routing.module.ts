import {NgModule} from '@angular/core';
import {Routes,RouterModule} from '@angular/router'; 
import {JenreComponent} from './jenre.component';
import {JenredetailComponent} from './jenredetail/jenredetail.component';

const jenreRoutes : Routes=[
	{ path:'', component:JenreComponent,children:[
	{path:':id',component:JenredetailComponent}
	
	]}
];
@NgModule({
	imports:[
	RouterModule.forChild(jenreRoutes)

	],
	exports:[RouterModule]
})
export class JenreRoutingModule {

}

