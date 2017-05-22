import {CanActivate,CanDeactivate, ActivatedRouteSnapshot,RouterStateSnapshot,Router} from '@angular/router';
import {AuthService} from './auth.service';
import {Injectable} from '@angular/core';

@Injectable()
export class AuthGuard implements CanActivate {
	constructor(private authService: AuthService,private router:Router){}
	canActivate(route:ActivatedRouteSnapshot,state:RouterStateSnapshot){
		 if (localStorage.getItem('currentUser')) {
            // logged in so return true
            return true;
        }
 		else{
        // not logged in so redirect to login page with the return url
        console.log('haha');
        this.router.navigate(['/signin'], { queryParams: { returnUrl: state.url }});

		}
	}
	
}