import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {WatchListRoutingModule} from './watch-list-routing.module';
import {WatchListComponent} from './watch-list.component';
import {FormsModule,ReactiveFormsModule, FormGroup} from '@angular/forms';
import { WatchListDetailComponent } from './watch-list-detail/watch-list-detail.component';


@NgModule({
	declarations:[
	WatchListComponent,
	WatchListDetailComponent,
	
	],
	imports:[
	FormsModule,
	ReactiveFormsModule,
	CommonModule,
	WatchListRoutingModule
	]
})
export class WatchListModule {
}