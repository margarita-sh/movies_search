import { MemoizedSelector, createFeatureSelector, createSelector } from '@ngrx/store';
import { IAppState } from '..';
import { MoviesState, featureKeyMovies } from '../states/movies.state';
import { Result } from 'src/app/components/details/model/details.model';

export const selectStateMovies: MemoizedSelector<IAppState, MoviesState> =
	createFeatureSelector<MoviesState>(featureKeyMovies);

export const selectMovies: any = createSelector(selectStateMovies, (state: MoviesState) => state.result?.results);

export const selectTotalMovies: any = createSelector(selectStateMovies, (state: MoviesState) => state.result?.total_results);

export const selectMovie: any = createSelector(selectStateMovies, (state: MoviesState) => state.movie);

export const selectMoviesPopular: any = createSelector(selectStateMovies, (state: MoviesState) => state.moviesPopular);

export const selectMoviesVideoKey: any = createSelector(selectStateMovies, (state: MoviesState) => {
	if (state.movie && state.movie.videos) {
		return state.movie.videos.results.find((data: Result) => {
			return data.key;
		});
	} else {
		return null;
	}
}
);

export const quantityMovies: any = createSelector(selectStateMovies, (state: MoviesState) => state.quantityMovies);
