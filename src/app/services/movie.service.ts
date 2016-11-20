import {Injectable } from '@angular/core';
import {Jsonp} from '@angular/http';
import 'rxjs/Rx';

@Injectable()

export class MovieService {
    apikey: string;
    baseUrl = 'https://api.themoviedb.org/3/discover/movie';
    jsonpCallback = '?callback=JSONP_CALLBACK';
    popularMovies = '&sort_by=popularity.desc';

    constructor(private _jsonp: Jsonp) {
        this.apikey = '&api_key=f88433ff356894bdd7a06a008e50db61';
        console.log('Service started');
    }

    getPopular() {
    return this._jsonp.get(this.baseUrl + this.jsonpCallback + this.popularMovies + this.apikey).map(result => result.json());
    }

    searchMovie(searchStr) {
        return this._jsonp.get('https://api.themoviedb.org/3/search/movie' + this.jsonpCallback + '&query=' + searchStr + '&sort_by=popularity.desc' + this.apikey)
            .map(result => result.json());
    }

    movieDetails(id) {
        return this._jsonp.get('https://api.themoviedb.org/3/movie/' + id + this.jsonpCallback + this.apikey)
            .map(result => result.json());
    }

}