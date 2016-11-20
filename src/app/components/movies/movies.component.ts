import { Component, OnInit } from '@angular/core';
import {MovieService} from '../../services/movie.service';

@Component ({
    selector: 'app-movies',
    templateUrl: './movies.component.html',
    styleUrls: []
})

export class MoviesComponent implements OnInit{
    popularMovies: Array<Object>;
    nowInTheatre: Array<Object>;
    searchStr: string;
    searchRes: Array<Object> = [];
    // results: any;

    constructor (private _movieService: MovieService){    }

    ngOnInit () {
        this._movieService.getPopular().subscribe(
            response => {
                this.popularMovies = response.results;
                // console.log(this.popularMovies);
            }
        )
    }

    searchMovies() {
        this._movieService.searchMovie(this.searchStr)
            .subscribe(response => {
                this.searchRes = response.results;
                console.log(response.results);
            })
    }
}