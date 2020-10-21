import { createFeatureSelector, createSelector, MemoizedSelector } from '@ngrx/store';
import { GenresState, featureKeyGenres } from '../states/genres.state';
import { IAppState } from '..';

export const selectStateGenres: MemoizedSelector<IAppState, GenresState> =
 createFeatureSelector<GenresState>(featureKeyGenres);

export const selectGenres: any = createSelector(selectStateGenres, (state: GenresState) => state.genres);
