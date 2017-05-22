import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule,ReactiveFormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { HeadercomponentComponent } from './headercomponent/headercomponent.component';

import {FilmService} from './services/filmservice.service';
import {AppRoutingModule} from './app-routing.module';
import { PopularModule} from './popular/popular.module';
import { TopRatedModule} from './top-rated/top-rated.module';
import { SearchModule} from './search/search.module';
import { SignupComponent } from './auth/signup/signup.component';
import { SigninComponent } from './auth/signin/signin.component';
import { AuthService } from './auth/auth.service';
import { JenreComponent } from './jenre/jenre.component';
import {JenreModule} from './jenre/jenre.module';
import {AuthGuard} from './auth/authguard.service';
import { FilmDetailModule } from './film-detail/film-detail.module';
import { WatchListModule } from './watch-list/watch-list.module';
import { WatchListService } from './services/watch-list.service';


@NgModule({
  declarations: [
    AppComponent,
    HeadercomponentComponent,
    SignupComponent,
    SigninComponent,  
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    HttpModule,
    AppRoutingModule,
    PopularModule,
    SearchModule,
    JenreModule,
    FilmDetailModule,
    WatchListModule,
    TopRatedModule
  ],
  providers: [FilmService,AuthService,AuthGuard,WatchListService],
  bootstrap: [AppComponent]
})
export class AppModule { }
