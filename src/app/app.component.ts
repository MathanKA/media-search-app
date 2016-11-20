import { Component } from '@angular/core';
import {MovieService} from "./services/movie.service";
import {Http, Jsonp} from "@angular/http";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  constructor (private _http: Http, private _movieService: MovieService, private _jsonp: Jsonp){}
}
