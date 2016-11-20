import {NgModule} from '@angular/core'
import {Routes, RouterModule} from '@angular/router';
import {MovieComponent} from './components/movie/movie.component';
import {MoviesComponent} from './components/movies/movies.component';


const AppRoutes: Routes = [
  {
    path: '', component: MoviesComponent
  },
  {
    path: 'movie/:id', component: MovieComponent
  }

]

@NgModule({
  imports: [RouterModule.forRoot(AppRoutes)],
  exports: [RouterModule],
  providers: []
})

export class RoutingComponent {}

