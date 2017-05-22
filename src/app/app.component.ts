import { Component, OnInit } from '@angular/core';
import * as firebase from 'firebase';
import {
    Router,
    // import as RouterEvent to avoid confusion with the DOM Event
    Event as RouterEvent,
    NavigationStart,
    NavigationEnd,
    NavigationCancel,
    NavigationError,
} from '@angular/router'

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  
  loading: boolean = true;
  local:string;
	constructor(private router: Router) { 
  router.events.subscribe((event: RouterEvent) => {
              this.navigationInterceptor(event);
          });
  }
  
  navigationInterceptor(event: RouterEvent): void {
        if (event instanceof NavigationStart) {
            this.loading = false;
        }
        if (event instanceof NavigationEnd) {
            this.loading = false;
        }

        // Set loading state to false in both of the below events to hide the spinner in case a request fails
        if (event instanceof NavigationCancel) {
            this.loading = false;
        }
        if (event instanceof NavigationError) {
            this.loading = false;
        }
    }
  ngOnInit(){
    
  	firebase.initializeApp({
  		apiKey: "AIzaSyDnKqUl9AevwoSM3eIyxH6-G-tJ96i3Elk",
    	authDomain: "film-d1a13.firebaseapp.com",
  	})
  }
}
