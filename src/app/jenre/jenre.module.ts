import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {JenreRoutingModule} from './jenre-routing.module'
import {JenreComponent} from './jenre.component';
import { JenredetailComponent } from './jenredetail/jenredetail.component';


@NgModule({
	declarations:[
	JenreComponent,
	JenredetailComponent
	],
	imports:[
	CommonModule,
	JenreRoutingModule
	]
})
export class JenreModule {
}