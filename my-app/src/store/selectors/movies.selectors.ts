import { MemoizedSelector, createFeatureSelector, createSelector } from '@ngrx/store';
import { IAppState } from '..';
import { MoviesState, featureKeyMovies } from '../states/movies.state';

export const selectStateMovies: MemoizedSelector<IAppState, MoviesState> =
 createFeatureSelector<MoviesState>(featureKeyMovies);

export const selectMovies: any = createSelector(selectStateMovies, (state: MoviesState) => state.movies);

export const selectMovie: any = createSelector(selectStateMovies, (state: MoviesState) => state.movie);

export const selectMoviesPopular: any = createSelector(selectStateMovies, (state: MoviesState) => state.moviesPopular);
